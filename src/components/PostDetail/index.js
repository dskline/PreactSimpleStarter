import { h } from 'preact'

export default ({ post }) => {
  return (
    <div>
      <h1>{`${post.title}`}</h1>
      <i>{}</i>
    </div>
  )
}
