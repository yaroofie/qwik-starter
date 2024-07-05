import { component$, HTMLAttributes } from '@builder.io/qwik';

export interface OneRowTwoColumnFooterProps extends HTMLAttributes<HTMLDivElement> {
  // count
}

export const OneRowTwoColumnFooter = component$<OneRowTwoColumnFooterProps>((props) => {
  return <footer></footer>
});