import React from 'react'

import ActionLink from 'src/elements/Link/ActionLink'
import PropTypes from 'prop-types'

export default class ThisWebsiteContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    theme: PropTypes.shape({
      containerClass: PropTypes.string,
      titleClass: PropTypes.string
    })
  }
  static defaultProps = {
    title: 'This Website'
  }
  render () {
    const {id, title, theme} = this.props
    return (
      <div id={id} className={theme.containerClass}>
        <div className='flex flex-column flex-row-ns flex-inline-ns items-baseline-ns justify-center ph2 mb4'>
          <div>
            <div className={theme.titleClass}>
              {title}
            </div>
          </div>
          <div>
            <div className='db dib-ns nowrap pt2 pl3 tr tl-ns f5 f4-l'>
              ...built from scratch with React
            </div>
          </div>
        </div>
        <div className='flex flex-column flex-row-ns justify-around ph3 ph0-ns lh-copy'>
          <div>
            <p>{'Welcome to my home page! This is my own personal playground where I experiment with new JavaScript ' +
            'frameworks. Then I write blog posts about my experiences and helpful tips developing with them. My ' +
            'other projects will be showcased here as well, so check back for those at a later time.'}</p>
            <ActionLink url='/blog'>
              The Blog
            </ActionLink>
          </div>
          <div className='w4 w5-l h2' />
          <div>
            <p>{'This portfolio is a Progressive Web App, so it\'s able to function offline with Service Workers. ' +
            'Google Lighthouse analyzes each page to find areas of improvement in performance over slow internet ' +
            'connections. Blog posts are stored and fetched on a GraphQL backend, and all source code is publicly ' +
            'listed on GitHub.'}</p>
            <ActionLink url='https://www.github.com/dskline/portfolio'>
              The Source Code
            </ActionLink>
          </div>
        </div>
      </div>
    )
  }
}
