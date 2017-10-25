import React from 'react'
import { shallow } from 'enzyme'

import MenuBar from './'

describe('MenuBar', () => {
  test('initially is not expanded', () => {
    const component = shallow(<MenuBar />)
    expect(component.state('isExpanded')).toBe(false)
  })

  test('clicking hamburger overlay expands the menu', () => {
    const component = shallow(<MenuBar />)
    component.find('#hamburger-overlay').simulate('change', { target: { checked: true } })
    expect(component.state('isExpanded')).toBe(true)
  })
})
