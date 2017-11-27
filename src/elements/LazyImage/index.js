import React from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'svg-inline-react'
import Aux from 'react-aux'

import Spinner from './spinner.svg'
import './style.scss'

const imageUrlPrefix = 'https://res.cloudinary.com/spencerkline/image/upload'
const imageTypes = [
  { extension: 'webp', type: 'image/webp' },
  { extension: 'wdp', type: 'image/vnd.ms-photo' },
  { extension: 'jpg', type: 'image/jpg' }
]
const widths = ['480', '768', '1080', '1440', '1920']

class Dimension {
  constructor (ratio) {
    this.ratioPercentage = ratio * 100
  }
}
export const Dimensions = {
  wide: new Dimension(9 / 16),
  normal: new Dimension(3 / 4)
}

export class LazyImage extends React.Component {
  state = {
    isLoading: true
  }
  static defaultProps = {
    alt: '',
    className: '',
    placeholder: <InlineSVG src={Spinner} raw={Element.prototype.hasOwnProperty('remove')} />
  }
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    dimension: PropTypes.instanceOf(Dimension),
    placeholder: PropTypes.node,
    portraitRotation: PropTypes.string
  }
  render () {
    const {className, dimension, placeholder, portraitRotation} = this.props
    if (dimension) {
      return (
        <div
          className={className + ' dimensional-image'}
          style={portraitRotation ? {} : { paddingBottom: dimension.ratioPercentage + '%' }}>
          {this._responsiveImage()}
          {this.state.isLoading && placeholder}
        </div>
      )
    } else {
      return (
        <Aux>
          {this._responsiveImage()}
          {this.state.isLoading && placeholder}
        </Aux>
      )
    }
  }

  /**
   * Generates an HTML5 picture tag with multiple image sources responsive to browser and screen size (saving bandwidth)
   *
   * @return picture element containing x sources (x = number image types) and 1 fallback img. Each source has a
   * number of srcSet options equal to number of possible image widths.
   */
  _responsiveImage () {
    const {src, alt, className} = this.props
    return (
      <picture>
        { imageTypes.map(({type, extension}) =>
          <source
            key={extension}
            type={type}
            srcSet={widths.map(width =>
              `${this.srcPrefix()}/c_scale,w_${width}/${this.props.src}.${extension} ${width}w`
            )} />
        ) }
        <img
          data-src={`${this.srcPrefix()}/${src}.jpg`}
          alt={alt}
          className={className + ' lazyload'}
          onLoad={this.handleImageLoad} />
      </picture>
    )
  }
  srcPrefix = () => {
    return imageUrlPrefix + (this.props.portraitRotation ? '/a_' + this.props.portraitRotation : '')
  }
  handleImageLoad = () => {
    if (this.state.isLoading) {
      this.setState({ isLoading: false })
    }
  }
}
