import React from 'react'

import ContactContainer from './'
import { shallow } from 'enzyme'

describe('<ContactContainer />', () => {
  test('renders with id', () => {
    expect(shallow(<ContactContainer id='test' />).find('#test').length).toBe(1)
  })
})
