import React from 'react'
import TestUtils from 'src/utilities/test/TestUtils'

import Link from './'
import ActionLink from './ActionLink'

describe('<Link />', () => {
  test('internal url returns an NavLink', () => {
    TestUtils.component(<Link url='/' />).contains('NavLink[to="/"]')
  })

  test('external url returns a normal anchor tag', () => {
    TestUtils.component(<Link url='https://www.google.com' />)
      .contains('a[href="https://www.google.com"]')
  })
})

describe('<ActionLink />', () => {
  test('passes props to Link', () => {
    TestUtils.component(<ActionLink url='/' />).contains('Link[url="/"]')
  })
})
