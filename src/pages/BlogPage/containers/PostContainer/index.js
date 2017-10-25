import React from 'react'
import PropTypes from 'prop-types'

import LazyImage from 'src/elements/LazyImage'
import Link from 'src/elements/Link'

import { timeSince } from 'src/utilities/DateUtils'
import infiniteScroll from 'src/data/pagination/infiniteScroll'
import query from './blogPosts.graphql'
import './style.scss'

@infiniteScroll(query, 10)
export default class PostContainer extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      results: PropTypes.array
    })
  }
  render () {
    const {loading, results} = this.props.data
    if (loading || !results) {
      return null
    }
    return (
      <div id='blog-container' className='flex flex-wrap justify-between'>
        {results.map((post, i) =>
          <PostSummary key={i} post={post} />
        )}
      </div>
    )
  }
}

class PostSummary extends React.Component {
  static propTypes = {
    post: PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      titleHtml: PropTypes.string.isRequired,
      titleImageUrl: PropTypes.string
    })
  }
  render () {
    const {post} = this.props
    return (
      <Link url={'/blog/' + post.titleHtml}>
        <div className='post-summary-container bg-white flex flex-column-reverse flex-column-ns w-100 mb3 mb4-ns br2 shadow-3'>
          <div className='blog-header pa3 pb4'>
            <div className='f6 mb1'>{timeSince(new Date(post.createdAt))}</div>
            <div className='f4 f3-l b'>{post.title}</div>
          </div>
          <div className='post-summary-desc inline-flex ph3-ns pb3-ns'>
            <div className='post-summary-image dib w-100 w-30-ns'>
              <LazyImage src={post.titleImageUrl} dimension={'16x9'} className='overflow-hidden' />
            </div>
            <div className='dn dib-ns h3-m w-70 pl3 f6 overflow-y-hidden lh-copy'>
              {post.content}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
