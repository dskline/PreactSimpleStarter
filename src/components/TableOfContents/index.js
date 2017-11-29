import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'

import './style.scss'

const halfViewportHeight = window.innerHeight * 0.5

export default class TableOfContents extends React.Component {
  state = {
    visibleNode: 0
  }
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.shape({
        props: PropTypes.shape({
          title: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired
        })
      })),
    sidebarFixed: PropTypes.bool
  }
  static defaultProps = {
    sidebarFixed: false
  }
  render () {
    return (
      <div className='flex pb7'>
        <div className='w-100 w-75-l'>
          { this.props.children.map((node, index) =>
            <VisibilitySensor
              key={index}
              partialVisibility
              offset={{top: halfViewportHeight, bottom: halfViewportHeight}}
              onChange={(isVisible) => this.handleVisibleNode(index, isVisible)}>
              {
                React.cloneElement(node, {
                  theme: {
                    titleClass: 'nowrap f2 f1-ns playfair color-primary b',
                    containerClass: 'flex flex-column items-center justify-center min-vh-100 pv5 ph4 ph6-l' +
                      (index % 2 === 1 ? ' bg-light-gray' : '')
                  }
                })
              }
            </VisibilitySensor>
          ) }
        </div>
        <div
          id='toc-sidebar'
          className={'dn dib-l w-25 h-100 right-0 pt6 pl3 pl5-l' + (this.props.sidebarFixed ? ' fixed top-0' : '')}>
          { this._sidebar() }
        </div>
      </div>
    )
  }
  handleVisibleNode = (index, isVisible) => {
    if (isVisible && this.state.visibleNode !== index) {
      this.setState({ visibleNode: index })
    }
  }
  _sidebar () {
    return this.props.children.map((node, index) =>
      <div
        key={index + 1}
        className={'bl b--silver toc-sidebar-item mv2 truncate' +
          (this.state.visibleNode === index ? ' active' : '')}>
        <div className='dib f3 f2-l pl3 pr2'>
          0{index + 1}
        </div>
        <span className='f5 ttu'>
          {node.props.title}
        </span>
      </div>
    )
  }
}
