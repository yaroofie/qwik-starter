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
          <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; customizes the{' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/alerts/`} class='fw-bold'>
            Bootstrap Alerts
          </a>{' '}
          through creative use of Bootstrap utilities and with handpicked icons.
        </div>
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic Example
        </h1>

        <div class='py-5'>
          Use <code>.alert</code> with <code>{`.alert-{color}`}</code> classes to set the alert's
          style defined with <code>$theme-colors</code> mapped in{' '}
          <code>{REACT_APP_SASS_PATH}/_variables.scss</code>:
        </div>

        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='alert alert-primary d-flex align-items-center p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-primary me-3'>
                <KTSVG
                  path='/media/icons/duotune/general/gen048.svg'
                  class='svg-icon-2hx svg-icon-primary me-4'
                />
              </span>

              <div class='d-flex flex-column'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>
            </div>

            <div class='alert alert-secondary d-flex align-items-center p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-secondary me-3'>
                <KTSVG
                  path='/media/icons/duotune/general/gen048.svg'
                  class='svg-icon-2hx svg-icon-secondary me-4'
                />
              </span>

              <div class='d-flex flex-column'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>
            </div>

            <div class='alert alert-success d-flex align-items-center p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-success me-3'>
                <KTSVG
                  path='/media/icons/duotune/general/gen048.svg'
                  class='svg-icon-2hx svg-icon-success me-4'
                />
              </span>

              <div class='d-flex flex-column'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>
            </div>

            <div class='alert alert-info d-flex align-items-center p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-info me-3'>
                <KTSVG
                  path='/media/icons/duotune/general/gen048.svg'
                  class='svg-icon-2hx svg-icon-info me-4'
                />
              </span>

              <div class='d-flex flex-column'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>
            </div>

            <div class='alert alert-warning d-flex align-items-center p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-warning me-3'>
                <KTSVG
                  path='/media/icons/duotune/general/gen048.svg'
                  class='svg-icon-2hx svg-icon-warning me-4'
                />
              </span>

              <div class='d-flex flex-column'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>
            </div>

            <div class='alert alert-danger d-flex align-items-center p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-danger me-3'>
                <KTSVG
                  path='/media/icons/duotune/general/gen048.svg'
                  class='svg-icon-2hx svg-icon-danger me-4'
                />
              </span>

              <div class='d-flex flex-column'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>
            </div>

            <div class='alert alert-dark d-flex align-items-center p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-dark me-3'>
                <KTSVG
                  path='/media/icons/duotune/general/gen048.svg'
                  class='svg-icon-2hx svg-icon-dark me-4'
                />
              </span>

              <div class='d-flex flex-column'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='animated-icon'>
          <a href='#solid-colors'></a>Solid Colors
        </h1>

        <div class='py-5'>
          Use <code>.alert</code> with <code>{`.bg-{color}`}</code> classes to set the alert's style
          with a solid color. Please refer to our{' '}
          <a href={`${REACT_APP_PREVIEW_URL}/docs/utilities`}>Theme colors</a> for more info.
        </div>
        <div class='py-5'>
          Add the class <code>.alert-dismissible</code> to the parent <code>.alert</code> wrapper
          and <code>data-bs-dismiss="alert"</code> to the close button to allow dismissing alerts.
          Please take note of the HTML markup sample below for all required responsive classes.
        </div>
        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='alert alert-dismissible bg-primary d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/files/fil024.svg'
                  class='svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-light pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-2x svg-icon-light'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-light'
                  />
                </span>
              </button>
            </div>

            <div class='alert alert-dismissible bg-danger d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/communication/com003.svg'
                  class='svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-light pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-2x svg-icon-light'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-light'
                  />
                </span>
              </button>
            </div>

            <div class='alert alert-dismissible bg-success d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/art/art005.svg'
                  class='svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-light pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-2x svg-icon-light'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-light'
                  />
                </span>
              </button>
            </div>

            <div class='alert alert-dismissible bg-info d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/general/gen007.svg'
                  class='svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-light pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-2x svg-icon-light'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-light'
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='animated-icon'>
          <a href='#light-colors'></a>Light Colors
        </h1>

        <div class='py-5'>
          Use <code>.alert</code> with <code>{`.bg-light-{color}`}</code> classes to set the alert's
          style with a light color. Please refer to our{' '}
          <a href={`${REACT_APP_PREVIEW_URL}/docs/utilities`}>Theme colors</a> for more info.
        </div>
        <div class='py-5'>
          Add the class <code>.alert-dismissible</code> to the parent <code>.alert</code> wrapper
          and <code>data-bs-dismiss="alert"</code> to the close button to allow dismissing alerts.
          Please take note of the HTML markup sample below for all required responsive classes.
        </div>
        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='alert alert-dismissible bg-light-primary d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/files/fil024.svg'
                  class='svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-primary pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-1 svg-icon-primary'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-primary'
                  />
                </span>
              </button>
            </div>

            <div class='alert alert-dismissible bg-light-danger d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-danger me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/files/fil024.svg'
                  class='svg-icon-2hx svg-icon-danger me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-danger pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-1 svg-icon-danger'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-primary'
                  />
                </span>
              </button>
            </div>

            <div class='alert alert-dismissible bg-light-success d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-success me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/files/fil024.svg'
                  class='svg-icon-2hx svg-icon-success me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-success pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-1 svg-icon-success'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-primary'
                  />
                </span>
              </button>
            </div>

            <div class='alert alert-dismissible bg-light-info d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-info me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/files/fil024.svg'
                  class='svg-icon-2hx svg-icon-info me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-info pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-1 svg-icon-info'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-primary'
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <CodeBlock code={code3} language='markup' />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='animated-icon'>
          <a href='#border-examples'></a>Border Examples
        </h1>

        <div class='py-5'>
          Use <code>.alert</code> with <code>{`.bg-light-{color}`}</code> and <code>.border</code>{' '}
          classes to set the alert's style with a light color. Please refer to our{' '}
          <a href={`${REACT_APP_PREVIEW_URL}/docs/utilities`}>Theme colors</a> and{' '}
          <a href={`${REACT_APP_PREVIEW_URL}/docs/helpers/borders`}>Theme colors</a> for more info.
        </div>
        <div class='py-5'>
          Add the class <code>.alert-dismissible</code> to the parent <code>.alert</code> wrapper
          and <code>data-bs-dismiss="alert"</code> to the close button to allow dismissing alerts.
          Please take note of the HTML markup sample below for all required responsive classes.
        </div>
        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='alert alert-dismissible bg-light-primary border border-primary d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/files/fil024.svg'
                  class='svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-primary pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-1 svg-icon-primary'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-primary'
                  />
                </span>
              </button>
            </div>

            <div class='alert alert-dismissible bg-light-danger border border-danger border-dashed d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-danger me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/files/fil024.svg'
                  class='svg-icon-2hx svg-icon-danger me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-danger pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-1 svg-icon-danger'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-primary'
                  />
                </span>
              </button>
            </div>

            <div class='alert alert-dismissible bg-light-success border border-success border-3 d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-success me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/files/fil024.svg'
                  class='svg-icon-2hx svg-icon-success me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-success pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-1 svg-icon-success'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-primary'
                  />
                </span>
              </button>
            </div>

            <div class='alert alert-dismissible bg-light-info border border-info border-3 border-dashed d-flex flex-column flex-sm-row p-5 mb-10'>
              <span class='svg-icon svg-icon-2hx svg-icon-info me-4 mb-5 mb-sm-0'>
                <KTSVG
                  path='/media/icons/duotune/files/fil024.svg'
                  class='svg-icon-2hx svg-icon-info me-4 mb-5 mb-sm-0'
                />
              </span>
              <div class='d-flex flex-column text-info pe-0 pe-sm-10'>
                <h5 class='mb-1'>This is an alert</h5>
                <span>
                  The alert component can be used to highlight certain parts of your page for higher
                  content visibility.
                </span>
              </div>

              <button
                type='button'
                class='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-1 svg-icon-info'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    class='svg-icon-2x svg-icon-primary'
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <CodeBlock code={code4} language='markup' />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='animated-icon'>
          <a href='#rich-content-example'></a>Rich Content Example
        </h1>

        <div class='py-5'>
          Here's a sample of an alert with rich content elements inside it. Please take note of the
          HTML markup sample below for all required classes.
        </div>
        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10'>
              <button
                type='button'
                class='position-absolute top-0 end-0 m-2 btn btn-icon btn-icon-danger'
                data-bs-dismiss='alert'
              >
                <span class='svg-icon svg-icon-1'>
                  <KTSVG path='/media/icons/duotune/arrows/arr061.svg' class='svg-icon-1' />
                </span>
              </button>

              <span class='svg-icon svg-icon-5tx svg-icon-danger mb-5'>
                <KTSVG
                  path='/media/icons/duotune/general/gen044.svg'
                  class='svg-icon-5tx svg-icon-danger mb-5'
                />
              </span>

              <div class='text-center'>
                <h5 class='fw-bolder fs-1 mb-5'>This is an alert</h5>

                <div class='separator separator-dashed border-danger opacity-25 mb-5'></div>

                <div class='mb-9'>
                  The alert component can be used to highlight certain parts of your page for{' '}
                  <strong>higher content visibility</strong>.<br />
                  Please read our{' '}
                  <a href='#' class='fw-bolder me-1'>
                    Terms and Conditions
                  </a>{' '}
                  for more info.
                </div>
                <div class='d-flex flex-center flex-wrap'>
                  <a href='#' class='btn btn-outline btn-outline-danger btn-active-danger m-2'>
                    Cancel
                  </a>
                  <a href='#' class='btn btn-danger m-2'>
                    Ok, I got it
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code5} language='markup' />
      </div>
    </>
  )
}

