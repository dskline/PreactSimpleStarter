import React from 'react'

import { LazyImage } from 'src/elements/LazyImage'

import { maxPhoneWidth } from './style.scss'

const images = {
  portrait: 'e_contrast:50/hero_portrait',
  landscape: 'hero_landscape'
}

export default class HomePageBanner extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orientation: null
    }
  }
  render () {
    const { orientation } = this.state
    return (
      <div id='home-page-banner'>
        { !orientation ? null
          : <LazyImage src={images[orientation]} className='h-100'
            portraitRotation={orientation === 'portrait' ? '270' : null} />
        }
      </div>
    )
  }
  componentDidMount () {
    this._setOrientationByScreenWidth()
    window.addEventListener('resize', () => { this._setOrientationByScreenWidth() })
  }
  componentWillUnmount () {
    window.removeEventListener('resize', () => { this._setOrientationByScreenWidth() })
  }
  _setOrientationByScreenWidth () {
    const newOrientation = this._screenWidthInEm() > maxPhoneWidth ? 'landscape' : 'portrait'
    if (this.state.orientation !== newOrientation) {
      this.setState({ orientation: newOrientation })
    }
  }
  _screenWidthInEm () {
    return window.innerWidth / parseFloat(getComputedStyle(document.querySelector('html'))['font-size'])
  }
}
