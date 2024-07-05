import {component$, HTMLAttributes, useSignal} from '@builder.io/qwik'

export interface OneRowThreeColumnHeaderProps extends HTMLAttributes<HTMLDivElement> {
  // count
}

export const OneRowThreeColumnHeader = component$<OneRowThreeColumnHeaderProps>((props) => {
  return <header class='px-3 md:px-5 lg:px-7 py-5 lg:py-8 flex justify-between items-center'>
    <div class="">
      ivar
    </div>
    <div class="">
      oovar
    </div>
  </header>
})
