import React from 'react'
import { shallow } from 'enzyme'

import Video from './'

describe('<Video />', () => {
  test('creates a video tag with multiple sources', () => {
    const component = shallow(<Video src='test' />)
    expect(component.find('video').length).toBe(1)
    expect(component.find('source').length).toBeGreaterThan(1)
  })
})
