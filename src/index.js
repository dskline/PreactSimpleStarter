import { h, render } from 'preact'
import { Router } from 'preact-router'

import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'

// Load offline plugin only on production
if (process.env.NODE_ENV === 'production') {
  require('./offline')
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
