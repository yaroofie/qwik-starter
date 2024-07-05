import {component$} from '@builder.io/qwik'
import {BaseTemplate} from '@templates/00.base-template'
import {Heading} from '@atoms/02.typography/Heading'
import {CardHeroSection} from '@organisms/03.sections/00.heros/CardHeroSection'

export interface LandingPageProps {
  // count
}

export const LandingPage = component$<LandingPageProps>((props) => {
  return (
    <BaseTemplate>
      <CardHeroSection level={1}>
        <Heading>landing page sections here</Heading>
        <CardHeroSection level={2}>
          <Heading>landing page sections here</Heading>
          <CardHeroSection level={3}>
            <Heading>landing page sections here</Heading>
          </CardHeroSection>
        </CardHeroSection>
      </CardHeroSection>
    </BaseTemplate>
  )
})
