import {Slot, component$} from '@builder.io/qwik'
import type {IButtonProps} from './interfaces'
import './styles.css'

export default component$<IButtonProps>(({...props}) => {
  return (
    <>
      <div class='card-body p-10 p-lg-15'>
        <div class='pb-10'>
          <h1 class='anchor fw-bolder mb-5' id='overview'>
            <a href='#overview'></a>Overview
          </h1>

          <div class='py-5'>
            <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; customizes the{' '}
            <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/breadcrumb/`} class='fw-bold'>
              Bootstrap Breadcrumb
            </a>
            &nbsp; through the SASS variables in
            <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
            <code>{REACT_APP_SASS_PATH}/_breadcrumb.scss</code>.
          </div>
        </div>
        <div class='py-10'>
          <h1 class='anchor fw-bolder mb-5' id='basic'>
            <a href='#basic'></a>Basic Example
          </h1>

          <div class='py-5'>
            Use an ordered or unordered list with linked list items to create a minimally styled
            breadcrumb. Use our utilities to add additional styles as desired.
          </div>

          <div class='py-5'>
            <div class='rounded border p-10'>
              <ol class='breadcrumb text-muted fs-6 fw-bold'>
                <li class='breadcrumb-item pe-3'>
                  <a href='#' class='pe-3'>
                    Home
                  </a>
                </li>
                <li class='breadcrumb-item pe-3'>
                  <a href='#' class='pe-3'>
                    Library
                  </a>
                </li>
                <li class='breadcrumb-item px-3 text-muted'>Active</li>
              </ol>
            </div>
          </div>
          <CodeBlock code={code} language='markup' />
        </div>
        <div class='py-10'>
          <h1 class='anchor fw-bolder mb-5' id='line-separator'>
            <a href='#line-separator'></a>Line Separator
          </h1>

          <div class='py-5'>
            Add
            <code>.breadcrumb-line</code>to enable line separator style for a breadcrumb.
          </div>

          <div class='py-5'>
            <div class='rounded border p-10'>
              <ol class='breadcrumb breadcrumb-line text-muted fs-6 fw-bold'>
                <li class='breadcrumb-item pe-3'>
                  <a href='#' class='pe-3'>
                    Home
                  </a>
                </li>
                <li class='breadcrumb-item pe-3'>
                  <a href='#' class='pe-3'>
                    Library
                  </a>
                </li>
                <li class='breadcrumb-item px-3 text-muted'>Active</li>
              </ol>
            </div>
          </div>
          <CodeBlock code={code2} language='markup' />
        </div>

        <div class='py-10'>
          <h1 class='anchor fw-bolder mb-5' id='dot-separator'>
            <a href='#dot-separator'></a>Dot Separator
          </h1>

          <div class='py-5'>
            Add
            <code>.breadcrumb-dot</code>to enable dot separator style for a breadcrumb.
          </div>

          <div class='py-5'>
            <div class='rounded border p-10'>
              <ol class='breadcrumb breadcrumb-dot text-muted fs-6 fw-bold'>
                <li class='breadcrumb-item pe-3'>
                  <a href='#' class='pe-3'>
                    Home
                  </a>
                </li>
                <li class='breadcrumb-item pe-3'>
                  <a href='#' class='pe-3'>
                    Library
                  </a>
                </li>
                <li class='breadcrumb-item px-3 text-muted'>Active</li>
              </ol>
            </div>
          </div>
          <CodeBlock code={code3} language='markup' />
        </div>
        <div class='pt-10'>
          <h1 class='anchor fw-bolder mb-5' id='separatorless'>
            <a href='#separatorless'></a>Without Separator
          </h1>
          <div class='py-5'>
            Add
            <code>.breadcrumb-separatorless</code>to remove the separator.
          </div>

          <div class='py-5'>
            <div class='rounded border p-10'>
              <ol class='breadcrumb breadcrumb-separatorless text-muted fs-6 fw-bold'>
                <li class='breadcrumb-item pe-3'>
                  <a href='#' class='pe-3'>
                    Home
                  </a>
                </li>
                <li class='breadcrumb-item pe-3'>
                  <a href='#' class='pe-3'>
                    Library
                  </a>
                </li>
                <li class='breadcrumb-item px-3 text-muted'>Active</li>
              </ol>
            </div>
          </div>
          <CodeBlock code={code4} language='markup' />
        </div>
      </div>
    </>
  )
}

const code = `<ol class="breadcrumb text-muted fs-6 fw-bold">
  <li class="breadcrumb-item pe-3">
    <a href="#" class="pe-3">
      Home
    </a>
  </li>
  <li class="breadcrumb-item pe-3">
    <a href="#" class="pe-3">
      Library
    </a>
  </li>
  <li class="breadcrumb-item px-3 text-muted">Active</li>
</ol>`

const code2 = `<ol class="breadcrumb breadcrumb-line text-muted fs-6 fw-bold">
  <li class="breadcrumb-item pe-3">
    <a href="#" class="pe-3">
      Home
    </a>
  </li>
  <li class="breadcrumb-item pe-3">
    <a href="#" class="pe-3">
      Library
    </a>
  </li>
  <li class="breadcrumb-item px-3 text-muted">Active</li>
</ol>`

const code3 = `<ol class="breadcrumb breadcrumb-dot text-muted fs-6 fw-bold">
  <li class="breadcrumb-item pe-3">
    <a href="#" class="pe-3">
      Home
    </a>
  </li>
  <li class="breadcrumb-item pe-3">
    <a href="#" class="pe-3">
      Library
    </a>
  </li>
  <li class="breadcrumb-item px-3 text-muted">Active</li>
</ol>`

const code4 = `<ol class="breadcrumb breadcrumb-separatorless text-muted fs-6 fw-bold">
  <li class="breadcrumb-item pe-3">
    <a href="#" class="pe-3">
      Home
    </a>
  </li>
  <li class="breadcrumb-item pe-3">
    <a href="#" class="pe-3">
      Library
    </a>
  </li>
  <li class="breadcrumb-item px-3 text-muted">Active</li>
</ol>`
