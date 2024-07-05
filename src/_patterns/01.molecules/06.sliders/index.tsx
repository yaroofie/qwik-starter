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
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/carousel`} class='fw-bold'>
            Bootstrap Carousel
          </a>
          &nbsp; through the SASS variables in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
          <code>{REACT_APP_SASS_PATH}/_carousel.scss</code>.
        </div>
      </div>

      <div class='pt-10'>
        <h1 class='anchor fw-bolder mb-5' id='custom'>
          <a href='#custom'></a>Custom Example
        </h1>
        <div class='py-5'>
          Add
          <code>.carousel-custom</code>to use a customized carousel as shown below:
        </div>
        <div class='py-5'>
          <div class='rounded border p-10'>
            <div
              id='kt_carousel_1_carousel'
              class='carousel carousel-custom slide'
              data-bs-ride='carousel'
              data-bs-interval='8000'
            >
              <div class='d-flex align-items-center justify-content-between flex-wrap'>
                <span class='fs-4 fw-bolder pe-2'>Projects</span>
                <ol class='p-0 m-0 carousel-indicators carousel-indicators-dots'>
                  <li
                    data-bs-target='#kt_carousel_1_carousel'
                    data-bs-slide-to='0'
                    class='ms-1 active'
                  ></li>
                  <li
                    data-bs-target='#kt_carousel_1_carousel'
                    data-bs-slide-to='1'
                    class='ms-1'
                  ></li>
                  <li
                    data-bs-target='#kt_carousel_1_carousel'
                    data-bs-slide-to='2'
                    class='ms-1'
                  ></li>
                </ol>
              </div>

              <div class='carousel-inner pt-8'>
                <div class='carousel-item active'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>

                <div class='carousel-item'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </div>

                <div class='carousel-item'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code} language='markup' />
      </div>
    </>
  )
}

const code = `<div id="kt_carousel_1_carousel"
  class="carousel carousel-custom slide"
  data-bs-ride="carousel"
  data-bs-interval="8000"
>
  <div class="d-flex align-items-center justify-content-between flex-wrap">
    <span class="fs-4 fw-bolder pe-2">Projects</span>
    <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
      <li
        data-bs-target="#kt_carousel_1_carousel"
        data-bs-slide-to="0"
        class="ms-1 active"
      ></li>
      <li
        data-bs-target="#kt_carousel_1_carousel"
        data-bs-slide-to="1"
        class="ms-1"
      ></li>
      <li
        data-bs-target="#kt_carousel_1_carousel"
        data-bs-slide-to="2"
        class="ms-1"
      ></li>
    </ol>
  </div>

  <div class="carousel-inner pt-8">
    <div class="carousel-item active">
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>

    <div class="carousel-item">
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type
      specimen book.
    </div>

    <div class="carousel-item">
      Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged.
    </div>
  </div>
</div>
`
