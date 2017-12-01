import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import MockBlogPost from 'src/utilities/mock/data/MockBlogPost'
import PostDetail from './'

describe('<PostDetail />', () => {
  test('undefined blog post', () => {
    const component = shallow(<PostDetail />)
    expect(component.find('#post-not-found').length).toBe(1)
  })

  test('defined blog post', () => {
    sinon.stub(PostDetail.prototype, 'convertMarkdownToHtml')
    const component = shallow(<PostDetail post={MockBlogPost()} />)
    expect(component.find('#post-content').length).toBe(1)
  })
})
