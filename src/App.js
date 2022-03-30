import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import { useSelector } from 'react-redux';
function App() {
  const { authData } = useSelector((state) => state.adminAuth);
  return (<Router>
    <div>
      <TopBar />
      <div className='container'>
        {authData && <SideBar />}
        <div className='routePages'>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>);
}

export default App;
