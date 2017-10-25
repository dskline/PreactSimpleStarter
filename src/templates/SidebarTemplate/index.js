import React from 'react'
import PropTypes from 'prop-types'

import MenuBar from 'src/components/MenuBar'

SidebarTemplate.propTypes = {
  sidebarComponent: PropTypes.element.isRequired,
  menuClass: PropTypes.string
}
export default function SidebarTemplate ({sidebarComponent, menuClass, ...attrs}) {
  return (
    <div id={attrs.id || 'app-container'} className={attrs.className + ' overflow-y-scroll'}>
      <MenuBar className={menuClass} />
      <div id='two-column-container' className='flex flex-row mt6 mh3 mh4-m mh6-l br3-ns'>
        <div id='content' className='inline-flex flex-column w-100 pa3'>
          {attrs.children}
        </div>
        <div id='sidebar' className='dn inline-flex-ns w-40 pa3'>
          {sidebarComponent}
        </div>
      </div>
    </div>
  )
}
