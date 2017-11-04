import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'react-apollo'
import query from './postByTitleHtml.graphql'
import { LazyImage, Dimensions } from 'src/elements/LazyImage'
import Link from 'src/elements/Link'

import './style.scss'

const dateFormat = {
  'weekday': 'long',
  'year': 'numeric',
  'month': 'long',
  'day': 'numeric'
}

@graphql(query, {
  options: ({titleHtml}) => ({variables: {titleHtml}})
})
export default class PostDetailContainer extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      posts: PropTypes.array
    })
  }

  render () {
    const {loading, posts} = this.props.data
    if (loading) {
      return null
    }
    return (
      <div className='bg-white pv4-l ph5-l br2 shadow-3'>
        <PostDetail post={posts[0]} />
      </div>
    )
  }
}

class PostDetail extends React.Component {
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
    const datePosted = new Date(post.createdAt)
    return (
      <div>
        <Link url='/blog'>
          <LazyImage src={post.titleImageUrl} className='br2 mb4' dimension={Dimensions.wide} />
        </Link>
        <div className='pa4 pa0-l'>
          <div className='mb1 f3 b lh-title'>{ post.title }</div>
          <div className='pv2 i'>
            { datePosted.toLocaleDateString('en-us', dateFormat) }
          </div>
          <div id='post-content' className='mt3 pt3 bt lh-copy'
            dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
      </div>
    )
  }
}
