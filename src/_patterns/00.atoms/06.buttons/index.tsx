import {Slot, component$} from '@builder.io/qwik'
import type {IButtonProps} from './interfaces'
import './styles.css'

export default component$<IButtonProps>(({...props}) => {
  return (
    <button type='button' {...props}>
      <Slot />
    </button>
  )
})
