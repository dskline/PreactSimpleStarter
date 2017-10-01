import { h, render } from 'preact'
import { Router } from 'preact-router'

import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'

if (process.env.NODE_ENV === 'production') {
  require('./config/offline')
} else {
  require('preact/debug')
}

render(
  <Router>
    <BlogPage path='/blog/:titleHtml' />
    <BlogPage path='/blog' />
    <HomePage default />
  </Router>, document.body
)
