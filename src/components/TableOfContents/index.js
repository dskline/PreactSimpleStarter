import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'

import './style.scss'

export default class TableOfContents extends React.Component {
  state = {
    activeNode: 0
  }
  static defaultProps = {
    fixedSidebar: false
  }
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.shape({
        props: PropTypes.shape({
          title: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired
        })
      })),
    fixedSidebar: PropTypes.bool
  }
  render () {
    return (
      <div className='flex pb7'>
        <div className='w-100 w-70-ns'>
          { this.props.children.map((node, index) => {
            return (
              <VisibilitySensor
                key={index}
                minTopValue={window.innerHeight * 0.4}
                onChange={(e) => this._setActiveNode(e, index)}>
                { node }
              </VisibilitySensor>
            )
          }) }
        </div>
        <div className={'dn dib-ns w-30 h-100 right-0 pt6 pl3 pl5-l' + (this.props.fixedSidebar ? ' fixed top-0' : '')}>
          { this._sidebar() }
        </div>
      </div>
    )
  }
  _setActiveNode (isVisible, index) {
    if (isVisible) {
      this.setState({ activeNode: index })
    }
  }
  _sidebar () {
    return this.props.children.map((node, index) => {
      return (
        <div key={index + 1}
          className={'bl b--silver toc mv2 truncate' + (this.state.activeNode === index ? ' active' : '')}>
          <div className='dib f3 f2-l pl3 pr2'>
            0{index + 1}
          </div>
          <span className='f5 ttu'>
            {node.props.title}
          </span>
        </div>
      )
    })
  }
}
