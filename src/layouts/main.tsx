import { useState } from 'react';
import Header from '../components/header';
import Drawer from '../components/drawer';
import { AnimatePresence } from 'motion/react';


interface MainLayoutProps {
  children: React.ReactNode
  number?: number
  title?: string
  className?:string
}

const MainLayout = ({children, title, number, className}: MainLayoutProps) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const contentClass = className ? `page-wrapper_content ${className}` : 'page-wrapper_content'
  const titleClass = className ? `page-wrapper_title ${className}` : 'page-wrapper_title'

  return (
    <div className='page-wrapper'>

      <Header setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen}/>

      <main className='page-wrapper_main'>

        <div className={contentClass}>

          <div className='w-full min-h-full'>
            {title &&
              <div className={titleClass}>
                <span className='fw-bold mr-6'>0{number}</span>
                {title}
              </div> 
            }
            <div className='page-wrapper_children | h-full w-full'>
              {children}
            </div>
          </div>

        </div>

      </main>

      <AnimatePresence>
        {isDrawerOpen && <Drawer setIsOpen={setIsDrawerOpen}/>}
      </AnimatePresence>
      
    </div>
  );
};

export default MainLayout;