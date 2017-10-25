import React from 'react'

import SidebarTemplate from 'src/templates/SidebarTemplate'
import BlogSidebar from './containers/BlogSidebar'
import PostContainer from './containers/PostContainer'

import 'src/components/MenuBar/themes/white.scss'
import './style.scss'

export default class BlogPage extends React.Component {
  render () {
    return (
      <SidebarTemplate id='blog-page' class='bg-white-10' menuClass='bg-white shadow-3'
        sidebarComponent={<BlogSidebar />}>
        <div className='bg-white-80 w-100 h2 br2 mb4' />
        <PostContainer />
      </SidebarTemplate>
    )
  }
}
