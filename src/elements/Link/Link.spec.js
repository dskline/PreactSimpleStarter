import React from 'react'
import { shallow } from 'enzyme'

import Link from './'
import ActionLink from './ActionLink'

describe('<Link />', () => {
  test('internal url returns an NavLink', () => {
    const component = shallow(<Link url='/' />)
    expect(component.find('NavLink[to="/"]').length).toBe(1)
  })

  test('external url returns a normal anchor tag', () => {
    const component = shallow(<Link url='https://www.google.com' />)
    expect(component.find('a[href="https://www.google.com"]').length).toBe(1)
  })
})

describe('<ActionLink />', () => {
  test('passes props to Link', () => {
    const component = shallow(<ActionLink url='/' />)
    expect(component.find('Link[url="/"]').length).toBe(1)
  })
})
