import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants/navLinks';

const DrawerNav = () => {
  return (
  <nav className='drawer-nav' aria-label='main'>
      <ul className='drawer-nav_list | flex flex-col gap-4 h-full'>
        {navLinks.map((link, i) => (
          <li className='h-full w-full'>
            <NavLink to={link.path} className='nav-text | relative h-full w-full flex align-center justify pl-11 py-6'>
              <span className='nav-text | mr-5 fw-bold'>0{i}</span>{link.name}
            </NavLink>
          </li>
        ))}
      </ul>
  </nav>
  );
};

export default DrawerNav;