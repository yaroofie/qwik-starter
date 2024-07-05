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
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/modal/`} class='fw-bold'>
            Bootstrap Modal
          </a>
          &nbsp; through the SASS variables in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
          <code>{REACT_APP_SASS_PATH}/_modal.scss</code>.
        </div>
      </div>

      <div class='pt-10'>
        <h1 class='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic Example
        </h1>

        <div class='py-5'>
          Click the below toggle button to see a slightly customized modal with custom close icon
          button.
        </div>

        <div class='py-5'>
          <div class='rounded border p-10'>
            <button
              type='button'
              class='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_1'
            >
              Launch demo modal
            </button>
            <div class='modal fade' tabIndex={-1} id='kt_modal_1'>
              <div class='modal-dialog'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title'>Modal title</h5>
                    <div
                      class='btn btn-icon btn-sm btn-active-light-primary ms-2'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr061.svg'
                        class='svg-icon svg-icon-2x'
                      />
                    </div>
                  </div>
                  <div class='modal-body'>
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-light' data-bs-dismiss='modal'>
                      Close
                    </button>
                    <button type='button' class='btn btn-primary'>
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code} language='markup' />
      </div>

      <div class='pt-10'>
        <h1 class='anchor fw-bolder mb-5' id='fullscreen'>
          <a href='#fullscreen'></a>Fullscreen
        </h1>

        <div class='py-5'>
          Add
          <code>.modal-fullscreen</code>class to enable a modal with fullscreen mode. Add
          <code>.bg-white</code>and
          <code>.shadow-none</code>classes to fix background color and unwanted shadow issue when
          modal has a long scrollable content.
        </div>

        <div class='py-5'>
          <div class='rounded border p-10'>
            <button
              type='button'
              class='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_2'
            >
              Launch demo modal
            </button>
            <div class='modal bg-white fade' tabIndex={-1} id='kt_modal_2'>
              <div class='modal-dialog modal-fullscreen'>
                <div class='modal-content shadow-none'>
                  <div class='modal-header'>
                    <h5 class='modal-title'>Modal title</h5>
                    <div
                      class='btn btn-icon btn-sm btn-active-light-primary ms-2'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr061.svg'
                        class='svg-icon svg-icon-2x'
                      />
                    </div>
                  </div>
                  <div class='modal-body'>
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-light' data-bs-dismiss='modal'>
                      Close
                    </button>
                    <button type='button' class='btn btn-primary'>
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>
    </>
  )
}

const code = `<button type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#kt_modal_1"
>
  Launch demo modal
</button>
<div class="modal fade" tabIndex={-1} id="kt_modal_1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <div
          class="btn btn-icon btn-sm btn-active-light-primary ms-2"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <KTSVG
            path="/media/icons/duotune/arrows/arr061.svg"
            class="svg-icon svg-icon-2x"
          />
        </div>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-light"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
`

const code2 = `<button type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#kt_modal_2"
>
  Launch demo modal
</button>
<div class="modal bg-white fade" tabIndex={-1} id="kt_modal_2">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content shadow-none">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <div
          class="btn btn-icon btn-sm btn-active-light-primary ms-2"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <KTSVG
            path="/media/icons/duotune/arrows/arr061.svg"
            class="svg-icon svg-icon-2x"
          />
        </div>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-light"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
`
