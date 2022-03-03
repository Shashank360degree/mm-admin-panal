import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';
import {NotificationsNone, Logout, AccountCircle, Login} from '@mui/icons-material';
export default function TopBar() {
    return <div className='topbar'>
        <div className='topBarWrapper'>
            <div className='topLeft'>
                <div className='logo'>
                    <Link to={"/dashboard"}>mmportal</Link>
                </div>
            </div>
            <div className='topRight'>
                <div className='topIconsContainer'>
                    <AccountCircle />
                </div>
                <div className='topIconsContainer'>
                    <NotificationsNone />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topIconsContainer'>
                    <Logout />
                </div>
                
                <div className='topIconsContainer'>
                    <Link to={"/login"}><Login /></Link>
                </div>
            </div>
        </div>
    </div>;
}
