import React from 'react'
import { mount } from 'enzyme'

import AsyncElement from './'

const TestComponent = () => {
  return <div />
}

describe('AsyncElement', () => {
  test('component is not loaded until it should mount', () => {
    const Wrapper = AsyncElement(() => Promise.resolve(TestComponent))
    const component = mount(<Wrapper />)
    expect(component.find('div').length).toBe(0)
  })
})
