import React from 'react'
import PropTypes from 'prop-types'

import SidebarTemplate from 'src/templates/SidebarTemplate'
import BlogSidebar from './containers/BlogSidebar'
import PostContainer from './containers/PostContainer'
import PostDetailContainer from './containers/PostDetailContainer'
import { LazyImage } from 'src/elements/LazyImage'

import './style.scss'
import 'src/components/MenuBar/themes/white.scss'

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
      <SidebarTemplate id='blog-page' className='bg-white-10 pt6' menuClass='bg-white shadow-3'
        sidebarComponent={<BlogSidebar />}>
        <div className='bg-image'>
          <LazyImage src={'blog-bgimage'} className='bg-monument' />
        </div>
        <div className='bg-white w-100 h2 br2 mb4 shadow-3' />
        { (params && params.titleHtml) ? <PostDetailContainer titleHtml={params.titleHtml} /> : <PostContainer /> }
      </SidebarTemplate>
    )
  }
}
