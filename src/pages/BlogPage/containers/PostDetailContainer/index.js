import React from 'react'
import PropTypes from 'prop-types'

import PostDetail from 'src/components/PostDetail'
import { graphql } from 'react-apollo'
import query from './postByTitleHtml.graphql'

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
