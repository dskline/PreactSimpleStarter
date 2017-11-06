import React from 'react'
import PropTypes from 'prop-types'

import { LazyImage, Dimensions } from 'src/elements/LazyImage'
import Link from 'src/elements/Link'

import './style.scss'

const dateFormat = {
  'weekday': 'long',
  'year': 'numeric',
  'month': 'long',
  'day': 'numeric'
}

export default class PostDetail extends React.Component {
  static propTypes = {
    post: PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      titleImageUrl: PropTypes.string
    })
  }
  render () {
    const { post } = this.props
    if (post === undefined) {
      return <div>Post not found</div>
    }
    const content = typeof post.content === 'string'
      ? <div id='post-content' className='mt3 pt3 bt lh-copy' dangerouslySetInnerHTML={{__html: post.content}} />
      : <div id='post-content' className='mt3 pt3 bt lh-copy'>{ post.content }</div>
    return (
      <div>
        {post.titleImageUrl &&
          <Link url='/blog'>
            <LazyImage src={post.titleImageUrl} className='br2 mb4' dimension={Dimensions.wide} />
          </Link>
        }
        <div className='pa4 pa0-l'>
          <div className='mb1 f3 b lh-title'>{ post.title }</div>
          <div className='pv2 i'>
            { new Date(post.createdAt).toLocaleDateString('en-us', dateFormat) }
          </div>
          { content }
        </div>
      </div>
    )
  }
}
