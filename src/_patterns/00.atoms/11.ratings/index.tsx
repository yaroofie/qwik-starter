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
          Rating is a custom component that can be used to display and edit star based rating.
        </div>
      </div>
      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic Example
        </h1>

        <div class='py-5'>
          Use
          <code>.rating</code>and
          <code>.rating-label</code>classes for displaying star based ratings. This examples uses a
          star icon from
          <Link to='/docs/icons/duotune' class='fw-bold'>
            Duotune Svg Icons
          </Link>
          .
        </div>

        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='rating'>
              <div class='rating-label checked'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </div>
              <div class='rating-label checked'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </div>
              <div class='rating-label checked'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </div>
              <div class='rating-label checked'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </div>
              <div class='rating-label checked'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </div>
            </div>
          </div>
        </div>

        <CodeBlock code={code} language='markup' />
      </div>
      <div class='pt-10'>
        <h1 class='anchor fw-bolder mb-5' id='font-icons'>
          <a href='#font-icons'></a>Font Icons Example
        </h1>

        <div class='py-5'>
          As a star icon any font icons can be used as well. This examples uses a star icon from
          <Link to='/docs/icons/duotune' class='fw-bold'>
            Bootstrap Icons
          </Link>
          :
        </div>

        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='rating'>
              <div class='rating-label me-2 checked'>
                <i class='bi bi-star fs-1'></i>
              </div>
              <div class='rating-label me-2 checked'>
                <i class='bi bi-star fs-1'></i>
              </div>
              <div class='rating-label me-2 checked'>
                <i class='bi bi-star fs-1'></i>
              </div>
              <div class='rating-label me-2 checked'>
                <i class='bi bi-star fs-1'></i>
              </div>
              <div class='rating-label me-2 checked'>
                <i class='bi bi-star fs-1'></i>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>

      <div class='py-10'>
        <h1 class='anchor fw-bolder mb-5' id='states'>
          <a href='#states'></a>Star States
        </h1>

        <div class='py-5'>
          By default each star's state is unchecked and to mark them as checked just use
          <code>.checked</code>class for
          <code>.rating-label</code>element.
        </div>

        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='rating'>
              <div class='rating-label checked'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </div>
              <div class='rating-label checked'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </div>
              <div class='rating-label checked'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </div>
              <div class='rating-label'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </div>
              <div class='rating-label'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </div>
            </div>
            <div class='separator my-10'></div>
            <div class='rating'>
              <div class='rating-label me-2 checked'>
                <i class='bi bi-star fs-2'></i>
              </div>
              <div class='rating-label me-2 checked'>
                <i class='bi bi-star fs-2'></i>
              </div>
              <div class='rating-label me-2 checked'>
                <i class='bi bi-star fs-2'></i>
              </div>
              <div class='rating-label me-2'>
                <i class='bi bi-star fs-2'></i>
              </div>
              <div class='rating-label me-2'>
                <i class='bi bi-star fs-2'></i>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code3} language='markup' />
      </div>

      <div class='pt-10'>
        <h1 class='anchor fw-bolder mb-5' id='edit'>
          <a href='#edit'></a>Edit Mode Examples
        </h1>

        <div class='py-5'>
          Enable editable rating with Label and Radio input elements. Hover and click on the below
          rating to set a rating value that can be submitted along with attached radio inputs:
        </div>

        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='rating'>
              <label
                class='btn btn-light fw-bolder btn-sm rating-label me-3'
                htmlFor='kt_rating_input_0'
              >
                Reset
              </label>
              <input
                class='rating-input'
                name='rating'
                value='0'
                checked={true}
                onChange={() => {}}
                type='radio'
                id='kt_rating_input_0'
              />
              <label class='rating-label' htmlFor='kt_rating_input_1'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </label>
              <input
                class='rating-input'
                name='rating'
                value='1'
                type='radio'
                id='kt_rating_input_1'
              />

              <label class='rating-label' htmlFor='kt_rating_input_2'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </label>
              <input
                class='rating-input'
                name='rating'
                value='2'
                type='radio'
                id='kt_rating_input_2'
              />

              <label class='rating-label' htmlFor='kt_rating_input_3'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </label>
              <input
                class='rating-input'
                name='rating'
                value='3'
                type='radio'
                id='kt_rating_input_3'
              />

              <label class='rating-label' htmlFor='kt_rating_input_4'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </label>
              <input
                class='rating-input'
                name='rating'
                value='4'
                type='radio'
                id='kt_rating_input_4'
              />

              <label class='rating-label' htmlFor='kt_rating_input_5'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </label>
              <input
                class='rating-input'
                name='rating'
                value='5'
                type='radio'
                id='kt_rating_input_5'
              />
            </div>
          </div>
        </div>
        <CodeBlock code={code4} language='markup' />

        <div class='pt-15 pb-5'>
          Rating with default value can be setup through a radio input's
          <code>checked="checked"</code>state. This examples shows a rating with 3 stars default
          value:
        </div>

        <div class='py-5'>
          <div class='rounded border p-10'>
            <div class='rating'>
              <label
                class='btn btn-light fw-bolder btn-sm rating-label me-3'
                htmlFor='kt_rating_2_input_0'
              >
                Reset
              </label>
              <input
                class='rating-input'
                name='rating2'
                value='0'
                checked={true}
                onChange={() => {}}
                type='radio'
                id='kt_rating_2_input_0'
              />

              <label class='rating-label' htmlFor='kt_rating_2_input_1'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </label>
              <input
                class='rating-input'
                name='rating2'
                value='1'
                type='radio'
                id='kt_rating_2_input_1'
              />

              <label class='rating-label' htmlFor='kt_rating_2_input_2'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </label>
              <input
                class='rating-input'
                name='rating2'
                value='2'
                type='radio'
                id='kt_rating_2_input_2'
              />

              <label class='rating-label' htmlFor='kt_rating_2_input_3'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </label>
              <input
                class='rating-input'
                name='rating2'
                value='3'
                type='radio'
                checked={true}
                onChange={() => {}}
                id='kt_rating_2_input_3'
              />

              <label class='rating-label' htmlFor='kt_rating_2_input_4'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </label>
              <input
                class='rating-input'
                name='rating2'
                value='4'
                type='radio'
                id='kt_rating_2_input_4'
              />

              <label class='rating-label' htmlFor='kt_rating_2_input_5'>
                <KTSVG path='/media/icons/duotune/general/gen029.svg' class='svg-icon svg-icon-1' />
              </label>
              <input
                class='rating-input'
                name='rating2'
                value='5'
                type='radio'
                id='kt_rating_2_input_5'
              />
            </div>
          </div>
        </div>

        <CodeBlock code={code5} language='markup' />
      </div>
    </>
  )
}

