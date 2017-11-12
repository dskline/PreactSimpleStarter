import React from 'react'
import PropTypes from 'prop-types'

import MenuBar from 'src/components/MenuBar'

export default class SidebarTemplate extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sidebarComponent: PropTypes.element.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    menuClass: PropTypes.string
  }
  static defaultProps = {
    id: 'app-container',
    className: '',
    menuClass: ''
  }
  render () {
    const { id, className, menuClass, children, sidebarComponent } = this.props
    return (
      <div id={id} className={className}>
        <MenuBar className={menuClass} />
        <div id='two-column-container' className={'min-vh-100 bg-white-40 flex flex-row mh3 mh4-m mh6-l br3-ns'}>
          <div id='content' className='inline-flex flex-column w-100 w-two-thirds-ns pa3'>
            {children}
          </div>
          <div id='sidebar' className='dn inline-flex-ns w-third'>
            {sidebarComponent}
          </div>
        </div>
      </div>
    )
  }
}
