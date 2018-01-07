import React from 'react'
import { shallow } from 'enzyme'

import BlogPage from './'
import PostContainer from './containers/PostContainer'
import PostDetailContainer from './containers/PostDetailContainer'

describe('<BlogPage />', () => {
  test('show post container if params are not specified', () => {
    const wrapper = shallow(<BlogPage match={{ params: undefined }} />)
    expect(wrapper.find(PostContainer).length).toBe(1)
  })

  test('show post detail if params are specified', () => {
    const wrapper = shallow(<BlogPage match={{ params: { titleHtml: 'welcome' } }} />)
    expect(wrapper.find(PostDetailContainer).length).toBe(1)
  })
})
