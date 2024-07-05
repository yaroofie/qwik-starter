import {component$, Slot} from '@builder.io/qwik'

/**
 * use in layouts that have a grid show casing some items
 */
export const GridTemplate = component$(() => {
  return (
    <>
      <Slot name='header' />

      <main role='main'>
        <div class=''>
          <Slot name='grid-top' />
          <div class=''>
            <Slot name='grid' />
          </div>
          <Slot name='grid-bellow' />
        </div>
        <Slot name='aside' />
      </main>
      <Slot name='footer' />
    </>
  )
})
