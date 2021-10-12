import React, {useState} from 'react'
import { BarsOutlined, CloseCircleOutlined } from '@ant-design/icons';

import {Link} from 'react-router-dom';
import {NavBarData} from './NavBarData';

import './NavBar.css';

function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(old => !old);

  return (
    <>
      <div className="navbar">
          <Link to="#" className="menu-bars">
          <BarsOutlined onClick={showSideBar}/>
          </Link>
      </div>
      <nav className={ sideBar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <CloseCircleOutlined onClick={showSideBar}/>
            </Link>
          </li>
          <div className="nav-section">
            {NavBarData.map(({title, path, icon, className}) => {
              return (<li 
                className={className}
                onClick={() => setSideBar(false)}
              >
                <Link to={path}>
                  {icon} <span className="nav-title">{title}</span>
                </Link>
              </li>)
            })}
          </div>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
