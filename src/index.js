import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import DataProvider from './data/DataProvider'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'

import './style.scss'

export default function App () {
  return (
    <DataProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/blog/:titleHtml' component={BlogPage} />
          <Route path='/blog' component={BlogPage} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </DataProvider>
  )
}
