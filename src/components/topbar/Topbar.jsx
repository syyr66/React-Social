import React from 'react'
import './topbar.css';
/*mui imports*/
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function TopBar() {
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
              <button className="topbar__category-option topbar__feed">Your feed</button>
              <button className="topbar__category-option topbar__trending topbar__category-focused">Trending</button>
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
