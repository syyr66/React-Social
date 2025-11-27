import React from 'react'
import "./feed.css";
import Share from '../share/Share';
import Post from '../post/Post';
import {Users, Posts} from '../../userData';

function Feed() {
  return (
    <div className="feed">
      <div className='feed__wrapper'>
        <Share />
        <div className="post-list">
          {Posts.map(post => (
            <Post 
              key={post.id} 
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feed
