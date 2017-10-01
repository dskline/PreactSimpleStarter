import { h, Component } from 'preact'
import { bind } from 'decko'
import VisibilitySensor from 'react-visibility-sensor'

import MenuBar from 'src/components/MenuBar'
import 'src/components/MenuBar/themes/primary.scss'
import './style.scss'

export default class HeroTemplate extends Component {
  state = {
    isAtTopOfPage: false
  }

  render (props, state) {
    return (
      <div class='bg-white'>
        <MenuBar class={state.isAtTopOfPage ? 'bg-transparent' : 'bg-primary-dark-opaque shadow-3'} />
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
