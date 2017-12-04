import React from 'react'
import { shallow } from 'enzyme'

import Link from './'
import ActionLink from './ActionLink'

const testLink = (jsx) => {
  return {
    contains: (test) => {
      expect(shallow(jsx).find(test).length).toBe(1)
    }
  }
}

describe('<Link />', () => {
  test('internal url returns an NavLink', () => {
    testLink(<Link url='/' />).contains('NavLink[to="/"]')
  })

  test('external url returns a normal anchor tag', () => {
    testLink(<Link url='https://www.google.com' />).contains('a[href="https://www.google.com"]')
  })
})

describe('<ActionLink />', () => {
  test('passes props to Link', () => {
    testLink(<ActionLink url='/' />).contains('Link[url="/"]')
  })
})
