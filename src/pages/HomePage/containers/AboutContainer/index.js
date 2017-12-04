import React from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'svg-inline-react'

import { tocChildPropType } from 'src/components/TableOfContents'

import LazyImage from 'src/elements/LazyImage'
import BookIcon from 'svg-icon/dist/trimmed-svg/open/book.svg'
import CapitolIcon from 'svg-icon/dist/trimmed-svg/game/originals-capitol.svg'
import GraduationIcon from 'svg-icon/dist/trimmed-svg/entypo/graduation-cap.svg'
import TechIcon from 'svg-icon/dist/trimmed-svg/material/devices-other.svg'

export default class AboutContainer extends React.Component {
  static propTypes = tocChildPropType
  static defaultProps = {
    title: 'About Me'
  }
  render () {
    const {id, title, theme} = this.props
    return (
      <div id={id} className={theme.containerClass}>
        <div className='flex items-baseline justify-center w-90'>
          <div className='w-30 w-20-l mr4 mr5-l'>
            <LazyImage src='about_me_xkcd' />
          </div>
          <span className={theme.titleClass}>
            {title}
          </span>
        </div>
        <div className='flex flex-column pv5 lh-copy f4-l'>
          <BulletItem icon={TechIcon} width='w-60'>
            { 'A full stack developer with interests in UX and scalable web applications' }
          </BulletItem>
          <BulletItem icon={GraduationIcon} width='w-60'>
            { 'Graduated from Virginia Tech with a Bachelor\'s Degree in Computer Science' }
          </BulletItem>
          <BulletItem icon={CapitolIcon} width='w-50'>
            { 'Four years of professional experience in the District of Columbia' }
          </BulletItem>
          <BulletItem icon={BookIcon} width='w-50'>
            { 'Enjoys learning about the latest development tools and technologies' }
          </BulletItem>
        </div>
      </div>
    )
  }
}
class BulletItem extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }
  render () {
    const {icon, width, children} = this.props
    return (
      <div className='flex mv2'>
        <div className='w2'>
          <div className={'center mt1 mt0-l ' + width}>
            <InlineSVG src={icon} />
          </div>
        </div>
        <div className='w-90 pl3'>
          { children }
        </div>
      </div>
    )
  }
}
