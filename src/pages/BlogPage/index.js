import React from 'react'
import PropTypes from 'prop-types'

import SidebarTemplate from 'src/templates/SidebarTemplate'
import BlogSidebar from './containers/BlogSidebar'
import PostContainer from './containers/PostContainer'
import PostDetailContainer from './containers/PostDetailContainer'
import { LazyImage } from 'src/elements/LazyImage'

import BlackWhiteTheme from 'src/templates/SidebarTemplate/themes/blackwhite.js'

export default class BlogPage extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        titleHtml: PropTypes.string
      })
    })
  }
  render () {
    const { params } = this.props.match
    return (
      <SidebarTemplate theme={BlackWhiteTheme} sidebarComponent={<BlogSidebar />}>
        <div className='bg-image'>
          <LazyImage src={'blog-bgimage'} className='bg-monument' />
        </div>
        <div className='bg-white w-100 h2 br2 mb4 shadow-3' />
        { (params && params.titleHtml)
          ? <PostDetailContainer titleHtml={params.titleHtml} />
          : <PostContainer />
        }
      </SidebarTemplate>
    )
  }
}
