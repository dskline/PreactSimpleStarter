import React from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'svg-inline-react'

import Link from 'src/elements/Link'

import './style.scss'
import Logo from './logo.svg'
import HomeIcon from './icons/home.svg'
import GithubIcon from './icons/github.svg'
import BlogIcon from './icons/blog.svg'

export default class MenuBar extends React.Component {
  state = {
    isExpanded: false
  }
  static propTypes = {
    theme: PropTypes.shape({
      className: PropTypes.string
    })
  }
  render () {
    return (
      <div id='menu-bar' className={this.props.theme.className + ' flex w-100 fixed top-0 fw5 avenir'}>
        {/* Menu Bar Left */}
        <Link id='logo-container' url='/' className='flex ml3 ml4-l' aria-label='logo-home'>
          <div id='logo-icon' className='mv1 mr3 ph2 ba bw1'>
            <InlineSVG src={Logo} raw={Element.prototype.hasOwnProperty('remove')} />
          </div>
          <div id='logo-text' className='dn db-ns pv2 mv2 f5 f4-l'>SpencerKline.com</div>
        </Link>
        {/* Menu Bar Right */}
        <nav className='flex items-center ph3 ml-auto'>
          {this._menuToggle('dismiss-menu-overlay')}
          <div id='hamburger-wrapper' className='dn ma2'>
            {this._menuToggle('hamburger-overlay')}
            <div className='hamburger-piece shadow-3' />
            <div className='hamburger-piece shadow-3' />
            <div className='hamburger-piece shadow-3' />
          </div>
          <div id='navbar-link-container' className='f5 f4-l mr4-l pb1-ns'>
            { this._link('Home', HomeIcon, '/') }
            { this._link('Blog', BlogIcon, '/blog') }
            { this._link('GitHub', GithubIcon, 'https://www.github.com/dskline') }
          </div>
        </nav>
      </div>
    )
  }
  handleExpanded = (e) => {
    this.setState({ isExpanded: e.target.checked })
  }
  _menuToggle (id) {
    return (
      <input
        id={id}
        type='checkbox'
        className='dn-ns'
        aria-label={id}
        checked={this.state.isExpanded}
        onChange={this.handleExpanded}
      />
    )
  }
  _link (title, icon, location) {
    return (
      <Link url={location} className='pv1-ns mh3-ns' active='bb-ns'>
        <InlineSVG
          src={icon}
          className='mr3 dn-ns'
        />{title}
      </Link>
    )
  }
}
