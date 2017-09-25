import { h } from 'preact'
import InlineSVG from 'svg-inline-react'

import ConstructionImage from './under_construction.svg'

export default () => {
  return (
    <div class='flex flex-column items-center dt-ns mw8 h6 center pv5 ph3'>
      <div class='db dtc-ns center v-mid-ns w-third w-25-m'>
        <InlineSVG src={ConstructionImage} raw />
      </div>
      <div class='flex flex-column items-start dtc-ns v-mid pl4-ns mw-100 w-two-thirds-ns'>
        <div class='mw-100'>
          <h2 class='underline truncate mb0 mt0-ns'>
            Currently Under Construction
          </h2>
        </div>
        <h3>In the meantime...</h3>
        <a href='https://www.github.com/dskline/portfolio' target='_blank' rel='noopener' class='f6 link pointer dim ph3 pv2 mb2 dib white bg-secondary'>
          Check out my GitHub
        </a>
      </div>
    </div>
  )
}
