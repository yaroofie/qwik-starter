import {component$, Slot} from '@builder.io/qwik'
import {OneRowThreeColumnHeader} from '@organisms/00.headers/OneRowThreeColumnHeader'
import { ThreeRowThreeColumnFooter } from '@organisms/01.footers/ThreeRowThreeColumnFooter';

/**
 * use in simple layouts like landing, about us,...
 */
export const BaseTemplate = component$(() => {
  return (
    <div class='h-full min-h-screen flex flex-col justify-between'>
      <div class=''>
        <OneRowThreeColumnHeader />
        <main role='main' class='container'>
          <Slot />
        </main>
      </div>
      <ThreeRowThreeColumnFooter />
    </div>
  )
})
