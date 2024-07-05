import {component$, HTMLAttributes, Slot, useContext} from '@builder.io/qwik'
import {HeadingLevelContext} from '@atoms/00.meta/HeadingLevelContext'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading = component$<HeadingProps>((props) => {
  const level = useContext(HeadingLevelContext)
  switch (level.value) {
    case 1:
      return (
        <h1 {...props}>
          <Slot />
        </h1>
      )
    case 2:
      return (
        <h2 {...props}>
          <Slot />
        </h2>
      )
    case 3:
      return (
        <h3 {...props}>
          <Slot />
        </h3>
      )
    case 4:
      return (
        <h4 {...props}>
          <Slot />
        </h4>
      )
    case 5:
      return (
        <h5 {...props}>
          <Slot />
        </h5>
      )
    case 6:
      return (
        <h6 {...props}>
          <Slot />
        </h6>
      )
    default:
      throw Error('Unknown level: ' + level)
  }
})
