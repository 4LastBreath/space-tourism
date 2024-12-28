import { motion } from 'motion/react';
import BackDrop from './backdrop';
import { useEffect } from 'react';
import { useScreenSize } from '../hooks/useScreenSize';
import DrawerNav from './drawerNav';
import closeIcon from '../styles/assets/shared/icon-close.svg'

interface DrawerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = ({ setIsOpen } : DrawerProps) => {

  const { tablet } = useScreenSize()

  useEffect(() => {
    if (tablet) {
      setIsOpen(false)
    }
  }, [tablet, setIsOpen])

  useEffect(() => {
    document.body.classList.add('no-scroll')

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [])

  return (
  <BackDrop onBackDropClick={() => setIsOpen(false)}>

    <motion.div
      initial={{right: '-254px'}}
      animate={{right: 0}}
      exit={{right: '-254px'}} 
      transition={{ duration: 0.3 }}
      className='drawer | py-10' 
      onClick={(e) => e.stopPropagation()}
    >

      <div className='flex justify-end pr-10'>
        <button className='drawer_close-button' onClick={() => setIsOpen(false)} aria-label='close drawer'>
          <img src={closeIcon} alt='' width={24} aria-hidden={true} />
        </button>
      </div>

      <DrawerNav />

    </motion.div>

  </BackDrop>
  );
};

export default Drawer;