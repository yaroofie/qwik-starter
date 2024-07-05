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
            <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/badges/`} class='fw-bold'>
              Bootstrap Badges
            </a>
            &nbsp; through the SASS variables in
            <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
            <code>{REACT_APP_SASS_PATH}/_badge.scss</code>.
          </div>
        </div>
        <div class='py-10'>
          <h1 class='anchor fw-bolder mb-5' id='basic'>
            <a href='#basic'></a>Basic
          </h1>
          <div class='py-5'>
            Use
            <code>.badge</code>with
            <code>.badge-{'{color}'}</code>classes to set a badge's style defined with
            <code>$theme-colors</code>mapped in
            <code>{REACT_APP_SASS_VARIABLES_PATH}</code>:
          </div>
          <div class='py-5'>
            <div class='rounded border p-10 pb-0 d-flex flex-wrap'>
              <span class='badge badge-white me-10 mb-10'>New</span>
              <span class='badge badge-primary me-10 mb-10'>New</span>
              <span class='badge badge-light me-10 mb-10'>New</span>
              <span class='badge badge-secondary me-10 mb-10'>New</span>
              <span class='badge badge-success me-10 mb-10'>New</span>
              <span class='badge badge-info me-10 mb-10'>New</span>
              <span class='badge badge-warning me-10 mb-10'>New</span>
              <span class='badge badge-danger me-10 mb-10'>New</span>
              <span class='badge badge-dark me-10 mb-10'>New</span>
            </div>
          </div>
          <CodeBlock code={code} language='markup' />
        </div>
        <div class='py-10'>
          <h1 class='anchor fw-bolder mb-5' id='light-style'>
            <a href='#light-style'></a>Light Style
          </h1>
          <div class='py-5'>
            Use
            <code>.badge</code>with
            <code>.badge-light-{'{color}'}</code>classes to set a badge's light style defined with
            <code>$theme-light-colors</code>mapped in
            <code>{REACT_APP_SASS_VARIABLES_PATH}</code>:
          </div>
          <div class='py-5'>
            <div class='rounded border p-10 pb-0 d-flex flex-wrap'>
              <span class='badge badge-light-primary me-10 mb-10'>New</span>
              <span class='badge badge-light-success me-10 mb-10'>New</span>
              <span class='badge badge-light-info me-10 mb-10'>New</span>
              <span class='badge badge-light-warning me-10 mb-10'>New</span>
              <span class='badge badge-light-danger me-10 mb-10'>New</span>
              <span class='badge badge-light-dark me-10 mb-10'>New</span>
            </div>
          </div>
          <CodeBlock code={code2} language='markup' />
        </div>
        <div class='py-10'>
          <h1 class='anchor fw-bolder mb-5' id='square'>
            <a href='#square'></a>Square Badge
          </h1>
          <div class='py-5'>
            Use
            <code>.badge-square</code>class to use a badge with same width and height:
          </div>

          <div class='py-5'>
            <div class='rounded border p-10 pb-0 d-flex flex-wrap align-items-center'>
              <span class='d-flex p-2 bg-dark me-10 mb-10'>
                <span class='badge badge-square badge-white'>5</span>
              </span>
              <span class='badge badge-square badge-primary me-10 mb-10'>5</span>
              <span class='badge badge-square badge-light me-10 mb-10'>5</span>
              <span class='badge badge-square badge-secondary me-10 mb-10'>5</span>
              <span class='badge badge-square badge-success me-10 mb-10'>5</span>
              <span class='badge badge-square badge-info me-10 mb-10'>5</span>
              <span class='badge badge-square badge-warning me-10 mb-10'>5</span>
              <span class='badge badge-square badge-danger me-10 mb-10'>5</span>
              <span class='badge badge-square badge-dark me-10 mb-10'>5</span>
            </div>
          </div>
          <CodeBlock code={code3} language='markup' />
        </div>
        <div class='py-10'>
          <h1 class='anchor fw-bolder mb-5' id='circle'>
            <a href='#circle'></a>Circle Badge
          </h1>
          <div class='py-5'>
            Use
            <code>.badge-circle</code>class to use a badge with circle style:
          </div>

          <div class='py-5'>
            <div class='rounded border p-10 pb-0 d-flex flex-wrap align-items-center'>
              <span class='d-flex p-2 bg-dark me-10 mb-10'>
                <span class='badge badge-circle badge-white'>5</span>
              </span>
              <span class='badge badge-circle badge-primary me-10 mb-10'>5</span>
              <span class='badge badge-circle badge-light me-10 mb-10'>5</span>
              <span class='badge badge-circle badge-secondary me-10 mb-10'>5</span>
              <span class='badge badge-circle badge-success me-10 mb-10'>5</span>
              <span class='badge badge-circle badge-info me-10 mb-10'>5</span>
              <span class='badge badge-circle badge-warning me-10 mb-10'>5</span>
              <span class='badge badge-circle badge-danger me-10 mb-10'>5</span>
              <span class='badge badge-circle badge-dark me-10 mb-10'>5</span>
            </div>
            <CodeBlock code={code4} language='markup' />
          </div>
        </div>
      </div>
    </>
  )
}

const code = `<span class="badge badge-white">New</span>
<span class="badge badge-primary">New</span>
<span class="badge badge-light">New</span>
<span class="badge badge-secondary">New</span>
<span class="badge badge-success">New</span>
<span class="badge badge-info">New</span>
<span class="badge badge-warning">New</span>
<span class="badge badge-danger">New</span>
<span class="badge badge-dark">New</span>`

const code2 = `<span class="badge badge-light-primary">New</span>
<span class="badge badge-light-success">New</span>
<span class="badge badge-light-info">New</span>
<span class="badge badge-light-warning">New</span>
<span class="badge badge-light-danger">New</span>
<span class="badge badge-light-dark">New</span>`

const code3 = `<span class="badge badge-square badge-white">5</span>
<span class="badge badge-square badge-primary">5</span>
<span class="badge badge-square badge-light">5</span>
<span class="badge badge-square badge-secondary">5</span>
<span class="badge badge-square badge-success">5</span>
<span class="badge badge-square badge-info">5</span>
<span class="badge badge-square badge-warning">5</span>
<span class="badge badge-square badge-danger">5</span>
<span class="badge badge-square badge-dark">5</span>`

const code4 = `<span class="badge badge-circle badge-white">5</span>
<span class="badge badge-circle badge-primary">5</span>
<span class="badge badge-circle badge-light">5</span>
<span class="badge badge-circle badge-secondary">5</span>
<span class="badge badge-circle badge-success">5</span>
<span class="badge badge-circle badge-info">5</span>
<span class="badge badge-circle badge-warning">5</span>
<span class="badge badge-circle badge-danger">5</span>
<span class="badge badge-circle badge-dark">5</span>`
