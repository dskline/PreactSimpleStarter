import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import InlineSVG from 'svg-inline-react'
import 'linkstate/polyfill'

import './style.scss'

import HomeIcon from './icons/home.svg'
import GithubIcon from './icons/github.svg'
import BlogIcon from './icons/blog.svg'

export default class MenuBar extends Component {
  state = {
    isExpanded: false,
    links: [
      this._link('Home', HomeIcon, '/'),
      this._link('Blog', BlogIcon, '/blog'),
      this._link('GitHub', GithubIcon, 'https://www.github.com/dskline')
    ]
  }

  render (props, state) {
    return (
      <div id='menu-bar' class={props.class + ' flex w-100 fixed top-0 pb1'}>
        <div id='logo-container' class='w3 mr-auto' />
        <nav class='flex items-center ph3 pv1 pv0-ns'>
          {this._menuToggle('dismiss-menu-overlay')}
          <div id='hamburger-wrapper' class='dn ma2'>
            {this._menuToggle('hamburger-overlay')}
            <div class='hamburger-piece shadow-3' />
            <div class='hamburger-piece shadow-3' />
            <div class='hamburger-piece shadow-3' />
          </div>
          <div id='navbar-link-container' class='b f5 f4-l pv2-ns'>
            {state.links}
          </div>
        </nav>
      </div>
    )
  }
  _menuToggle (id) {
    return (
      <input id={id} type='checkbox' class='dn-ns' aria-label={id}
        checked={this.state.isExpanded} onChange={this.linkState('isExpanded')} />
    )
  }
  _link (title, icon, location) {
    const svg = <InlineSVG src={icon} class='mr3 dn-ns' />
    const attrs = {
      href: location,
      class: 'no-underline pv1-ns mh3-ns'
    }
    if (location.startsWith('http')) {
      return (
        <a target='_blank' rel='noopener' {...attrs}>
          {svg}{title}
        </a>
      )
    } else {
      return (
        <Link activeClassName='bb-ns' {...attrs}>
          {svg}{title}
        </Link>
      )
    }
  }
}
