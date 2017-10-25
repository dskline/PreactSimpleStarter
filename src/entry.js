import React from 'react'
import ReactDOM from 'react-dom'

import App from './'
import LoadingScreen from './elements/LoadingScreen'
import './style.scss'

if (process.env.NODE_ENV === 'production') {
  require('./config/offline')
}

ReactDOM.render(<App />, document.getElementById('app-root'))

LoadingScreen.tearDown()
