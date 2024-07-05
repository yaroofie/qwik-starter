import { component$, useSignal } from '@builder.io/qwik';

export interface FullScreenHeroSectionProps {
  // count
}

export const FullScreenHeroSection = component$<FullScreenHeroSectionProps>((props) => {
  const count = useSignal(0);
  return (
    <div onClick$={(event) => {}}>
      
    </div>
  );
});