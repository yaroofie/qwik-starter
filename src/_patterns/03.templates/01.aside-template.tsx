import {component$, Slot} from '@builder.io/qwik'

/**
 * use in pages where we show aside like products that have an aside filter/category
 */
export const AsideTemplate = component$(() => {
  return (
    <>
      <Slot name='header' />

      <main role='main'>
        <Slot name='sections' />
        <Slot name='aside' />
      </main>
      <Slot name='footer' />
    </>
  )
})
