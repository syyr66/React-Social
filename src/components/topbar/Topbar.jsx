import React, { useState } from 'react'
import './topbar.css';
/*mui imports*/
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function TopBar() {
  const [topbarCategory, setTopbarCategory] = useState(1);

  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar__left"><a href="#">Social App</a></div>
        <div className="topbar__center">
          <SearchIcon className="icon topbar__search-icon" />
          <input placeholder="what's up?" />
        </div>
        <div className="topbar__right">
          <div className="topbar__toggle-container">
            <div className="topbar__category-toggle">
              <button 
                onClick={() => {setTopbarCategory(0)}} 
                className={
                  "topbar__category-option topbar__feed " + 
                  ( topbarCategory === 0 
                  ? "topbar__category-focused" 
                  : "topbar__category-unfocused" )
                }
              >
                Your feed
              </button>
              
              <button 
                onClick={() => setTopbarCategory(1)} 
                className={
                  "topbar__category-option topbar__trending " + 
                  ( topbarCategory === 1 
                  ? "topbar__category-focused" 
                  : "topbar__category-unfocused" )
                }
              >
                Trending🔥
              </button>
            </div>
          </div>
          <div className="topbar__menu-icons">
            <MessageIcon className="icon topbar__menu-icon topbar__messages" />
            <NotificationsIcon className="icon topbar__menu-icon topbar__bell" />
            <AccountCircleIcon className="icon topbar__menu-icon topbar__profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
