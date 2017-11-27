import React from 'react'
import PropTypes from 'prop-types'

import Link from './index'

export default class ActionLink extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  render () {
    return (
      <Link {...this.props} className='f6 link pointer dim ph3 pv2 mb2 dib bg-secondary br1 avenir'>
        <span className='white'>
          { this.props.children }
        </span>
      </Link>
    )
  }
}
