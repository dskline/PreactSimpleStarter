import { h, Component } from 'preact'
import { bind } from 'decko'
import VisibilitySensor from 'react-visibility-sensor'

import MenuBar from 'src/components/MenuBar'
import './style.scss'

export default class HeroTemplate extends Component {
  state = {
    isAtTopOfPage: false
  }

  render (props, state) {
    return (
      <div class='bg-white'>
        <MenuBar background={state.isAtTopOfPage ? 'bg-transparent' : 'bg-primary-dark-opaque'} />
        <VisibilitySensor onChange={this._setIsTopOfPageVisible} partialVisibility='top' offset={{top: -30}}>
          <div id='content'>
            {props.children}
          </div>
        </VisibilitySensor>
      </div>
    )
  }
  @bind
  _setIsTopOfPageVisible (isVisible) {
    this.setState({ isAtTopOfPage: isVisible })
  }
}
