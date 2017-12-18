import React from 'react'
import { shallow } from 'enzyme'

import HeroTemplate from './'
import MenuBar from 'src/components/MenuBar'
import { primary, transparent } from 'src/components/MenuBar/themes'

function menuBar ({ topOfPageVisible }) {
  const component = shallow(<HeroTemplate />)
  component.instance().handleTopOfPageVisibility(topOfPageVisible)
  component.update()
  return component.find(MenuBar)
}

describe('<HeroTemplate />', () => {
  test('MenuBar theme is transparent at the top of the page', () => {
    expect(menuBar({ topOfPageVisible: true }).prop('theme')).toBe(transparent)
  })

  test('MenuBar theme is primary when not at the top of the page', () => {
    expect(menuBar({ topOfPageVisible: false }).prop('theme')).toBe(primary)
  })
})
