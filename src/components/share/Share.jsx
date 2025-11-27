import React from 'react'
import "./share.css";
import { PermMedia } from '@mui/icons-material';
import TagIcon from '@mui/icons-material/Tag';
import LocationPinIcon from '@mui/icons-material/LocationPin';

function Share() {
  return (
    <div className='share'>
      <div className="share__wrapper">
        <div className="share__top">
          <img 
            className="share__profile-image profile-image"
            src="/src/assets/pfps/thumbnail.png" 
            alt="profile-image" 
          />
          <textarea 
            placeholder="What's in your mind?"
            spellcheck="false"
            className="share__textarea" />
        </div>
        <hr className="hr-line share__hr-line" />
        <div className="share__bottom">
          <div className="share__options">
            <div className="share__option">
              <PermMedia className='share__icon icon__photo-or-video' />
              <span className="share__option-text">Photo or video</span>
            </div>
            <div className="share__option">
              <TagIcon className='share__icon icon__hashtags' />
              <span className="share__option-text">Hashtags</span>
            </div>
            <div className="share__option">
              <LocationPinIcon className='share__icon icon__location' />
              <span className="share__option-text">Location</span>
            </div>
          </div>
          <button className="share__share-btn">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
