import React from 'react'

export default function AsyncElement (getDynamicImport) {
  return class AsyncComponent extends React.Component {
    state = {
      element: null
    }
    componentWillMount () {
      if (!this.state.element) {
        getDynamicImport().then(element => {
          this.setState({ element })
        })
      }
    }
    render () {
      const Element = this.state.element
      return Element ? <Element {...this.props} /> : null
    }
  }
}
