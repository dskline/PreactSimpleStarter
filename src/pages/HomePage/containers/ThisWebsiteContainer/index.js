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
      <div id={this.props.id} className='flex flex-column items-center justify-center min-vh-100 bg-light-gray pv5 ph4 ph6-l'>
        <div className='flex flex-column flex-row-ns flex-inline-ns items-baseline-ns justify-center ph2 mb4'>
          <div>
            <div className='dib nowrap ph3 pb3 f2 f1-ns playfair color-primary b'>{this.props.title}</div>
          </div>
          <div>
            <div className='db dib-ns nowrap pt2 tr tl-ns f5 f4-l'>...built from scratch with React</div>
          </div>
        </div>
        <div className='flex flex-column flex-row-ns justify-around ph3 ph0-ns lh-copy'>
          <div>
            <p>{'Welcome to my home page! This is my own personal playground where I experiment with new JavaScript ' +
            'frameworks. Then I write blog posts about my experiences and helpful tips developing with them. My ' +
            'other projects will be showcased here as well, so check back for those at a later time.'}</p>
            <Link url='/blog' className='f6 link pointer dim ph3 pv2 mb2 dib bg-secondary br1 avenir'>
              <span className='white'>The Blog</span>
            </Link>
          </div>
          <div className='w5 h2' />
          <div>
            <p>{'This portfolio is a Progressive Web App, so it\'s able to function offline with Service Workers. ' +
            'Google Lighthouse analyzes each page to find areas of improvement in performance over slow internet ' +
            'connections. Blog posts are stored and fetched on a GraphQL backend, and all source code is publicly ' +
            'listed on GitHub.'}</p>
            <Link url='https://www.github.com/dskline/portfolio' className='f6 link pointer dim ph3 pv2 mb2 dib bg-secondary br1 avenir'>
              <span className='white'>The Source Code</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
