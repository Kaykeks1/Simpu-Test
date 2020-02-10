import React from 'react';
// import logo from './logo.svg';
import 'font-awesome/css/font-awesome.css';
import Conversations from './components/Conversations'
import logo from './Assets/images/New Icons/logo.png'
import analytics from './Assets/images/New Icons/analytics.png'
import happy from './Assets/images/New Icons/happy.png'
import schedule from './Assets/images/New Icons/schedule.png'
import comment from './Assets/images/New Icons/comment.png'

import './App.css';

function App() {
  return (
    <div className="simpu-app">
      <div className="app-header">
        <div className="logo-img">
          <img src={logo} alt="" />
        </div>
        <div className="acc-info">
          <div className="acc-initials">S</div>
          <div>Organization</div>
          <i className="fa fa-angle-down" />
        </div>
      </div>
      <div className="app-container">
        <div className="side-bar">
          <img src={analytics} alt="" />
          <img src={happy} alt="" />
          <img src={schedule} alt="" />
          <img src={comment} alt="" />
        </div>
        <Conversations />
      </div>
    </div>
  );
}

export default App;
