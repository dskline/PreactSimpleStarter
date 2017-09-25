import { h } from 'preact'

import HeroTemplate from 'src/templates/HeroTemplate'

import HomePageBanner from './containers/HomePageBanner'
import UnderConstruction from '../../components/UnderConstruction'

export default () => {
  return (
    <HeroTemplate>
      <HomePageBanner />
      <UnderConstruction />
    </HeroTemplate>
  )
}
