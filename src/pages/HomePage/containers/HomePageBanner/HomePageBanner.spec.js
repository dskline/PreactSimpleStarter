import React from 'react'
import { shallow } from 'enzyme'

import HomePageBanner from './'

const testOrientation = (orientation) => {
  const component = shallow(<HomePageBanner />)
  component.setState({ orientation: orientation })
  expect(component.find('LazyImage').prop('src').includes('hero_' + orientation)).toBe(true)
}

describe('<HomePageBanner />', () => {
  test('portrait orientation', () => {
    testOrientation('portrait')
  })

  test('landscape orientation', () => {
    testOrientation('landscape')
  })
})
