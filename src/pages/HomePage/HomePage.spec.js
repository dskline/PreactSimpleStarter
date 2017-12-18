import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import HomePage from './'
import TableOfContents from 'src/components/TableOfContents'

function tableOfContents ({ bannerInView }) {
  const component = shallow(<HomePage />)
  component.instance().handleBannerInView(bannerInView)
  component.update()
  return component.find(TableOfContents)
}

describe('<HomePage />', () => {
  test('table of contents is not fixed while banner is partially in view', () => {
    expect(tableOfContents({ bannerInView: true }).prop('sidebarFixed')).toBe(false)
  })

  test('table of contents is fixed while banner is not in view', () => {
    expect(tableOfContents({ bannerInView: false }).prop('sidebarFixed')).toBe(true)
  })

  test('is not rendered twice', () => {
    const component = shallow(<HomePage />)
    const spy = sinon.spy(HomePage.prototype, 'render')
    component.instance().handleBannerInView(false)
    component.instance().handleBannerInView(false)
    expect(spy.calledOnce).toBe(true)
  })

  test('each child in table of contents has a default title', () => {
    const component = shallow(<HomePage />)
    component.find('TableOfContents > [id]').forEach((node) => {
      expect(node.type().defaultProps.title).toBeDefined()
    })
  })
})
