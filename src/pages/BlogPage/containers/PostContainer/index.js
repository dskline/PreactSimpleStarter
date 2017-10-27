import React from 'react'
import PropTypes from 'prop-types'

import infiniteScroll from 'src/data/pagination/infiniteScroll'
import query from './blogPosts.graphql'

import PostSummary from './PostSummary'

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
