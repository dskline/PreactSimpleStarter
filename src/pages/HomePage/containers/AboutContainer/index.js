import React from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'svg-inline-react'

import { LazyImage } from 'src/elements/LazyImage'
import BookIcon from 'svg-icon/dist/trimmed-svg/open/book.svg'
import CapitolIcon from 'svg-icon/dist/trimmed-svg/game/originals-capitol.svg'
import GraduationIcon from 'svg-icon/dist/trimmed-svg/entypo/graduation-cap.svg'
import TechIcon from 'svg-icon/dist/trimmed-svg/material/devices-other.svg'

export default class AboutContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }
  static defaultProps = {
    title: 'About Me'
  }
  render () {
    return (
      <div id={this.props.id} className='flex flex-column items-center justify-center min-vh-100 pv5 ph4 pr0-ns pl6-l'>
        <div className='flex items-baseline justify-center w-90 ph2 pb3 mb4'>
          <div className='w-30 w-20-l'>
            <LazyImage src='about_me_xkcd' />
          </div>
          <span className='nowrap ml4 ml5-l f2 f1-ns playfair color-primary b'>{this.props.title}</span>
        </div>
        <div className='flex flex-column lh-copy f4-l'>
          { this._bullet('A full stack developer with interests in UX and scalable web applications', TechIcon, 'w-60') }
          { this._bullet('Graduated from Virginia Tech with a Bachelor\'s Degree in Computer Science', GraduationIcon, 'w-60') }
          { this._bullet('Four years of professional experience in the District of Columbia', CapitolIcon, 'w-50') }
          { this._bullet('Enjoys learning about the latest development tools and technologies', BookIcon, 'w-50') }
        </div>
      </div>
    )
  }
  _bullet (label, svg, size) {
    return (
      <div className='flex mv2'>
        <div className='w2'>
          <div className={'center mt1 mt0-l ' + size}>
            <InlineSVG src={svg} />
          </div>
        </div>
        <div className='w-90 pl3'>{ label }</div>
      </div>
    )
  }
}
