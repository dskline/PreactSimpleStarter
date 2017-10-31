import React from 'react'
import PropTypes from 'prop-types'

import MenuBar from 'src/components/MenuBar'

SidebarTemplate.propTypes = {
  sidebarComponent: PropTypes.element.isRequired,
  menuClass: PropTypes.string
}
export default function SidebarTemplate ({sidebarComponent, menuClass, ...attrs}) {
  return (
    <div id={attrs.id || 'app-container'} className={attrs.className}>
      <MenuBar className={menuClass} />
      <div id='two-column-container' className='bg-white-40 flex flex-row mh3 mh4-m mh6-l br3-ns'>
        <div id='content' className='inline-flex flex-column w-100 w-two-thirds-ns pa3'>
          {attrs.children}
        </div>
        <div id='sidebar' className='dn inline-flex-ns w-third'>
          {sidebarComponent}
        </div>
      </div>
    </div>
  )
}
