import React from 'react'
import PropTypes from 'prop-types'

export default class OtherProjectsContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    theme: PropTypes.shape({
      containerClass: PropTypes.string,
      titleClass: PropTypes.string
    })
  }
  static defaultProps = {
    title: 'Other Projects'
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
