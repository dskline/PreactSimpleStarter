import { h, Component } from 'preact'

import MenuBar from 'src/components/MenuBar'

export default class SidebarTemplate extends Component {
  render () {
    return (
      <div class='bg-white'>
        <MenuBar background='bg-primary-dark-opaque' />
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
