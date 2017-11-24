import React from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'svg-inline-react'

import Link from 'src/elements/Link'

import EmailIcon from 'svg-icon/dist/trimmed-svg/material/mail-outline.svg'
import SlackIcon from 'svg-icon/dist/trimmed-svg/simple/slack.svg'

export default class ContactContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }
  static defaultProps = {
    title: 'Contact Me'
  }
  render () {
    return (
      <div id={this.props.id} className='flex flex-column items-center justify-center min-vh-100 bg-light-gray pv5 ph4 ph6-l'>
        <div className='dib nowrap ph3 pb3 f2 f1-ns playfair color-primary b'>{this.props.title}</div>
        <div className='flex flex-column flex-row-ns pv5 f3'>
          {this._card('E-Mail', 'mailto:dskline1@gmail.com', EmailIcon, 'w-90 w-30-ns')}
          {this._card('Slack', 'https://klinetic.slack.com', SlackIcon, 'w-90 w-30-ns')}
        </div>
      </div>
    )
  }
  _card (label, url, icon, width) {
    return (
      <div className='pa4'>
        <Link url={url}>
          <div className='flex flex-inline flex-column items-center'>
            <div className={width}>
              <InlineSVG src={icon} />
            </div>
            <div className='pt3'>{label}</div>
          </div>
        </Link>
      </div>
    )
  }
}
