import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import HeroTemplate from 'src/templates/HeroTemplate'
import TableOfContents from 'src/components/TableOfContents'

import HomePageBanner from './containers/HomePageBanner'
import AboutContainer from './containers/AboutContainer'
import ThisWebsiteContainer from './containers/ThisWebsiteContainer'
import OtherProjectsContainer from './containers/OtherProjectsContainer'
import ContactContainer from './containers/ContactContainer'

import './style.scss'

export default class HomePage extends React.Component {
  state = {
    bannerInView: true
  }
  render () {
    return (
      <HeroTemplate>
        <VisibilitySensor partialVisibility scrollCheck scrollDelay={150} onChange={this.handleBannerInView}>
          <HomePageBanner />
        </VisibilitySensor>
        <TableOfContents isSidebarFixed={!this.state.bannerInView}>
          <AboutContainer id='about-me' />
          <ThisWebsiteContainer id='this-website' />
          <OtherProjectsContainer id='other-projects' />
          <ContactContainer id='contact' />
        </TableOfContents>
      </HeroTemplate>
    )
  }
  handleBannerInView = (isVisible) => {
    this.setState({ bannerInView: isVisible })
  }
}
