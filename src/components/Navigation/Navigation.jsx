import { NavLink } from 'react-router-dom';

import s from '../Navigation/Navigation.module.css';

const NavMenu = () => {
  return (
    <nav className={s.navigation_block}>
      <NavLink
        end
        className={({ isActive }) =>
          [s.navLink, isActive && s.active].join(' ')
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          [s.navLink, isActive && s.active].join(' ')
        }
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default NavMenu;
