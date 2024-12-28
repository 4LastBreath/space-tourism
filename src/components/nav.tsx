import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants/navLinks';

const Nav = () => {
  return (
    <nav className='nav-primary' aria-label='main'>
      <ul className='nav-primary_list | flex justify-center gap-6 h-full'>
        {navLinks.map((link, i) => (
          <li className='h-full px-8'>
            <NavLink to={link.path} className='nav-text | relative h-full flex align-center justify'>
              <span className='nav-text | mr-3 fw-bold'>0{i}</span>{link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;