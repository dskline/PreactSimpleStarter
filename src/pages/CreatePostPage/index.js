import React from 'react'
import update from 'immutability-helper'

import SidebarTemplate from 'src/templates/SidebarTemplate'
import CreatePostSidebar from './containers/CreatePostSidebar'
import PostDetail from 'src/components/PostDetail'
import { LazyImage } from 'src/elements/LazyImage'

import './style.scss'
import 'src/components/MenuBar/themes/white.scss'

export default class CreatePostPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: {
        title: 'New Post',
        createdAt: new Date().toString(),
        content: null
      }
    }
    this.postTextChanged = this.postTextChanged.bind(this)
  }
  render () {
    return (
      <SidebarTemplate id='create-post-page' className='bg-white-10 pt6' menuClass='bg-white shadow-3'
        sidebarComponent={<CreatePostSidebar />}>
        <div className='bg-image'>
          <LazyImage src={'blog-bgimage'} className='bg-monument' />
        </div>
        <textarea placeholder={'## Put your markdown here'} value={this.state.post.content} onChange={this.postTextChanged} />
        <textarea value={JSON.stringify(this.state.post.content)} />
        <div className='bg-white pv4-l ph5-l br2 shadow-3'>
          { this.state.post.content &&
            <PostDetail post={this.state.post} />
          }
        </div>
      </SidebarTemplate>
    )
  }
  postTextChanged (e) {
    this.setState(update(this.state, {
      post: {
        content: { $set: e.target.value }
      }
    }))
  }
}
