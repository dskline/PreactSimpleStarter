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
      <video autoPlay loop preload='auto'>
        <source src={videoUrlPrefix + src + '_webm.webm'} type='video/webm' />
        <source src={videoUrlPrefix + src + '_mp4.mp4'} type='video/mp4' />
      </video>
    )
  }
}
