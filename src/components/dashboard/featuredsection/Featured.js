import React from 'react';
import './featured.css';
import {CurrencyRupee, Numbers} from '@mui/icons-material';

export default function Featured() {
    return <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Total Spent</span>
            <div className='featuredRevenueContainer'>
                <CurrencyRupee fontSize='small' /><span className='amount'>200000</span>
            </div>
            <div className='since'>Since 365 days</div>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Total Profit</span>
            <div className='featuredRevenueContainer'>
                <CurrencyRupee fontSize='small' /><span className='amount'>100000</span>
            </div>
            <div className='since'>Since 365 days</div>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Completed Orders</span>
            <div className='featuredRevenueContainer'>
                <Numbers fontSize='small' /><span className='amount'>2000000</span>
            </div>
            <div className='since'>Since 365 days</div>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Ongoing Orders</span>
            <div className='featuredRevenueContainer'>
                <Numbers fontSize='small' /><span className='amount'>20</span>
            </div>
            <div className='since'>Today Orders</div>
        </div>
    </div>;
}
