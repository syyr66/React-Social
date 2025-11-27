import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import NotesIcon from '@mui/icons-material/Notes';
import GroupIcon from '@mui/icons-material/Group';
import HelpIcon from '@mui/icons-material/Help';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import './sidebar.css';

function SideBar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__categories">
        <li className="sidebar__category">
          <PlayCircleIcon />
          <div className="sidebar__cat-name">Videos</div>
        </li>
        <li className="sidebar__category">
          <CalendarMonthIcon className="sidebar__cat-icon" />
          <div className="sidebar__cat-name">Events</div>
        </li>
        <li className="sidebar__category">
          <ArticleIcon className="sidebar__cat-icon" />
          <div className="sidebar__cat-name">News</div>
        </li>
        <li className="sidebar__category">
          <NotesIcon className="sidebar__cat-icon" />
          <div className="sidebar__cat-name">Blog</div>
        </li>
        <li className="sidebar__category">
          <GroupIcon className="sidebar__cat-icon" />
          <div className="sidebar__cat-name">Groups</div>
        </li>
        <li className="sidebar__category">
          <HelpIcon className="sidebar__cat-icon" />
          <div className="sidebar__cat-name">Questions</div>
        </li>
        <li className="sidebar__category">
          <BookmarksIcon className="sidebar__cat-icon" />
          <div className="sidebar__cat-name">Saved posts</div>
        </li>
      </ul>
      <button className="sidebar__show-more-btn">Show more...</button>
      <hr className="hr-line" />
      <div className="sidebar__following-container">
        <h2>Following</h2>
        <ul className="sidebar__following-list">
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
          <li>
            <img className="profile-image" src="/src/assets/pfps/john-doe.png" alt="john-doe" />
            <span>John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
