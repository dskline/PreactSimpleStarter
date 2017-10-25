import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'

import MenuBar from 'src/components/MenuBar'
import 'src/components/MenuBar/themes/primary.scss'
import './style.scss'

export default class HeroTemplate extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string
  }
  static defaultProps = {
    id: 'app-container'
  }
  constructor (props) {
    super(props)
    this.state = {
      isAtTopOfPage: false
    }
  }

  render () {
    const {id, children} = this.props
    return (
      <div id={id} className='bg-white'>
        <MenuBar className={this.state.isAtTopOfPage ? 'bg-transparent' : 'bg-primary-dark-opaque shadow-3'} />
        <VisibilitySensor onChange={(e) => this._setIsTopOfPageVisible(e)} partialVisibility='top' offset={{top: -30}}>
          <div id='content'>
            {children}
          </div>
        </VisibilitySensor>
      </div>
    )
  }

  _setIsTopOfPageVisible (isVisible) {
    this.setState({ isAtTopOfPage: isVisible })
  }
}
