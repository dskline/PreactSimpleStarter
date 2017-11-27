import React from 'react'
import PropTypes from 'prop-types'

import Link from 'src/elements/Link'
import { LazyImage, Dimensions } from 'src/elements/LazyImage'
import { timeSince } from 'src/utilities/DateUtils'

import './style.scss'

export default class PostSummary extends React.Component {
  static propTypes = {
    post: PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      titleHtml: PropTypes.string.isRequired,
      titleImageUrl: PropTypes.string
    })
  }
  render () {
    const { post } = this.props
    return (
      <Link url={'/blog/' + post.titleHtml} className='w-100'>
        <div className='post-summary-container bg-white flex flex-column-reverse flex-column-ns mb3 mb4-ns br2 shadow-3'>
          <div className='blog-header pa3 pb4'>
            <div className='f6 mb1'>
              { timeSince(new Date(post.createdAt)) }
            </div>
            <div className='f4 f3-l b'>
              { post.title }
            </div>
          </div>
          <div className='post-summary-desc inline-flex ph3-ns pb3-ns'>
            <div className='post-summary-image dib w-100 w-30-ns'>
              <LazyImage
                src={post.titleImageUrl}
                dimension={Dimensions.wide}
                className='slide-in' />
            </div>
            <div className='dn dib-ns h3-m w-70 pl3 f6 overflow-y-hidden lh-copy'>
              {post.description}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
