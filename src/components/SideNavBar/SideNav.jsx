import { useState } from 'react';
// import { Sidebar } from 'primereact/sidebar';
// import { Button } from 'primereact/button';
// import ItemsNav from '../ItemsNav/ItemsNav';
import '../SideNavBar/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
      <div className={`side-nav ${visible ? 'visible' : ''}`}>
        <ul className='nav flex-column px-5 mt-5'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/clients'>
              Clients
            </a>
          </li>
          {/* <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' aria-disabled='true'>
            Disabled
          </a>
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
