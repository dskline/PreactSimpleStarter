import React from 'react'
import { shallow } from 'enzyme/build/index'

import ThisWebsiteContainer from './'

describe('<ThisWebsiteContainer />', () => {
  test('renders with id', () => {
    expect(shallow(<ThisWebsiteContainer id='test' />).find('#test').length).toBe(1)
  })
})
