import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import { Router } from 'preact-router'
import App from './components/App'
import ErrorPage from './components/404'

import store from './store'
import 'material-design-lite/material'
import './style/index.scss'

// Load offline plugin only on production
process.env.NODE_ENV === 'production' && require('./offline')

render(
  <Provider store={store}>
    <Router>
      <App path='/' />
      <ErrorPage default />
    </Router>
  </Provider>, document.body)
