import React from 'react'
import { NavLink as InternalLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
    active: PropTypes.string
  }
  static defaultProps = {
    style: {color: 'inherit', textDecoration: 'none'}
  }
  render () {
    const { children, url, active, ...attrs } = this.props
    if (url.startsWith('/')) {
      return (
        <InternalLink exact to={url} activeClassName={active} {...attrs}>
          {children}
        </InternalLink>
      )
    } else {
      return (
        <a href={url} target='_blank' rel='noopener' {...attrs}>
          {children}
        </a>
      )
    }
  }
}