const code = `<div class="alert alert-primary d-flex align-items-center p-5 mb-10">
  <span class="svg-icon svg-icon-2hx svg-icon-primary me-3">...</span>
  
  <div class="d-flex flex-column">
    <h5 class="mb-1">This is an alert</h5>
    <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
  </div>
</div>`

const code2 = `<div class="alert alert-dismissible bg-primary d-flex flex-column flex-sm-row p-5 mb-10">
  <span class="svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0">...</span>
  <div class="d-flex flex-column text-light pe-0 pe-sm-10">
    <h5 class="mb-1">This is an alert</h5>
    <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
  </div>

  <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
    <span class="svg-icon svg-icon-2x svg-icon-light">...</span>
  </button>
</div>`

const code3 = `<div class="alert alert-dismissible bg-light-primary d-flex flex-column flex-sm-row p-5 mb-10">
  <span class="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0">...</span>
  <div class="d-flex flex-column text-primary pe-0 pe-sm-10">
    <h5 class="mb-1">This is an alert</h5>
    <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
  </div>

  <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
    <span class="svg-icon svg-icon-1 svg-icon-primary">...</span>
  </button>
</div>`

const code4 = `<div class="alert alert-dismissible bg-light-primary border border-primary d-flex flex-column flex-sm-row p-5 mb-10">
  <span class="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0">...</span>
  <div class="d-flex flex-column text-primary pe-0 pe-sm-10">
    <h5 class="mb-1">This is an alert</h5>
    <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
  </div>

  <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
    <span class="svg-icon svg-icon-1 svg-icon-primary">...</span>
  </button>
</div>`

const code5 = `<div class="alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10">
  <button type="button" class="position-absolute top-0 end-0 m-2 btn btn-icon btn-icon-danger" data-bs-dismiss="alert">
    <span class="svg-icon svg-icon-1">...</span>
  </button>

  <span class="svg-icon svg-icon-5tx svg-icon-danger mb-5">...</span>

  <div class="text-center">
    <h5 class="fw-bolder fs-1 mb-5">This is an alert</h5>

    <div class="separator separator-dashed border-danger opacity-25 mb-5"></div>

    <div class="mb-9">
      The alert component can be used to highlight certain parts of your page for <strong>higher content visibility</strong>.<br/>
      Please read our <a href="#" class="fw-bolder me-1">Terms and Conditions</a> for more info.
    </div>
    <div class="d-flex flex-center flex-wrap">
      <a href="#" class="btn btn-outline btn-outline-danger btn-active-danger m-2">Cancel</a>
      <a href="#" class="btn btn-danger m-2">Ok, I got it</a>
    </div>
  </div>
</div>`
