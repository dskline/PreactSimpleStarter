import React from 'react'

import HeroTemplate from 'src/templates/HeroTemplate'

import HomePageBanner from './containers/HomePageBanner'
import UnderConstruction from '../../components/UnderConstruction'

export default function HomePage () {
  return (
    <HeroTemplate>
      <HomePageBanner />
      <UnderConstruction />
    </HeroTemplate>
  )
}
