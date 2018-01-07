import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AsyncElement from './elements/AsyncElement'

const HomePage = AsyncElement(() => import('./pages/HomePage').then(i => i.default))
const BlogPage = AsyncElement(() => import('./pages/BlogPage').then(i => i.default))
const CreatePostPage = AsyncElement(() => import('./pages/CreatePostPage').then(i => i.default))

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/blog/:titleHtml' component={BlogPage} />
      <Route path='/blog' component={BlogPage} />
      <Route path='/createPost' component={CreatePostPage} />
      <Redirect to='/' />
    </Switch>
  )
}
