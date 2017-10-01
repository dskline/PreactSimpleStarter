import { h, Component } from 'preact'

import MenuBar from 'src/components/MenuBar'
import 'src/components/MenuBar/themes/white.scss'

export default class SidebarTemplate extends Component {
  render () {
    return (
      <div class='bg-white'>
        <MenuBar class='bg-white shadow-3' />
        <div id='content'>
          {this.props.children}
        </div>
        <div id='sidebar'>
          {this.props.sidebarComponent}
        </div>
      </div>
    )
  }
}
