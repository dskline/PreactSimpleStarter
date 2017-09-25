import { h, Component } from 'preact'
import inView from 'in-view'

import MenuBar from 'src/components/MenuBar'
import './style.scss'

export default class HeroTemplate extends Component {
  state = {
    isAtTopOfPage: false
  }

  componentDidMount () {
    inView.offset(-30)
    inView('#top-of-page')
      .on('enter', () => this.setState({ isAtTopOfPage: true }))
      .on('exit', () => this.setState({ isAtTopOfPage: false }))
  }

  render (props, state) {
    return (
      <div class='bg-white'>
        <div id='top-of-page' class='bg-black' />
        <MenuBar background={state.isAtTopOfPage ? 'bg-transparent' : 'bg-primary-dark-opaque'} />
        <div id='content'>
          {props.children}
        </div>
      </div>
    )
  }
}
