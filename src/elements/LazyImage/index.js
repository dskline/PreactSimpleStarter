import React from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'svg-inline-react'

import Spinner from './spinner.svg'
import './style.scss'

const Dimensions = {
  '16x9': (9 / 16) * 100
}
export default class LazyImage extends React.Component {
  static defaultProps = {
    alt: '',
    className: '',
    dimension: undefined,
    placeholder: <InlineSVG src={Spinner} raw />
  }
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    dimension: PropTypes.oneOf(Object.keys(Dimensions)),
    placeholder: PropTypes.node,
    rounded: PropTypes.bool
  }
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false
    }
    let image = new Image()
    image.onload = () => {
      this.setState({ isLoaded: true })
    }
    image.src = this.props.src
  }
  render () {
    const {src, alt, className, dimension, placeholder, rounded} = this.props
    return (
      <div className={className + ' lazyImage'} style={dimension ? {paddingBottom: Dimensions[dimension] + '%'} : {}}>
        {this.state.isLoaded
          ? <img src={src} alt={alt} style={dimension ? {height: '100%'} : {}} className={rounded ? 'br2' : ''} />
          : placeholder}
      </div>
    )
  }
}
