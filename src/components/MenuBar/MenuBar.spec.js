import React from 'react'
import { shallow } from 'enzyme'

import MenuBar from './'
import { blackwhite } from './themes'

describe('MenuBar', () => {
  test('initially is not expanded', () => {
    const component = shallow(<MenuBar theme={blackwhite} />)
    expect(component.state('isExpanded')).toBe(false)
  })

  test('clicking hamburger overlay expands the menu', () => {
    const component = shallow(<MenuBar theme={blackwhite} />)
    component.find('#hamburger-overlay').simulate('change', { target: { checked: true } })
    expect(component.state('isExpanded')).toBe(true)
  })
})
