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
            <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/pagination/`} class='fw-bold'>
              Bootstrap Pagination
            </a>
            &nbsp; through the SASS variables in
            <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
            <code>{REACT_APP_SASS_PATH}/_pagination.scss</code>.
          </div>
        </div>
        <div class='pt-10'>
          <h1 class='anchor fw-bolder mb-5' id='basic'>
            <a href='#basic'></a>Basic Example
          </h1>
          <div class='py-5'>
            Use slightly customized pagination with previouse and next icon links:
          </div>

          <div class='py-5'>
            <div class='rounded border p-10'>
              <ul class='pagination'>
                <li class='page-item previous disabled'>
                  <a href='#' class='page-link'>
                    <i class='previous'></i>
                  </a>
                </li>
                <li class='page-item'>
                  <a href='#' class='page-link'>
                    1
                  </a>
                </li>
                <li class='page-item active'>
                  <a href='#' class='page-link'>
                    2
                  </a>
                </li>
                <li class='page-item'>
                  <a href='#' class='page-link'>
                    3
                  </a>
                </li>
                <li class='page-item'>
                  <a href='#' class='page-link'>
                    4
                  </a>
                </li>
                <li class='page-item'>
                  <a href='#' class='page-link'>
                    5
                  </a>
                </li>
                <li class='page-item'>
                  <a href='#' class='page-link'>
                    6
                  </a>
                </li>
                <li class='page-item next'>
                  <a href='#' class='page-link'>
                    <i class='next'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <CodeBlock code={code} language='markup' />
        </div>
      </div>
    </>
  )
}

const code = `<ul class="pagination">
  <li class="page-item previous disabled">
    <a href="#" class="page-link">
      <i class="previous"></i>
    </a>
  </li>
  <li class="page-item">
    <a href="#" class="page-link">
      1
    </a>
  </li>
  <li class="page-item active">
    <a href="#" class="page-link">
      2
    </a>
  </li>
  <li class="page-item">
    <a href="#" class="page-link">
      3
    </a>
  </li>
  <li class="page-item">
    <a href="#" class="page-link">
      4
    </a>
  </li>
  <li class="page-item">
    <a href="#" class="page-link">
      5
    </a>
  </li>
  <li class="page-item">
    <a href="#" class="page-link">
      6
    </a>
  </li>
  <li class="page-item next">
    <a href="#" class="page-link">
      <i class="next"></i>
    </a>
  </li>
</ul>
`
