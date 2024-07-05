import {Slot, component$} from '@builder.io/qwik'
import type {IAccordionProps} from './interfaces'
import './styles.css'

export default component$<IAccordionProps>(({...props}) => {
  return (
    <ul class='accordion' id='kt_accordion_1'>
      <li class='accordion-item'>
        <h2 class='accordion-header' id='kt_accordion_1_header_1'>
          <button
            class='accordion-button fs-4 fw-bold collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_1_body_1'
            aria-expanded='false'
            aria-controls='kt_accordion_1_body_1'
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id='kt_accordion_1_body_1'
          class='accordion-collapse collapse'
          aria-labelledby='kt_accordion_1_header_1'
          data-bs-parent='#kt_accordion_1'
        >
          <div class='accordion-body'>
            <strong>This is the first item's accordion body.</strong>It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </li>
      <li class='accordion-item'>
        <h2 class='accordion-header' id='kt_accordion_1_header_2'>
          <button
            class='accordion-button fs-4 fw-bold collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_1_body_2'
            aria-expanded='false'
            aria-controls='kt_accordion_1_body_2'
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id='kt_accordion_1_body_2'
          class='accordion-collapse collapse'
          aria-labelledby='kt_accordion_1_header_2'
          data-bs-parent='#kt_accordion_1'
        >
          <div class='accordion-body'>
            <strong>This is the second item's accordion body.</strong>It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </li>
      <li class='accordion-item'>
        <h2 class='accordion-header' id='kt_accordion_1_header_3'>
          <button
            class='accordion-button fs-4 fw-bold collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_1_body_3'
            aria-expanded='false'
            aria-controls='kt_accordion_1_body_3'
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id='kt_accordion_1_body_3'
          class='accordion-collapse collapse'
          aria-labelledby='kt_accordion_1_header_3'
          data-bs-parent='#kt_accordion_1'
        >
          <div class='accordion-body'>
            <strong>This is the third item's accordion body.</strong>It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </li>
    </ul>
  )
})
