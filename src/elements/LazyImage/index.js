import { h, Component } from 'preact'

export default class LazyImage extends Component {
  state = {
    isLoaded: false
  }
  constructor (props) {
    super(props)
    let image = new Image()
    image.component = this
    image.onload = function () {
      this.component.setState({ isLoaded: true })
    }
    image.src = props.src
  }
  render (props, state) {
    if (state.isLoaded) {
      return <img src={props.src} alt={props.alt || ''} />
    }
    return null
  }
}
