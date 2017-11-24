import React from 'react'
import PropTypes from 'prop-types'

export default class OtherProjectsContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }
  static defaultProps = {
    title: 'Other Projects'
  }
  render () {
    return (
      <div id={this.props.id} className='flex flex-column items-center justify-center min-vh-100 pv5 ph4 ph6-l'>
        <div className='dib nowrap ph3 pb3 f2 f1-ns playfair color-primary b'>{this.props.title}</div>
        <div className='dib pv5 f4'>
          {'[ Coming Soon ]'}
        </div>
      </div>
    )
  }
}
