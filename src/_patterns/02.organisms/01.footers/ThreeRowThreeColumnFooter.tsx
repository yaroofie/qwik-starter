import { component$, HTMLAttributes } from '@builder.io/qwik';

export interface ThreeRowThreeColumnFooterProps extends HTMLAttributes<HTMLDivElement> {
  // count
}

export const ThreeRowThreeColumnFooter = component$<ThreeRowThreeColumnFooterProps>((props) => {
  return (
    <footer class='px-3 md:px-5 lg:px-7 py-5 lg:py-8 flex justify-between items-center'>
      asdfa
    </footer>
  )
});