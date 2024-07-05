import {component$, Slot} from '@builder.io/qwik'

/**
 * use in layouts which has content unrelated to the page, like when there are blog posts in the page
 */
export const ArticlesTemplate = component$(() => {
  return (
    <>
      <Slot name='header' />

      <main role='main'>
        <div class=''>
          <Slot name='sections' />
          <Slot name='articles' />
        </div>
        <Slot name='aside' />
      </main>
      <Slot name='footer' />
    </>
  )
})
