import { useState } from 'react';
import MainLayout from '../layouts/main';
import { useBodyClass } from '../hooks/useBodyClass';
import { crewData } from '../data/crew';
import { AnimatePresence, motion } from 'motion/react';
import { crewVariants, textVariants } from '../constants/animations';
import { useTabAccess } from '../hooks/useTabAccess';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Crew = () => {

  const { onTabKeyDown, selectedTabIndex, setSelectedTabIndex, tabRefs } = useTabAccess(4)

  type Crew = 'commander' | 'specialist' | 'pilot' | 'engineer'

    const tabs: Crew[] = ['commander', 'specialist', 'pilot', 'engineer'];
  
    const [currentTab, setCurrentTab] = useState<Crew>('commander')

  useBodyClass('crew-bg')
  useDocumentTitle('Crew')

  return (
  <MainLayout title='Meet your crew' number={2} className='crew_page'>
    <div className='crew_content-wrapper | flex w-full even-columns'>
      <div className='crew_explanation | flex flex-col justify-end'>
        <section
          role='tabpanel'
          aria-labelledby={`tab-id-${currentTab}`}
          id={`panel-id-${currentTab}`}
        >
          <AnimatePresence mode='wait'>
            <motion.h4
              key={currentTab}
              variants={textVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              {crewData[currentTab].role}
            </motion.h4>
          </AnimatePresence>

          <AnimatePresence mode='wait'>
            <motion.h3
              key={currentTab}
              variants={textVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              {crewData[currentTab].name}
            </motion.h3>
          </AnimatePresence>

          <AnimatePresence mode='wait'>
            <motion.p
              className='paragraph'
              style={{transition: 'height 0.2s ease'}}
              key={currentTab}
              variants={textVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              {crewData[currentTab].bio}
            </motion.p>
          </AnimatePresence>
        </section>

        <div className='crew_tabs | flex' role='tablist' aria-orientation='horizontal'>
          {tabs.map((tab, i) => {
            const isActive = tab === currentTab

            return <button
              key={tab} 
              className={isActive ? 'crew_tab active' : 'crew_tab'}
              id={`tab-id-${tab}`}
              onClick={() => setCurrentTab(tab)}
              role='tab'
              aria-controls={`panel-id-${tab}`}
              aria-selected={isActive}
              ref={(e) => (tabRefs.current[i] = e)}
              onKeyDown={onTabKeyDown}
              tabIndex={selectedTabIndex === i ? 0 : -1}
              onFocus={() => setSelectedTabIndex(i)}
            />
          })}
        </div>
      </div>

      <div className='crew_img-container | flex align-end justify-center relative overflow-hidden'>

      <AnimatePresence mode='wait'>
        <motion.img
          key={currentTab}
          className='crew_img'
          src={crewData[currentTab].image} 
          alt={crewData[currentTab].name}
          variants={crewVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        />
      </AnimatePresence>

      </div>
    </div>
  </MainLayout>
  );
};

export default Crew;