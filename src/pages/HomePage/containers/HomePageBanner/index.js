import { h, Component } from 'preact'
import { bind } from 'decko'

import './style.scss'

export default class HomePageBanner extends Component {
  state = {
    isLoading: true
  }
  componentDidMount () {
    const widthEm = window.innerWidth / parseFloat(getComputedStyle(document.querySelector('html'))['font-size'])
    this.loadImage(widthEm > 30 // style.maxPhoneWidth
      ? 'https://res.cloudinary.com/spencerkline/image/upload/f_auto,w_auto/hero_landscape.jpg'
      : 'https://res.cloudinary.com/spencerkline/image/upload/f_auto,w_auto/a_270/hero_portrait.jpg')
  }
  @bind
  loadImage (imageUrl) {
    let downloadingImage = new Image()
    downloadingImage.component = this
    downloadingImage.onload = function () {
      this.component.setState({ isLoading: false })
    }
    downloadingImage.src = imageUrl
  }
  render (props, state) {
    return (
      <div id='home-page-banner' class={state.isLoading ? 'loading' : ''} />
    )
  }
}
