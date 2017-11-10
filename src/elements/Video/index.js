import React from 'react'
import PropTypes from 'prop-types'

const videoUrlPrefix = 'https://res.cloudinary.com/spencerkline/video/upload/'

export default class Video extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  }
  render () {
    const { src } = this.props
    return (
      <video autoPlay loop muted playsInline controls preload='auto'>
        <source src={videoUrlPrefix + src + '.webm'} type='video/webm' />
        <source src={videoUrlPrefix + src + '.mp4'} type='video/mp4' />
        <source src={videoUrlPrefix + src + '.ogv'} type='video/ogg' />
      </video>
    )
  }
}
