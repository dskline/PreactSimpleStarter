import React from 'react'

import Link from 'src/elements/Link'
import PropTypes from 'prop-types'

export default class ThisWebsiteContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }
  static defaultProps = {
    title: 'This Website'
  }
  render () {
    return (
      <div id={this.props.id} className='bg-light-gray pv5 ph4 ph6-l'>
        <div className='flex flex-column flex-row-ns flex-inline-ns items-baseline-ns justify-center ph2 mb4'>
          <div>
            <div className='dib nowrap ph3 f3 f2-ns bodoni ttu color-primary b'>{this.props.title}</div>
          </div>
          <div>
            <div className='db nowrap dib-ns pt2 tr tl-ns'>...built from scratch with React</div>
          </div>
        </div>
        <div className='flex flex-column flex-row-ns justify-around ph3 ph0-ns lh-copy f5'>
          <div>
            <p>{'Welcome to my home page! This is where I experiment with new JavaScript frameworks and write blog ' +
            'posts about my experiences and helpful tips working with them. It will also be where I showcase other ' +
            'projects I\'m working on, so check back for those at a later time.'}</p>
            <Link url='/blog' className='f6 link pointer dim ph3 pv2 mb2 dib bg-secondary br1 avenir'>
              <span className='white'>Read the Blog</span>
            </Link>
          </div>
          <div className='w4 h2' />
          <div>
            <p>{'This portfolio is a Progressive Web App, so it\'s able to function offline with Service Workers. ' +
            'Google Lighthouse is used to find areas of improvement in performance over slow internet connections, ' +
            'and blog posts are stored and fetched on a GraphQL backend. All source code is publicly listed on ' +
            'GitHub.'}</p>
            <Link url='https://www.github.com/dskline/portfolio' className='f6 link pointer dim ph3 pv2 mb2 dib bg-secondary br1 avenir'>
              <span className='white'>Source Code</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