const code = `<div class="rounded border p-10">
  <div class="rating">
    <div class="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        class="svg-icon svg-icon-1"
      />
    </div>
    <div class="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        class="svg-icon svg-icon-1"
      />
    </div>
    <div class="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        class="svg-icon svg-icon-1"
      />
    </div>
    <div class="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        class="svg-icon svg-icon-1"
      />
    </div>
    <div class="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        class="svg-icon svg-icon-1"
      />
    </div>
  </div>
</div>
`

const code2 = `<div class="rating">
  <div class="rating-label me-2 checked">
    <i class="bi bi-star fs-1"></i>
  </div>
  <div class="rating-label me-2 checked">
    <i class="bi bi-star fs-1"></i>
  </div>
  <div class="rating-label me-2 checked">
    <i class="bi bi-star fs-1"></i>
  </div>
  <div class="rating-label me-2 checked">
    <i class="bi bi-star fs-1"></i>
  </div>
  <div class="rating-label me-2 checked">
    <i class="bi bi-star fs-1"></i>
  </div>
</div>`

const code3 = `<div class="rounded border p-10">
  <div class="rating">
    <div class="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        class="svg-icon svg-icon-1"
      />
    </div>
    <div class="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        class="svg-icon svg-icon-1"
      />
    </div>
    <div class="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        class="svg-icon svg-icon-1"
      />
    </div>
    <div class="rating-label">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        class="svg-icon svg-icon-1"
      />
    </div>
    <div class="rating-label">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        class="svg-icon svg-icon-1"
      />
    </div>
  </div>
  <div class="separator my-10"></div>
  <div class="rating">
    <div class="rating-label me-2 checked">
      <i class="bi bi-star fs-2"></i>
    </div>
    <div class="rating-label me-2 checked">
      <i class="bi bi-star fs-2"></i>
    </div>
    <div class="rating-label me-2 checked">
      <i class="bi bi-star fs-2"></i>
    </div>
    <div class="rating-label me-2">
      <i class="bi bi-star fs-2"></i>
    </div>
    <div class="rating-label me-2">
      <i class="bi bi-star fs-2"></i>
    </div>
  </div>
</div>
`

const code4 = `<div class="rating">
  <label
    class="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    class="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label class="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      class="svg-icon svg-icon-1"
    />
  </label>
  <input
    class="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label class="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      class="svg-icon svg-icon-1"
    />
  </label>
  <input
    class="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label class="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      class="svg-icon svg-icon-1"
    />
  </label>
  <input
    class="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label class="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      class="svg-icon svg-icon-1"
    />
  </label>
  <input
    class="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label class="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      class="svg-icon svg-icon-1"
    />
  </label>
  <input
    class="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
`

const code5 = `<div class="rating">
  <label
    class="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_2_input_0"
  >
    Reset
  </label>
  <input
    class="rating-input"
    name="rating2"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_2_input_0"
  />

  <label class="rating-label" htmlFor="kt_rating_2_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      class="svg-icon svg-icon-1"
    />
  </label>
  <input
    class="rating-input"
    name="rating2"
    value="1"
    type="radio"
    id="kt_rating_2_input_1"
  />

  <label class="rating-label" htmlFor="kt_rating_2_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      class="svg-icon svg-icon-1"
    />
  </label>
  <input
    class="rating-input"
    name="rating2"
    value="2"
    type="radio"
    id="kt_rating_2_input_2"
  />

  <label class="rating-label" htmlFor="kt_rating_2_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      class="svg-icon svg-icon-1"
    />
  </label>
  <input
    class="rating-input"
    name="rating2"
    value="3"
    type="radio"
    checked={true}
    onChange={() => {}}
    id="kt_rating_2_input_3"
  />

  <label class="rating-label" htmlFor="kt_rating_2_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      class="svg-icon svg-icon-1"
    />
  </label>
  <input
    class="rating-input"
    name="rating2"
    value="4"
    type="radio"
    id="kt_rating_2_input_4"
  />

  <label class="rating-label" htmlFor="kt_rating_2_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      class="svg-icon svg-icon-1"
    />
  </label>
  <input
    class="rating-input"
    name="rating2"
    value="5"
    type="radio"
    id="kt_rating_2_input_5"
  />
</div>
`
