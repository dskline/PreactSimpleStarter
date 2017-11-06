import React, { Component } from 'react'

function asyncComponent (getComponent) {
  return class AsyncComponent extends Component {
    constructor (props) {
      super(props)
      this.state = { Component: null }
    }
    componentWillMount () {
      if (!this.state.Component) {
        getComponent()
          .then(Component => {
            this.setState({ Component })
          })
      }
    }
    render () {
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : null
    }
  }
}
export const HomePage = asyncComponent(() =>
  import('./pages/HomePage')
    .then(m => m.default)
    .catch(e => console.error(e)))

export const BlogPage = asyncComponent(() =>
  import('./pages/BlogPage')
    .then(m => m.default)
    .catch(e => console.error(e)))

export const CreatePostPage = asyncComponent(() =>
  import('./pages/CreatePostPage')
    .then(m => m.default)
    .catch(e => console.error(e)))
