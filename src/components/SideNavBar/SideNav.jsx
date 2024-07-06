import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faUsers,
  faUsersLine
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import '../SideNavBar/style.css';

export default function SideNav({ visible, onHide }) {
  return (
    <>
      <div className={`side-nav ${visible ? 'visible' : ''}`}>
        <div className='logo'>
          <h3>TeamJoo</h3>
        </div>
        <ul className='nav flex-column mt-3'>
          <li className='nav-item'>
            <NavLink
              className='py-2 px-3 d-flex gap-2'
              aria-current='page'
              to='/'
            >
              <span>
                <FontAwesomeIcon icon={faHouse} />
              </span>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='py-2 px-3 d-flex gap-2' to='/clients'>
              <span>
                <FontAwesomeIcon icon={faUsers} />
              </span>
              Clients
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='py-2 px-3 d-flex gap-2' to='/newClient'>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              Add User
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='py-2 px-3 d-flex gap-2' to='/active-clients'>
              <span>
                <FontAwesomeIcon icon={faUsersLine} />
              </span>
              Active Clients
            </NavLink>
          </li>
        </ul>
      </div>
      {visible && <div className='layout-overlay' onClick={onHide}></div>}
    </>
  );
}
