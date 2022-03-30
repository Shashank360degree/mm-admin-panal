import React from 'react';
import './topbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { NotificationsNone, Logout, AccountCircle, Login } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../redux/actionTypes';
export default function TopBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {authData}  = useSelector(state => state.adminAuth);
    console.log(authData);

    const handleLogout = () => {
        dispatch({type: LOGOUT});
        navigate('/login');
    }

    return (<div className='topbar'>
        <div className='topBarWrapper'>
            <div className='topLeft'>
                <div className='logo'>
                    <Link to={"/dashboard"}>mmportal</Link>
                </div>
            </div>

            { authData ? (
                <div className='topRight'>
                    <div className='topIconsContainer'>
                        <AccountCircle />
                    </div>
                    <div className='topIconsContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topIconsContainer' onClick={handleLogout}>
                        <Logout />
                    </div>
                </div>
            ) : (
                <div className='topRight'>
                    <div className='topIconsContainer'>
                        <Link to={"/login"}><Login /></Link>
                    </div>
                </div>
            )}

        </div>
    </div>);
}
