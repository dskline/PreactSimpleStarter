import React from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'svg-inline-react'

import Link from 'src/elements/Link'

import EmailIcon from 'svg-icon/dist/trimmed-svg/material/mail-outline.svg'
import SlackIcon from 'svg-icon/dist/trimmed-svg/simple/slack.svg'

export default class ContactContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    theme: PropTypes.shape({
      containerClass: PropTypes.string,
      titleClass: PropTypes.string
    })
  }
  static defaultProps = {
    title: 'Contact Me'
  }
  render () {
    const {id, title, theme} = this.props
    return (
      <div id={id} className={theme.containerClass}>
        <div className={theme.titleClass}>
          {title}
        </div>
        <div className='flex flex-column flex-row-ns pv5 f3'>
          {this._contactItem('E-Mail', 'mailto:dskline1@gmail.com', EmailIcon, 'w-90 w-30-ns')}
          {this._contactItem('Slack', 'https://klinetic.slack.com', SlackIcon, 'w-90 w-30-ns')}
        </div>
      </div>
    )
  }
  _contactItem (label, url, icon, width) {
    return (
      <div className='pa4'>
        <Link url={url}>
          <div className='flex flex-inline flex-column items-center'>
            <div className={width}>
              <InlineSVG src={icon} />
            </div>
            <div className='pt3'>
              {label}
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
