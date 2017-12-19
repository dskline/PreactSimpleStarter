import React from 'react'

import { tocChildPropType } from 'src/components/TableOfContents'
import ActionLink from 'src/elements/Link/ActionLink'

export default class ThisWebsiteContainer extends React.Component {
  static propTypes = tocChildPropType
  static defaultProps = {
    title: 'This Website',
    theme: {}
  }
  render () {
    const {id, title, theme} = this.props
    return (
      <div id={id} className={theme.containerClass}>
        <div className='flex flex-column flex-row-ns flex-inline-ns items-baseline-ns justify-center ph2 mb5'>
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
        <div className='flex flex-column flex-row-ns justify-around lh-copy'>
          <div className='w-40-ns'>
            <p>
              { 'Welcome to my home page! This is my own personal playground where I experiment with JavaScript ' +
              'frameworks, and then blog about my experiences and hopefully provide some helpful tips developing ' +
              'with them.' }
            </p>
            <ActionLink url='/blog'>
              The Blog
            </ActionLink>
          </div>
          <div className='dn-ns h2' />
          <div className='w-40-ns'>
            <p>
              { 'This website is a "Progressive Web App", or PWA. Google Lighthouse is used to analyze each page and ' +
              'find areas of improvement over slower internet connections. Blog posts are stored and fetched on a ' +
              'GraphQL backend, and all source code is publicly listed on GitHub.' }
            </p>
            <ActionLink url='https://www.github.com/dskline/portfolio'>
              The Source Code
            </ActionLink>
          </div>
        </div>
      </div>
    )
  }
}
