import React from 'react'
import TopBar from '../../components/topbar/Topbar';
import SideBar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './home.css';

function Home() {
  return (
    <>
      <TopBar />
      <div className="home-container">
        <SideBar /> 
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home
