import React from 'react'
import TopBar from '../../components/topbar/Topbar';
import SideBar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar /> 
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home
