import TopBar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import './App.css'
/* import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; */
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/Login';
function App() {
  return (<Router>
    <div>
      <TopBar />
      <div className='container'>
        {/* <SideBar /> */}


        <div className='routePages'>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>

      </div>
    </div>
  </Router>);
}

export default App;
