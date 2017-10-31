import React from 'react'
import { graphql } from 'react-apollo'
import query from './blogSidebar.graphql'
import PropTypes from 'prop-types'

import Link from 'src/elements/Link'

@graphql(query)
export default class BlogSidebar extends React.Component {
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
      <div id='blog-sidebar' className='w-100 white'>
        <div className='center tc pa3 b truncate'>My Bookmarks</div>
        <div className='flex flex-wrap justify-around f6 f5-l'>
          {results.map((bookmarksByType, i) =>
            <Bookmarks key={i} bookmarksByType={bookmarksByType} />
          )}
        </div>
      </div>
    )
  }
}
class Bookmarks extends React.Component {
  static propTypes = {
    bookmarksByType: PropTypes.shape({
      type: PropTypes.string,
      bookmarks: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string
      }))
    })
  }
  render () {
    const {type, bookmarks} = this.props.bookmarksByType
    return (
      <div className='flex flex-column mw-100 mh3'>
        <div className='center dib bb mt3 mb1 pb2 b'>{type}</div>
        <ul>
          {bookmarks.map((item, i) =>
            <li key={i} className='mb2 nowrap'>
              <Link url={item.url}>{item.title}</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
