import { NavLink, Link } from 'react-router-dom';

const activeClassName = 'nav-link active';

const Header = () => {
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
            ></a>

            <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
              <li>
                <a className='dropdown-item'></a>
              </li>
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
