import Nav from './nav';
import logo from '../styles/assets/shared/logo.svg'
import hamburger from '../styles/assets/shared/icon-hamburger.svg'

interface HeaderProps {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
  isDrawerOpen: boolean
}

const Header = ({setIsDrawerOpen, isDrawerOpen} : HeaderProps) => {
  return (
    <header className='header | flex space-between align-center w-full'>

      <img alt='logo' src={logo} height={48} width={48} className='mr-11'/>
      <div className='header_line' aria-hidden={true} />
      <Nav />

      <button 
        className='header_drawer-button | p-2'
        aria-label='menu'
        aria-expanded={isDrawerOpen}
        onClick={() => setIsDrawerOpen(true)}
        style={{visibility: isDrawerOpen ? 'hidden' : 'visible'}}
      >
        <img src={hamburger} width={30} alt='' aria-hidden={true}/>
      </button>

      
    </header>
  );
};

export default Header;