import React from 'react';
import Featured from './featuredsection/Featured';
import MonthSalesChart from './monthsaleschart/MonthSalesChart';

export default function Dashboard() {
  return <div>
      <Featured />
      <MonthSalesChart />
  </div>;
}
