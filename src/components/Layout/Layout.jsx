

import { useState } from 'react';
import SideNav from './../SideNavBar/SideNav';
import { Outlet } from 'react-router-dom';
import './../Layout/style.css'
function Layout() {
    const [visible, setVisible] = useState(false);

    return (
     <div className='d-flex nav-wrapper'>
        <SideNav
      id='sidebar'
      visible={visible}
      onHide={() => setVisible(false)}
      role='region'
    ></SideNav>
    <main className='container'>

    <Outlet />
    </main>
     </div>
    )
}

export default Layout
