import React from 'react'
import PropTypes from 'prop-types'

import MenuBar from 'src/components/MenuBar'

export default class SidebarTemplate extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sidebarComponent: PropTypes.element.isRequired,
    theme: PropTypes.object.isRequired
  }
  render () {
    const { theme, children, sidebarComponent } = this.props
    return (
      <div id='sidebar-template' className='pt6'>
        <MenuBar theme={theme.menu} />
        <div id='two-column-container' className='flex flex-row min-vh-100 mh3 mh5-m mh6-l br3-ns'>
          <div id='content' className='inline-flex flex-column w-100 w-two-thirds-l pa3'>
            {children}
          </div>
          <div id='sidebar' className='dn inline-flex-l w-third'>
            {sidebarComponent}
          </div>
        </div>
      </div>
    )
  }
}
