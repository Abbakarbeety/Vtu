import React from 'react';
import { Link } from 'react-router-dom';
import './Slidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/data-subscription">Data Subscription</Link></li>
        <li><Link to="/airtime-purchase">Airtime Purchase</Link></li>
        <li><Link to="/cable-subscription">Cable Subscription</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
