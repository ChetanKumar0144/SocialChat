import React from 'react'
import { MdSearch, MdPerson, MdChat, MdNotifications } from 'react-icons/md';
import './topbar.css';

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">SocialChats</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <MdSearch className='searchIcon' />
                    <input type="text" placeholder='search for friends, post or videos' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <MdPerson />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <MdChat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <MdNotifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img className='topbarImg' src="/assets/person/7.jpg" alt="" />
            </div>
        </div>
    )
}

export default Topbar