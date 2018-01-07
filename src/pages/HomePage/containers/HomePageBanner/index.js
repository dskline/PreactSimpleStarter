import React from 'react'

import LazyImage from 'src/elements/LazyImage'

import { maxPhoneWidth } from './style.scss'

export const portraitImage = <LazyImage src='e_contrast:50/hero_portrait' portraitRotation='270' />
export const landscapeImage = <LazyImage src='hero_landscape' />

export default class HomePageBanner extends React.Component {
  state = {
    orientation: null
  }
  render () {
    const { orientation } = this.state
    return (
      <div id='home-page-banner' className='mb5'>
        { orientation === 'portrait' && portraitImage }
        { orientation === 'landscape' && landscapeImage }
      </div>
    )
  }
  componentWillMount () {
    this.handleOrientation()
    window.addEventListener('resize', this.handleOrientation)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleOrientation)
  }
  handleOrientation = () => {
    const screenWidth = window.innerWidth / parseFloat(getComputedStyle(document.querySelector('html'))['font-size'])
    const newOrientation = screenWidth > maxPhoneWidth ? 'landscape' : 'portrait'
    if (this.state.orientation !== newOrientation) {
      this.setState({ orientation: newOrientation })
    }
  }
}
