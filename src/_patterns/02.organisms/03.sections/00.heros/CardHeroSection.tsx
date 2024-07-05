import {component$, Slot, useContextProvider, useSignal} from '@builder.io/qwik'
import {HeadingLevelContext} from '@atoms/00.meta/HeadingLevelContext'

export interface CardHeroSectionProps {
  level: number
}

export const CardHeroSection = component$<CardHeroSectionProps>( ( { level, ...props } ) =>
{
  const levelSignal = useSignal(level)
  useContextProvider(HeadingLevelContext, levelSignal)
  return <section class='py-10'>
    <Slot />
  </section>
})
