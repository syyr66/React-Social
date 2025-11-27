import React from 'react'
import "./feed.css";
import Share from '../share/Share';
import Post from '../post/Post';

function Feed() {
  return (
    <div className="feed">
      <div className='feed-wrapper'>
        <Share />
        <div className="post-list">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default Feed
