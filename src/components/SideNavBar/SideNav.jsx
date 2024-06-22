import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import ItemsNav from '../ItemsNav/ItemsNav';
import '../SideNavBar/style.css'
export default function SideNav() {
  const [visible, setVisible] = useState(false);

  return (
    <div className=' flex justify-content-center'>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
        <div>
          <ItemsNav />
        </div>
      </Sidebar>
      <Button
        className='h-100 side-nav-btn'
        icon='pi pi-arrow-right'
        onClick={() => setVisible(true)}
      />
    </div>
  );
}
