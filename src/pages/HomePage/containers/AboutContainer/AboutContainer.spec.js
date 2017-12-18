import React from 'react'
import { shallow } from 'enzyme'

import AboutContainer from './'
import BulletItem from './BulletItem'

describe('<AboutContainer />', () => {
  test('renders with id', () => {
    expect(shallow(<AboutContainer id='test' />).find('#test').length).toBe(1)
  })
  test('bullet items render without error', () => {
    const component = shallow(<AboutContainer />)
    component.find(BulletItem).forEach((node) => {
      expect(node.shallow().exists()).toBe(true)
    })
  })
})
