import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Featured from './featuredsection/Featured';
import MonthSalesChart from './monthsaleschart/MonthSalesChart';

export default function Dashboard() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.adminAuth);
  useEffect(() => {
    if (userData) {
      navigate('/login');
    }
  })
  return <div>
      <Featured />
      <MonthSalesChart />
  </div>;
}
