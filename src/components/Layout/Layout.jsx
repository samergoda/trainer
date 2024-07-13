import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideNav from './../SideNavBar/SideNav';
import './../Layout/style.css';
import {
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';


function Layout() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setVisible(!visible);
  }
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  function handleRoute(path) {
    if (path === '/') {
      return 'Home';
    }

    let formattedPath = path
      .replace('/', '')
      .replace(/([A-Z])/g, ' $1')
      .trim();

    formattedPath = formattedPath
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return formattedPath;
  }

  return (
    <div className='d-flex nav-wrapper'>
      <SideNav
        id='sidebar'
        visible={visible}
        onClickLogout={handleLogout}
        onHide={() => setVisible(false)}
        role='region'
      />

      <main className='main-content'>
        <div className='nav-dash d-flex mt-3 justify-content-between'>
          <h2 className='text-dark font-bold'>
            {location.pathname ? handleRoute(location.pathname) : 'Home'}
          </h2>
          <div className='d-flex gap-4'>
            <a
              href='/newClient'
              rel='noopener noreferrer'
              className='p-button add-client  text-white font-bold d-none d-sm-block'
            >
              Add New Client
            </a>
            <button onClick={handleLogout} className='p-button add-client  text-white font-bold d-none d-sm-block border-rad rounded-3'
            >Logout</button>

          </div>
          <button className='toggle-button' onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>

        </div>

        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
