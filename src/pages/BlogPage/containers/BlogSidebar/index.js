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
      <div id='blog-sidebar' className='flex flex-column center white f6 f5-l'>
        <div className='center b truncate'>My Bookmarks</div>
        {results.map((bookmarksByType, i) =>
          <Bookmarks key={i} bookmarksByType={bookmarksByType} />
        )}
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
    return [
      <div key='title' className='dib center bb mt4 mb3 pb2 b'>{type}</div>,
      <div key='items' className='flex flex-column'>
        <ul>
          {bookmarks.map((item, i) =>
            <li key={i} className='white mb2'>
              <Link url={item.url}>{item.title}</Link>
            </li>
          )}
        </ul>
      </div>
    ]
  }
}
