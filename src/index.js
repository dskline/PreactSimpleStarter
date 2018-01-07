import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import DataProvider from './data/DataProvider'
import Routes from './routes'

import './style.scss'

export default function App () {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </DataProvider>
  )
}
