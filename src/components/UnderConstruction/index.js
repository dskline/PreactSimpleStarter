import React from 'react'
import InlineSVG from 'svg-inline-react'

import Link from 'src/elements/Link'
import ConstructionImage from './under_construction.svg'

export default function UnderConstruction () {
  return (
    <div className='flex flex-column items-center dt-ns mw8 h6 center pv5 ph3'>
      <div className='db dtc-ns center v-mid-ns w-third w-25-m'>
        <InlineSVG src={ConstructionImage} raw />
      </div>
      <div className='flex flex-column items-start dtc-ns v-mid pl4-ns mw-100 w-two-thirds-ns'>
        <div className='mw-100'>
          <h2 className='underline truncate mb0 mt0-ns'>
            Currently Under Construction
          </h2>
        </div>
        <h3>In the meantime...</h3>
        <div className='white'>
          <Link url='https://www.github.com/dskline/portfolio' className='f6 link pointer dim ph3 pv2 mb2 dib bg-secondary'>
            View my progress on GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}
