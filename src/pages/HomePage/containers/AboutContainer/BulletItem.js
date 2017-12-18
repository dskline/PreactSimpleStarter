import React from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'svg-inline-react'

export default class BulletItem extends React.Component {
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
