import { useState } from 'react';
import SideNav from './../SideNavBar/SideNav';
import { Outlet, useLocation } from 'react-router-dom';
import './../Layout/style.css';
function Layout() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

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
        onHide={() => setVisible(false)}
        role='region'
      ></SideNav>

      <main className='main-content'>
        <div className='nav-dash d-flex mt-3 justify-content-between'>
          <h2 className='text-dark font-bold'>
            {location.pathname ? handleRoute(location.pathname) : 'Home'}
          </h2>
          <a
            href='/newClient'
            rel='noopener noreferrer'
            className='p-button add-client  text-white font-bold'
          >
            Add New Client
          </a>
        </div>
        <Outlet />

      </main>
    </div>
  );
}

export default Layout;
