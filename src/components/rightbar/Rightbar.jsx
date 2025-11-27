import React from 'react'
import "./rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        <div className="birthday-container">
          <img src="/src/assets/gift.png" alt="gift" />
          <span className="birthday-text">
            {" "}
            <b>Anne Smith</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img 
          className="rightbar__ad"
          src="/src/assets/advertising.png" 
          alt="ad"
        />
        <h3 className="rightbar__title">Online now</h3>
        <ul className="rightbar__friendlist">
          <li className="rightbar__friend">
            <div className="rightbar__profile-image-container">
              <img className="profile-image" src="/src/assets/pfps/anne-smith.png" alt="anne-smith" />
              <span className="rightbar__online"></span>
            </div>
            <span className='rightbar__username'>Anne Smith</span>
          </li>
          <li className="rightbar__friend">
            <div className="rightbar__profile-image-container">
              <img className="profile-image" src="/src/assets/pfps/dave-miller.png" alt="dave-miller" />
              <span className="rightbar__online"></span>
            </div>
            <span className='rightbar__username'>Dave Miller</span>
          </li>
          <li className="rightbar__friend">
            <div className="rightbar__profile-image-container">
              <img className="profile-image" src="/src/assets/pfps/james-brown.png" alt="james-brown" />
              <span className="rightbar__online"></span>
            </div>
            <span className='rightbar__username'>James Brown</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
