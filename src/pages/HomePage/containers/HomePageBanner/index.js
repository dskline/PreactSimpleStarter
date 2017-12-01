import React from 'react'

import LazyImage from 'src/elements/LazyImage'

import { maxPhoneWidth } from './style.scss'

export default class HomePageBanner extends React.Component {
  state = {
    orientation: null
  }
  render () {
    const { orientation } = this.state
    return (
      <div id='home-page-banner' className='mb5'>
        { orientation === 'portrait' && <LazyImage src='e_contrast:50/hero_portrait' portraitRotation='270' /> }
        { orientation === 'landscape' && <LazyImage src='hero_landscape' /> }
      </div>
    )
  }
  componentDidMount () {
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
