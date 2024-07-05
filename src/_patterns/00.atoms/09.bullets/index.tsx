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
          Bullet is a custom component used with combination with other components to display a
          pointer to an item in the list or navigation.
        </div>
      </div>
      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic
        </h1>
        <div class='py-5'>
          Use
          <code>.bullet</code>in a list or navigation items as a pointer:
        </div>
        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='d-flex flex-column'>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet me-5'></span>Item 1
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet me-5'></span>Item 2
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet me-5'></span>Item 3
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet me-5'></span>Item 4
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet me-5'></span>Item 5
              </li>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='Colors'>
          <a href='#colors'></a>Colors
        </h1>
        <div class='py-5'>
          Use
          <code>.bg-{'{color}'}</code>class to set a bullets background color:
        </div>
        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='d-flex flex-column'>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bg-white me-5'></span>white
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bg-primary me-5'></span>primary
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bg-light me-5'></span>light
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bg-secondary me-5'></span>secondary
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bg-success me-5'></span>success
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bg-info me-5'></span>info
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bg-warning me-5'></span>warning
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bg-danger me-5'></span>danger
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bg-dark me-5'></span>dark
              </li>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='dot-style'>
          <a href='#dot-style'></a>Dot Style
        </h1>
        <div class='py-5'>
          Use
          <code>.bullet-dot</code>to apply a dot style bullet:
        </div>
        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='d-flex flex-column'>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-dot me-5'></span>Item 1
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-dot bg-danger me-5'></span>Item 2
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-dot bg-success me-5'></span>Item 3
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-dot bg-info me-5'></span>Item 4
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-dot bg-primary me-5'></span>Item 5
              </li>
            </div>
          </div>
        </div>
        <CodeBlock code={code3} language='markup' />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='dot-style'>
          <a href='#dot-style'></a>Vertical Style
        </h1>
        <div class='py-5'>
          Use
          <code>.bullet-vertical</code>to apply vertical style bullet:
        </div>
        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='d-flex flex-column'>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-vertical me-5'></span>Item 1
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-vertical bg-danger me-5'></span>
                Item 2
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-vertical bg-success me-5'></span>
                Item 3
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-vertical bg-info me-5'></span>
                Item 4
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-vertical bg-primary me-5'></span>
                Item 5
              </li>
            </div>
          </div>
        </div>
        <CodeBlock code={code4} language='markup' />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='line-style'>
          <a href='#line-style'></a>Line Style
        </h1>
        <div class='py-5'>
          Use
          <code>.bullet-line</code>to apply a line style bullet:
        </div>

        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='d-flex flex-column'>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-line me-5'></span>Item 1
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-line bg-danger me-5'></span>Item 2
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-line bg-success me-5'></span>Item 3
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-line bg-info me-5'></span>Item 4
              </li>
              <li class='d-flex align-items-center py-2'>
                <span class='bullet bullet-line bg-primary me-5'></span>Item 5
              </li>
            </div>
          </div>
        </div>
        <CodeBlock code={code5} language='markdown' />
      </div>

      <div class='pt-10'>
        <h1 class='anchor fw-bolder mb-5' id='sizes'>
          <a href='#sizes'></a>Sizes
        </h1>
        <div class='py-5'>
          Use
          <Link class='fw-bold' target='_blank' to='/docs/utilities##width-and-height'>
            Custom Size Classes
          </Link>
          &nbsp; for bullets to set custom width and height:
        </div>
        <div class='py-5'>
          <div class='rounded border p-10 d-flex flex-column flex-wrap'>
            <div class='d-flex'>
              <div class='d-flex align-items-center me-15'>
                <span class='bullet bg-primary h-15px w-25px me-5'></span>
                .h-15px .w-25px
              </div>
              <div class='d-flex align-items-center me-15'>
                <span class='bullet bg-primary h-20px w-30px me-5'></span>
                .h-20px .w-30px
              </div>
              <div class='d-flex align-items-center'>
                <span class='bullet bg-primary h-30px w-50px me-5'></span>
                .h-30px .w-50px
              </div>
            </div>
            <div class='separator my-10'></div>
            <div class='d-flex'>
              <div class='d-flex align-items-center me-15'>
                <span class='bullet bullet-dot bg-primary h-15px w-15px me-5'></span>
                .h-15px .w-15px
              </div>
              <div class='d-flex align-items-center me-15'>
                <span class='bullet bullet-dot bg-primary h-20px w-20px me-5'></span>
                .h-20px .w-20px
              </div>
              <div class='d-flex align-items-center'>
                <span class='bullet bullet-dot bg-primary h-30px w-30px me-5'></span>
                .h-30px .w-30px
              </div>
            </div>
            <div class='separator my-10'></div>
            <div class='d-flex'>
              <div class='d-flex align-items-center me-15'>
                <span class='bullet bullet-vertical bg-primary h-25px w-15px me-5'></span>
                .h-25px .w-15px
              </div>
              <div class='d-flex align-items-center me-15'>
                <span class='bullet bullet-vertical bg-primary h-30px w-20px me-5'></span>
                .h-30px .w-20px
              </div>
              <div class='d-flex align-items-center'>
                <span class='bullet bullet-vertical bg-primary h-50px w-30px me-5'></span>
                .h-50px .w-30px
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code6} language='markdown' />
      </div>
    </>
  )
}

