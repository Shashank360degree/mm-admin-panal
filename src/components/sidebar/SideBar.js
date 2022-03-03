import React from 'react';
import './sidebar.css';
import {ViewCarousel, LocalOffer, Balcony, Timeline, AccountTree, AddCircle, SupervisorAccount, Fastfood, RiceBowl, Receipt, MonetizationOn, AssignmentReturn} from '@mui/icons-material';

export default function SideBar() {
    return <div className='sideBar'>
        <div className='sideBarWarapper'>
            <div className='sideBarMenu'>
                <h3 className='sideBarLable'>Home</h3>
                <ul className='sideBarList'>
                    <li className='sideBarListItem active'>
                        <Balcony className='sideBarIcon' />Dashboard
                    </li>
                    <li className='sideBarListItem'>
                        <Timeline className='sideBarIcon' />Reports
                    </li>
                    <li className='sideBarListItem'>
                        <ViewCarousel className='sideBarIcon' />Banners
                    </li>
                    <li className='sideBarListItem'>
                        <LocalOffer className='sideBarIcon' />Coupons
                    </li>
                </ul>
                <h3 className='sideBarLable'>Branch</h3>
                <ul className='sideBarList'>
                    <li className='sideBarListItem'>
                        <AddCircle className='sideBarIcon' />Create Branch
                    </li>
                    <li className='sideBarListItem'>
                        <AccountTree className='sideBarIcon' />All Branches
                    </li>
                </ul>
                <h3 className='sideBarLable'>Accounts</h3>
                <ul className='sideBarList'>
                    <li className='sideBarListItem'>
                        <AddCircle className='sideBarIcon' />Create User
                    </li>
                    <li className='sideBarListItem'>
                        <SupervisorAccount className='sideBarIcon' />Portal Users
                    </li>
                    <li className='sideBarListItem'>
                        <SupervisorAccount className='sideBarIcon' />App Users
                    </li>
                </ul>
                <h3 className='sideBarLable'>Menu</h3>
                <ul className='sideBarList'>
                    <li className='sideBarListItem'>
                        <Fastfood className='sideBarIcon' />Add Item
                    </li>
                    <li className='sideBarListItem'>
                        <RiceBowl className='sideBarIcon' />All Items
                    </li>
                </ul>
                <h3 className='sideBarLable'>Sales</h3>
                <ul className='sideBarList'>
                    <li className='sideBarListItem'>
                        <Receipt className='sideBarIcon' />Orders
                    </li>
                    <li className='sideBarListItem'>
                        <MonetizationOn className='sideBarIcon' />Transactions
                    </li>
                    <li className='sideBarListItem'>
                        <AssignmentReturn className='sideBarIcon' />Refunds
                    </li>
                </ul>
            </div>
        </div>
    </div>;
}
