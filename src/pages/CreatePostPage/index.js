import React, {createElement} from 'react'
import update from 'immutability-helper'
import marksy from 'marksy'

import SidebarTemplate from 'src/templates/SidebarTemplate'
import CreatePostSidebar from './containers/CreatePostSidebar'
import PostDetail from 'src/components/PostDetail'
import { LazyImage } from 'src/elements/LazyImage'
import Video from 'src/elements/Video'

import './style.scss'
import 'src/components/MenuBar/themes/white.scss'

export default class CreatePostPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      markdown: '',
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
        <textarea placeholder={'## Put your markdown here'} value={this.state.markdown} onChange={this.postTextChanged} />
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
      markdown: { $set: e.target.value },
      post: {
        content: { $set: this.convertMarkdownToHtml(e.target.value) }
      }
    }))
  }

  convertMarkdownToHtml (markdown) {
    const compiled = marksy({
      createElement,
      elements: {
        img (props) {
          if (props.alt.indexOf('video') !== -1) {
            return <Video src={props.src} />
          }
          return <LazyImage {...props} />
        }
      }
    })(markdown)
    return compiled.tree
  }
}
