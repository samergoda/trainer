import { useState } from 'react';
// import { Sidebar } from 'primereact/sidebar';
// import { Button } from 'primereact/button';
// import ItemsNav from '../ItemsNav/ItemsNav';
import '../SideNavBar/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHouse,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function SideNav() {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  const closeSidebar = () => {
    setVisible(false);
  };

  return (
    <>
      <div className='text-end'>
        <button className='toggle-button' onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className={`side-nav  ${visible ? 'visible' : ''}`}>
        <div className='logo'>
          <h3>JooTeam</h3>
        </div>
        <ul className='nav flex-column  mt-3'>
          <li className='nav-item'>
            <NavLink
              className='py-2 px-3 d-flex gap-2 '
              aria-current='page'
              to='/'
            >
              <span className=''>
                <FontAwesomeIcon icon={faHouse} />
              </span>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='py-2 px-3  d-flex gap-2' to='/clients'>
              <span className=''>
                <FontAwesomeIcon icon={faUsers} />
              </span>
              Clients
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='py-2 px-3 d-flex gap-2' to='/newClient'>
              <span className=''>
                <FontAwesomeIcon icon={faUser} />
              </span>
              Add User
            </NavLink>
          </li>
          {/*
        <li className='nav-item'>
          <NavLink className='py-2 px-3 disabled' aria-disabled='true'>
            Disabled
          </NavLink>
        </li> */}
        </ul>
      </div>
      {/* <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
        <div>
          <ItemsNav />
        </div>
      </Sidebar>
      <Button
        className='h-100 side-nav-btn'
        icon='pi pi-arrow-right'
        onClick={() => setVisible(true)}
      /> */}
      {visible && <div className='layout-overlay' onClick={closeSidebar}></div>}
    </>
  );
}