const code = `<div class="d-flex flex-column">
  <li class="d-flex align-items-center py-2">
    <span class="bullet me-5"></span>Item 1
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet me-5"></span>Item 2
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet me-5"></span>Item 3
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet me-5"></span>Item 4
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet me-5"></span>Item 5
  </li>
</div>`

const code2 = `<div class="d-flex flex-column">
  <li class="d-flex align-items-center py-2">
    <span class="bullet bg-white me-5"></span>white
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bg-primary me-5"></span>primary
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bg-light me-5"></span>light
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bg-secondary me-5"></span>secondary
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bg-success me-5"></span>success
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bg-info me-5"></span>info
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bg-warning me-5"></span>warning
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bg-danger me-5"></span>danger
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bg-dark me-5"></span>dark
  </li>
</div>`

const code3 = `<div class="d-flex flex-column">
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-dot me-5"></span>Item 1
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-dot bg-danger me-5"></span>Item 2
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-dot bg-success me-5"></span>Item
    3
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-dot bg-info me-5"></span>Item 4
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-dot bg-primary me-5"></span>Item
    5
  </li>
</div>`

const code4 = ` <div class="d-flex flex-column">
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-vertical me-5"></span>Item 1
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-vertical bg-danger me-5"></span>
    Item 2
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-vertical bg-success me-5"></span>
    Item 3
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-vertical bg-info me-5"></span>
    Item 4
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-vertical bg-primary me-5"></span>
    Item 5
  </li>
</div>`

const code5 = `<div class="d-flex flex-column">
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-line me-5"></span>Item 1
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-line bg-danger me-5"></span>Item
    2
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-line bg-success me-5"></span>Item
    3
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-line bg-info me-5"></span>Item 4
  </li>
  <li class="d-flex align-items-center py-2">
    <span class="bullet bullet-line bg-primary me-5"></span>Item
    5
  </li>
</div>`

const code6 = `<div class="rounded border p-10 d-flex flex-column flex-wrap">
  <div class="d-flex">
    <div class="d-flex align-items-center me-15">
      <span class="bullet bg-primary h-15px w-25px me-5"></span>
      .h-15px .w-25px
    </div>
    <div class="d-flex align-items-center me-15">
      <span class="bullet bg-primary h-20px w-30px me-5"></span>
      .h-20px .w-30px
    </div>
    <div class="d-flex align-items-center">
      <span class="bullet bg-primary h-30px w-50px me-5"></span>
      .h-30px .w-50px
    </div>
  </div>
  <div class="separator my-10"></div>
  <div class="d-flex">
    <div class="d-flex align-items-center me-15">
      <span class="bullet bullet-dot bg-primary h-15px w-15px me-5"></span>
      .h-15px .w-15px
    </div>
    <div class="d-flex align-items-center me-15">
      <span class="bullet bullet-dot bg-primary h-20px w-20px me-5"></span>
      .h-20px .w-20px
    </div>
    <div class="d-flex align-items-center">
      <span class="bullet bullet-dot bg-primary h-30px w-30px me-5"></span>
      .h-30px .w-30px
    </div>
  </div>
  <div class="separator my-10"></div>
  <div class="d-flex">
    <div class="d-flex align-items-center me-15">
      <span class="bullet bullet-vertical bg-primary h-25px w-15px me-5"></span>
      .h-25px .w-15px
    </div>
    <div class="d-flex align-items-center me-15">
      <span class="bullet bullet-vertical bg-primary h-30px w-20px me-5"></span>
      .h-30px .w-20px
    </div>
    <div class="d-flex align-items-center">
      <span class="bullet bullet-vertical bg-primary h-50px w-30px me-5"></span>
      .h-50px .w-30px
    </div>
  </div>
</div>`
