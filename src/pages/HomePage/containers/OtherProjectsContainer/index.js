import React from 'react'

import { tocChildPropType } from 'src/components/TableOfContents'

export default class OtherProjectsContainer extends React.Component {
  static propTypes = tocChildPropType
  static defaultProps = {
    title: 'Other Projects',
    theme: {}
  }
  render () {
    const {id, title, theme} = this.props
    return (
      <div id={id} className={theme.containerClass}>
        <div className={theme.titleClass}>
          {title}
        </div>
        <div className='dib pv5 f4'>
          {'[ Coming Soon ]'}
        </div>
      </div>
    )
  }
}
