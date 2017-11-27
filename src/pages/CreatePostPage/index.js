import React from 'react'
import update from 'immutability-helper'

import SidebarTemplate from 'src/templates/SidebarTemplate'
import CreatePostSidebar from './containers/CreatePostSidebar'
import PostDetail from 'src/components/PostDetail'
import { LazyImage } from 'src/elements/LazyImage'

import BlackWhiteTheme from 'src/templates/SidebarTemplate/themes/blackwhite.js'

export default class CreatePostPage extends React.Component {
  state = {
    post: {
      title: 'New Post',
      createdAt: new Date().toString(),
      content: null
    }
  }
  render () {
    const { post } = this.state
    return (
      <SidebarTemplate theme={BlackWhiteTheme} sidebarComponent={<CreatePostSidebar />}>
        <div className='bg-image'>
          <LazyImage src={'blog-bgimage'} className='bg-monument' />
        </div>
        <textarea
          placeholder={'## Put your markdown here'}
          value={post.content}
          onChange={this.handlePostTextChanged} />
        <textarea value={JSON.stringify(post.content)} />
        <div className='bg-white pv4-l ph5-l br2 shadow-3'>
          { post.content && <PostDetail post={post} /> }
        </div>
      </SidebarTemplate>
    )
  }
  handlePostTextChanged = (e) => {
    this.setState(update(this.state, {
      post: {
        content: { $set: e.target.value }
      }
    }))
  }
}
