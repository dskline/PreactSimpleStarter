import { h } from 'preact'

import './style.scss'

export default ({ postList }) => {
  return (
    <div id='post_list_container'>
      {postList.map(post =>
        <div class='post_list_item'>
          {`${post.title}`}
        </div>
      )}
    </div>
  )
}
