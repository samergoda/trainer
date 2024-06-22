

import { useState } from 'react';
import SideNav from './../SideNavBar/SideNav';
import { Outlet } from 'react-router-dom';

function Layout() {
    const [visible, setVisible] = useState(false);

    return (
     <div className='d-flex '>
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
