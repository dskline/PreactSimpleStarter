import React from 'react'

function asyncComponent (getComponent) {
  return class AsyncComponent extends React.Component {
    state = {
      Component: null
    }
    componentWillMount () {
      if (!this.state.Component) {
        getComponent().then(Component => {
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
    .then(i => i.default)
    .catch(e => console.error(e)))

export const BlogPage = asyncComponent(() =>
  import('./pages/BlogPage')
    .then(i => i.default)
    .catch(e => console.error(e)))

export const CreatePostPage = asyncComponent(() =>
  import('./pages/CreatePostPage')
    .then(i => i.default)
    .catch(e => console.error(e)))
