import {Slot, component$} from '@builder.io/qwik'
import type {IButtonProps} from './interfaces'
import './styles.css'

export default component$<IButtonProps>(({...props}) => {
  return (
    <>
      <div class='pb-10'>
        <h1 class='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div class='py-5'>
          <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; extends{' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/card/`} class='fw-bold'>
            Bootstrap Card
          </a>
          &nbsp; through the SASS variables in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
          <code>{REACT_APP_SASS_PATH}/_card.scss</code>.
        </div>
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='custom'>
          <a href='#custom'></a>Custom Card
        </h1>
        <div class='py-5'>
          Use the custom card by adding
          <code>.card-custom</code>class with following markup:
        </div>
        <div class='py-5'>
          <div class='card card-custom shadow'>
            <div class='card-header'>
              <h3 class='card-title'>Title</h3>
              <div class='card-toolbar'>
                <button type='button' class='btn btn-sm btn-light'>
                  Action
                </button>
              </div>
            </div>
            <div class='card-body'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div class='card-footer'>Footer</div>
          </div>
        </div>
        <CodeBlock code={code} language='markup' />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='scroll'>
          <a href='#scroll'></a>Card Scroll
        </h1>
        <div class='py-5'>
          Use
          <code>.card-scroll</code>and
          <a href='' class='fw-bolder' target='_blank'>
            height classes
          </a>
          <code>.h-{'{size}'}</code>on a card's body to have a card with scrollable content:
        </div>
        <div class='py-5'>
          <div class='card card-custom shadow'>
            <div class='card-header'>
              <h3 class='card-title'>Title</h3>
              <div class='card-toolbar'>
                <button type='button' class='btn btn-sm btn-light'>
                  Action
                </button>
              </div>
            </div>
            <div class='card-body card-scroll h-200px'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
            <div class='card-footer'>Footer</div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='flush'>
          <a href='#flush'></a>Flush Borders
        </h1>
        <div class='py-5'>
          Use
          <code>.card-flush</code>class to remove a card header and footer borders:
        </div>
        <div class='py-5'>
          <div class='card card-custom card-flush shadow'>
            <div class='card-header'>
              <h3 class='card-title'>Title</h3>
              <div class='card-toolbar'>
                <button type='button' class='btn btn-sm btn-light'>
                  Action
                </button>
              </div>
            </div>
            <div class='card-body py-5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div class='card-footer'>Footer</div>
          </div>
        </div>
        <CodeBlock language='markup' code={code3} />
      </div>
      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='reset-side-paddings'>
          <a href='#reset-side-paddings'></a>Reset Side Paddings
        </h1>
        <div class='py-5'>
          Add
          <code>.card-px-0</code>to reset a card header, body and footer's side paddings:
        </div>

        <div class='py-5'>
          <div class='card card-custom card-px-0 shadow'>
            <div class='card-header'>
              <h3 class='card-title'>Title</h3>
              <div class='card-toolbar'>
                <button type='button' class='btn btn-sm btn-light'>
                  Action
                </button>
              </div>
            </div>
            <div class='card-body'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div class='card-footer'>Footer</div>
          </div>
        </div>
        <CodeBlock language='markup' code={code4} />
      </div>
      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='border'>
          <a href='#border'></a>Card Border
        </h1>
        <div class='py-5'>
          Add
          <code>.card-border</code>to a card to remove it's shadow and enable border.
        </div>

        <div class='py-5'>
          <div class='card card-custom card-border'>
            <div class='card-header'>
              <h3 class='card-title'>Title</h3>
              <div class='card-toolbar'>
                <button type='button' class='btn btn-sm btn-light'>
                  Action
                </button>
              </div>
            </div>
            <div class='card-body'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div class='card-footer'>Footer</div>
          </div>
        </div>
        <CodeBlock language='markup' code={code5} />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='stretch'>
          <a href='#stretch'></a>Card Stretch
        </h1>
        <div class='py-5'>
          To have same height cards within
          <a href='' class=''>
            Bootstrap
          </a>
          Grid use
          <code>.card-{`{mode}`}</code>or responsive
          <code>.card-{'{breakpoint}-{mode}'}</code>for
          <code>sm</code>,<code>md</code>,<code>lg</code>,<code>xl</code>, and
          <code>xxl</code>.
        </div>
        <div class='py-5'>
          Where
          <code>mode</code>is one of:
          <ul class='pt-3'>
            <li class='py-2'>
              <code>stretch</code>- for setting 100% stretch height
            </li>
            <li class='py-2'>
              <code>stretch-75</code>- for setting 75% stretch height
            </li>
            <li class='py-2'>
              <code>stretch-50</code>- for setting 50% stretch height
            </li>
            <li class='py-2'>
              <code>stretch-33</code>- for setting 33.333% stretch height
            </li>
            <li class='py-2'>
              <code>stretch-25</code>- for setting 25% stretch height
            </li>
          </ul>
        </div>
        <div class='py-5'>
          <div class='row g-5'>
            <div class='col-lg-4'>
              <div class='card card-custom card-stretch shadow mb-5'>
                <div class='card-header'>
                  <h3 class='card-title'>Height 100%</h3>
                </div>
                <div class='card-body'>Lorem Ipsum is simply dummy text</div>
                <div class='card-footer'>Footer</div>
              </div>
            </div>
            <div class='col-lg-4'>
              <div class='card card-custom card-stretch-50 shadow mb-5'>
                <div class='card-header'>
                  <h3 class='card-title'>Height 50%</h3>
                </div>
                <div class='card-body'>Lorem Ipsum is simply dummy text</div>
                <div class='card-footer'>Footer</div>
              </div>
              <div class='card card-custom card-stretch-50 shadow mb-5'>
                <div class='card-header'>
                  <h3 class='card-title'>Height 50%</h3>
                </div>
                <div class='card-body'>Lorem Ipsum is simply dummy text</div>
                <div class='card-footer'>Footer</div>
              </div>
            </div>
            <div class='col-lg-4'>
              <div class='card card-custom card-stretch-33 shadow mb-5'>
                <div class='card-header'>
                  <h3 class='card-title'>Height 33.333%</h3>
                </div>
                <div class='card-body'>Lorem Ipsum is simply dummy text</div>
                <div class='card-footer'>Footer</div>
              </div>
              <div class='card card-custom card-stretch-33 shadow mb-5'>
                <div class='card-header'>
                  <h3 class='card-title'>Height 33.333%</h3>
                </div>
                <div class='card-body'>Lorem Ipsum is simply dummy text</div>
                <div class='card-footer'>Footer</div>
              </div>
              <div class='card card-custom card-stretch-33 shadow mb-5'>
                <div class='card-header'>
                  <h3 class='card-title'>Height 33.333%</h3>
                </div>
                <div class='card-body'>Lorem Ipsum is simply dummy text</div>
                <div class='card-footer'>Footer</div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code6} language='markup' />
      </div>

      <div class='pt-10'>
        <h1 class='anchor fw-bolder mb-5' id='utilities'>
          <a href='#utilities'></a>Utility Classes
        </h1>
        <div class='py-5'>
          Use
          <code>.card-{`{property}`}</code>class on other elements to required card style properties
          defined through the SASS variables in
          <code>src/sass/_variables.scss</code>and
          <code>src/sass/_card.scss/</code>.
        </div>
        <div class='py-5'>
          Where
          <code>property</code>is one of:
          <ul class='pt-3'>
            <li class='py-2'>
              <code>p</code>- to set paddings from card
            </li>
            <li class='py-2'>
              <code>px</code>- to set left and right paddings of card
            </li>
            <li class='py-2'>
              <code>py</code>- to set top and bottom paddings of card
            </li>
            <li class='py-2'>
              <code>card-rounded</code>- to set border radiuses of card
            </li>
            <li class='py-2'>
              <code>card-rounded-top</code>- to set top left and top right radiuses of card
            </li>
            <li class='py-2'>
              <code>card-rounded-bottom</code>- to set bottom left and top right radiuses of card
            </li>
          </ul>
        </div>
        <div class='py-5'>
          <div class='row g-5'>
            <div class='col-lg-6'>
              <div class='card card-custom shadow'>
                <div class='card-header'>
                  <h3 class='card-title'>Fluid Image</h3>
                  <div class='card-toolbar'>
                    <button type='button' class='btn btn-sm btn-light'>
                      Action
                    </button>
                  </div>
                </div>
                <div class='card-body p-0'>
                  <div class='card-p'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                  <img
                    class='w-100 card-rounded-bottom'
                    alt=''
                    src={toAbsoluteUrl('/media/svg/illustrations/bg-4.svg')}
                  />
                </div>
              </div>
            </div>
            <div class='col-lg-6'></div>
          </div>
        </div>
        <CodeBlock code={code7} language='markup' />
      </div>
    </>
  )
}

const code = `<div class="card card-custom">
  <div class="card-header">
      <h3 class="card-title">Title</h3>
      <div class="card-toolbar">
          <button type="button" class="btn btn-sm btn-light">
              Action
          </button>
      </div>
  </div>
  <div class="card-body">
      Lorem Ipsum is simply dummy text...
  </div>
  <div class="card-footer">
      Footer
  </div>
</div>`

const code2 = `<div class="card card-custom">
  <div class="card-header">
      <h3 class="card-title">Title</h3>
      <div class="card-toolbar">
          <button type="button" class="btn btn-sm btn-light">
              Action
          </button>
      </div>
  </div>
  <div class="card-body card-scroll h-200px">
      Lorem Ipsum is simply dummy text...
  </div>
  <div class="card-footer">
      Footer
  </div>
</div>`

const code3 = `<div class="card card-custom card-flush">
  <div class="card-header">
      <h3 class="card-title">Title</h3>
      <div class="card-toolbar">
          <button type="button" class="btn btn-sm btn-light">
              Action
          </button>
      </div>
  </div>
  <div class="card-body py-5">
      Lorem Ipsum is simply dummy text...
  </div>
  <div class="card-footer">
      Footer
  </div>
</div>`

const code4 = `<div class="card card-custom card-px-0">
  <div class="card-header">
      <h3 class="card-title">Title</h3>
      <div class="card-toolbar">
          <button type="button" class="btn btn-sm btn-light">
              Action
          </button>
      </div>
  </div>
  <div class="card-body">
      Lorem Ipsum is simply dummy text...
  </div>
  <div class="card-footer">
      Footer
  </div>
</div>`

const code5 = `<div class="card card-custom card-border">
  <div class="card-header">
      <h3 class="card-title">Title</h3>
      <div class="card-toolbar">
          <button type="button" class="btn btn-sm btn-light">
              Action
          </button>
      </div>
  </div>
  <div class="card-body">
      Lorem Ipsum is simply dummy text...
  </div>
  <div class="card-footer">
      Footer
  </div>
</div>`

const code6 = `<div class="row g-5">
  <div class="col-lg-4">
      <div class="card card-custom card-stretch shadow mb-5">
          <div class="card-header">
              <h3 class="card-title">Height 100%</h3>
          </div>
          <div class="card-body">
              Lorem Ipsum is simply dummy text
          </div>
          <div class="card-footer">
              Footer
          </div>
      </div>
  </div>

  <div class="col-lg-4">
      <div class="card card-custom card-stretch-50 shadow mb-5">
          <div class="card-header">
              <h3 class="card-title">Height 100%</h3>
          </div>
          <div class="card-body">
              Lorem Ipsum is simply dummy text
          </div>
          <div class="card-footer">
              Footer
          </div>
      </div>

      <div class="card card-custom card-stretch-50 shadow mb-5">
          <div class="card-header">
              <h3 class="card-title">Height 100%</h3>
          </div>
          <div class="card-body">
              Lorem Ipsum is simply dummy text
          </div>
          <div class="card-footer">
              Footer
          </div>
      </div>
  </div>

  <div class="col-lg-4">
      <div class="card card-custom card-stretch-33 shadow mb-5">
          <div class="card-header">
              <h3 class="card-title">Height 33.333%</h3>
          </div>
          <div class="card-body">
              Lorem Ipsum is simply dummy text
          </div>
          <div class="card-footer">
              Footer
          </div>
      </div>

      <div class="card card-custom card-stretch-33 shadow mb-5">
          <div class="card-header">
              <h3 class="card-title">Height 33.333%</h3>
          </div>
          <div class="card-body">
              Lorem Ipsum is simply dummy text
          </div>
          <div class="card-footer">
              Footer
          </div>
      </div>

      <div class="card card-custom card-stretch-33 shadow mb-5">
          <div class="card-header">
              <h3 class="card-title">Height 33.333%</h3>
          </div>
          <div class="card-body">
              Lorem Ipsum is simply dummy text
          </div>
          <div class="card-footer">
              Footer
          </div>
      </div>
  </div>
</div>`

const code7 = `<div class="card card-custom shadow">
  <div class="card-header">
      <h3 class="card-title">Fluid Image</h3>
      <div class="card-toolbar">
          <button type="button" class="btn btn-sm btn-light">
              Action
          </button>
      </div>
  </div>
  <div class="card-body p-0">
      <div class="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <img class="w-100 card-rounded-bottom" alt="" src="assets/media/svg/illustrations/bg-4.svg"/>
  </div>
</div>`
