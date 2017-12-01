import React from 'react'
import { mount } from 'enzyme'

import TableOfContents from './'
import sinon from 'sinon'

describe('<TableOfContents />', () => {
  function mountComponent () {
    return mount(
      <TableOfContents>
        <div id='one' title='Test Title 1' />
        <div id='two' title='Test Title 2' />
      </TableOfContents>
    )
  }

  test('children titles are added to the sidebar', () => {
    const component = mountComponent()
    expect(component.find('.toc-sidebar-item').first().html()).toContain('Test Title 1')
    expect(component.find('.toc-sidebar-item').last().html()).toContain('Test Title 2')
  })

  test('first child is active initially', () => {
    const component = mountComponent()
    expect(component.state('visibleNode')).toBe(0)
    expect(component.find('.toc-sidebar-item').first().html()).toContain('active')
    expect(component.find('.toc-sidebar-item').last().html()).not.toContain('active')
  })

  test('switches active class when another child is visible', () => {
    const component = mountComponent()
    component.instance().handleVisibleNode(1, true)
    expect(component.state('visibleNode')).toBe(1)
    expect(component.find('.toc-sidebar-item').first().html()).not.toContain('active')
    expect(component.find('.toc-sidebar-item').last().html()).toContain('active')
  })

  test('nothing changes when child receives an isVisible value of false', () => {
    const component = mountComponent()
    component.instance().handleVisibleNode(0, false)
    expect(component.state('visibleNode')).toBe(0)
  })

  test('doesn\'t reload multiple times', () => {
    const component = mountComponent()
    const spy = sinon.spy(TableOfContents.prototype, 'render')
    component.instance().handleVisibleNode(1, true)
    expect(spy.calledOnce).toBe(true)
    component.instance().handleVisibleNode(1, true)
    expect(spy.calledOnce).toBe(true)
  })

  test('fixed class is added to sidebar', () => {
    const component = mount(
      <TableOfContents sidebarFixed>
        <div id='one' title='Test Title 1' />
        <div id='one' title='Test Title 1' />
      </TableOfContents>
    )
    expect(component.find('#toc-sidebar.fixed').length).toBe(1)
  })
})
