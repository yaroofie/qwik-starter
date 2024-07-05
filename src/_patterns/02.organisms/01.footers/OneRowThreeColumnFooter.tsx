import {component$, HTMLAttributes, useSignal} from '@builder.io/qwik'

export interface OneRowThreeColumnFooterProps extends HTMLAttributes<HTMLDivElement> {
  // count
}

export const OneRowThreeColumnFooter = component$<OneRowThreeColumnFooterProps>((props) => {
  return <footer class='px-3 md:px-5 lg:px-7 py-5 lg:py-8 flex justify-between items-center'>
    <div class="">
      ivar
    </div>
    <div class="">
      oovar
    </div>
  </footer>
})
