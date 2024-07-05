import {component$, Slot} from '@builder.io/qwik'

/**
 * use in layouts that have a fixed menu in the side like dashboard layouts
 */
export const MenuTemplate = component$(() => {
  return (
    <>
      <div class=''>
        <Slot name='header' />
        <main role='main'>
          <Slot />
        </main>
        <Slot name='footer' />
      </div>
      <Slot name='menu' />
    </>
  )
})
