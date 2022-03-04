import { useEffect } from 'react';

import { NavLink, Link, useParams } from 'react-router-dom';
import messages from '../../messages.json';

const Header = () => {
  const users = [...new Set(messages.map((message) => message.to))];

  const activeClassName = 'nav-link active';
  return (
    <div className='navheader'>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : 'nav-link'
            }
            to='/messages/0'
          >
            Messages
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : 'nav-link'
            }
            to='/contacts'
          >
            Contacts
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : 'nav-link'
            }
            to='/preferences'
          >
            Preferences
          </NavLink>
        </li>

        <li className='ms-auto'>
          <div className='dropdown d-inline-block me-1'>
            <a
              className='btn dropdown-toggle outline-none'
              role='button'
              id='dropdownMenuLink'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              {/* {users[userId]} */}
            </a>

            <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
              {users.map((user, i) => {
                return (
                  <li key={i} style={{ cursor: 'pointer' }}>
                    <Link className='dropdown-item' to={`/messages/${i}/inbox`}>
                      {user}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className='btn btn-primary me-1'>
            <i className='fas fa-home'></i>
          </button>
          <button className='btn btn-primary'>
            <i className='fas fa-envelope'></i>
            New Messages
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
