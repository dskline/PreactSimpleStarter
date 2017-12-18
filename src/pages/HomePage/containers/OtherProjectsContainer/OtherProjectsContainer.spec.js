import React from 'react'
import { shallow } from 'enzyme'

import OtherProjectsContainer from './'

describe('<OtherProjectsContainer />', () => {
  test('renders with id', () => {
    expect(shallow(<OtherProjectsContainer id='test' />).find('#test').length).toBe(1)
  })
})
