import React from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'svg-inline-react'
import Aux from 'react-aux'

import Spinner from './spinner.svg'
import './style.scss'

const imageUrlPrefix = 'https://res.cloudinary.com/spencerkline/image/upload'

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
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
    // if src has an extension, treat it as nonresponsive (can't handle multiple formats
    if (props.src.indexOf('.') !== -1) {
      this.image = this._lazyLoadImage(imageUrlPrefix + '/' + props.src)
    } else {
      this.image = this._responsiveImage()
    }
  }
  render () {
    const {className, dimension, placeholder, portraitRotation} = this.props
    if (dimension) {
      return (
        <div className={className + ' dimensional-image'} style={portraitRotation ? {} : { paddingBottom: dimension.ratioPercentage + '%' }}>
          {this.image}
          {this.state.isLoading && placeholder}
        </div>
      )
    } else {
      return (
        <Aux>
          {this.image}
          {this.state.isLoading && placeholder}
        </Aux>
      )
    }
  }

  /**
   * Generates an HTML5 picture tag with multiple image sources responsive to browser and screen size (saving bandwidth)
   *
   * @return <picture> element containing x sources (x = number image types) and 1 fallback img. Each source has a
   * number of srcSet options equal to number of possible image widths.
   */
  _responsiveImage () {
    const {portraitRotation, src} = this.props
    const imageTypes = [
      { extension: 'webp', type: 'image/webp' },
      { extension: 'wdp', type: 'image/vnd.ms-photo' },
      { extension: 'jpg', type: 'image/jpg' }
    ]
    const widths = ['480', '768', '1280', '1920']
    const prefix = imageUrlPrefix + (portraitRotation ? '/a_' + portraitRotation : '')
    return (
      <picture>
        { imageTypes.map(({type, extension}) => {
          // For each image type, add a source tag
          return (
            <source key={extension} type={type} srcSet={widths.map((width) => {
              return `${prefix}/c_scale,w_${width}/${src}.${extension} ${width}w`
            })} />
          )
        }) }
        {/* Fallback image for older browsers */}
        { this._lazyLoadImage(`${prefix}/${src}.jpg`) }
      </picture>
    )
  }
  _lazyLoadImage (src) {
    const { alt, className } = this.props
    return <img data-src={src} alt={alt} className={className + ' lazyload'} onLoad={() => {
      if (this.state.isLoading) {
        this.setState({ isLoading: false })
      }
    }} />
  }
}
