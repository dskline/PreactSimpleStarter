import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'

import MenuBar from 'src/components/MenuBar'
import { primary, transparent } from 'src/components/MenuBar/themes'

export default class HeroTemplate extends React.Component {
  state = {
    isAtTopOfPage: false
  }
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string
  }
  static defaultProps = {
    id: 'app-container'
  }
  render () {
    const {id, children} = this.props
    return (
      <div id={id} className='bg-white'>
        <MenuBar theme={this.state.isAtTopOfPage ? transparent : primary} />
        <VisibilitySensor
          partialVisibility='top'
          offset={{top: -30}}
          onChange={this.handleTopOfPageVisibility}>
          <div id='content'>
            {children}
          </div>
        </VisibilitySensor>
      </div>
    )
  }
  handleTopOfPageVisibility = (isVisible) => {
    this.setState({ isAtTopOfPage: isVisible })
  }
}
