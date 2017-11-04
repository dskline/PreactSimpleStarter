import React from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'svg-inline-react'
import 'lazysizes'

import { Dimension, Dimensions } from './Dimension'
import Spinner from './spinner.svg'
import './style.scss'

const imageUrlPrefix = 'https://res.cloudinary.com/spencerkline/image/upload'

export class LazyImage extends React.Component {
  static defaultProps = {
    alt: '',
    className: '',
    dimension: Dimensions.normal,
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
  }

  render () {
    const {className, dimension, placeholder, portraitRotation} = this.props
    return (
      <div className={className + ' lazy-image'} style={portraitRotation ? {} : { paddingBottom: dimension.ratioPercentage + '%' }}>
        { this._responsiveImage() }
        { this.state.isLoading ? placeholder : null }
      </div>
    )
  }

  /**
   * Generates an HTML5 picture tag with multiple image sources responsive to browser and screen size (saving bandwidth)
   *
   * @return <picture> element containing x sources (x = number image types) and 1 fallback img. Each source has a
   * number of srcSet options equal to number of possible image widths.
   */
  _responsiveImage () {
    const {alt, className, dimension, portraitRotation, src} = this.props
    const imageTypes = [
      { extension: 'webp', type: 'image/webp' },
      { extension: 'wdp', type: 'image/vnd.ms-photo' },
      { extension: 'jpg', type: 'image/jpg' }
    ]
    const prefix = imageUrlPrefix + (portraitRotation ? '/a_' + portraitRotation : '')
    return (
      <picture>
        { imageTypes.map(({type, extension}) => {
          // For each image type, add a source tag
          return (
            <source key={extension} type={type} srcSet={dimension.widths.map((width) => {
              return `${prefix}/c_scale,w_${width}/${src}.${extension} ${width}w`
            })} />
          )
        }) }
        {/* Fallback image for older browsers */}
        <img data-src={`${prefix}/${src}.jpg`} alt={alt} className={className + ' lazyload'} onLoad={() => {
          if (this.state.isLoading) {
            this.setState({ isLoading: false })
          }
        }} />
      </picture>
    )
  }
}
export { Dimensions } from './Dimension'
