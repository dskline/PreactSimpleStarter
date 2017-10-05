import { h, Component } from 'preact'
import LazyImage from 'src/elements/LazyImage'

import style from './style.scss'

const desktopImg = 'https://res.cloudinary.com/spencerkline/image/upload/f_auto,w_auto/hero_landscape.jpg'
const phoneImg = 'https://res.cloudinary.com/spencerkline/image/upload/f_auto,w_auto/a_270/e_contrast:50/hero_portrait.jpg'

export default class HomePageBanner extends Component {
  state = {
    currentImage: null,
    images: {
      phone: null,
      desktop: null
    }
  }
  render (props, state) {
    return (
      <div id='home-page-banner'>
        {state.currentImage}
      </div>
    )
  }
  componentDidMount () {
    this._setCurrentImageByScreenSize()
    window.addEventListener('resize', () => { this._setCurrentImageByScreenSize() })
  }
  componentWillUnmount () {
    window.removeEventListener('resize', () => { this._setCurrentImageByScreenSize() })
  }
  _setCurrentImageByScreenSize () {
    return this._screenWidthInEm() > style.maxPhoneWidth
      ? this._setCurrentImage('desktop', desktopImg)
      : this._setCurrentImage('phone', phoneImg)
  }
  _setCurrentImage (screen, imageUrl) {
    let image = this.state.images[screen]
    let newState = {}
    if (!image) {
      newState.images = {}
      image = <LazyImage src={imageUrl} />
      newState.images[screen] = image
    }
    if (this.state.currentImage !== image) {
      newState.currentImage = image
    }
    if (newState !== {}) {
      this.setState(newState)
    }
  }
  _screenWidthInEm () {
    return window.innerWidth / parseFloat(getComputedStyle(document.querySelector('html'))['font-size'])
  }
}
