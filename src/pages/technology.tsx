import MainLayout from '../layouts/main';
import { useBodyClass } from '../hooks/useBodyClass';
import { useState } from 'react';
import { technologyData } from '../data/technology';
import { useScreenSize } from '../hooks/useScreenSize';
import { AnimatePresence, motion } from 'motion/react';
import { techVariants, textVariants } from '../constants/animations';
import { useTabAccess } from '../hooks/useTabAccess';

const Technology = () => {

  const { tabletWide } = useScreenSize()
  const { onTabKeyDown, selectedTabIndex, setSelectedTabIndex, tabRefs } = useTabAccess(3)

  type Technology = 'vehicle' | 'spaceport' | 'capsule'

  const tabs:Technology[] = ['vehicle', 'spaceport', 'capsule']
  
  const [currentTab, setCurrentTab] = useState<Technology>('vehicle')

  const imgPath = tabletWide ? technologyData[currentTab].images.portrait : technologyData[currentTab].images.landscape

  useBodyClass('technology-bg')

  return (
  <MainLayout number={3} title='Spache launch 101' className='technology_page'>
    <div className='technology_content-wrapper | flex even-columns w-full h-full'>

        <div className='technology_explanation | flex align-center'>

          <div className='technology_tabs' role='tablist' aria-orientation='horizontal'>
            {tabs.map((tab, i) => {
              const isActive = tab === currentTab

              return <button
                className={isActive ? 'technology_tab active' : 'technology_tab'}
                id={`tab-id-${tab}`}
                onClick={() => setCurrentTab(tab)}
                role='tab'
                aria-controls={`panel-id-${tab}`}
                aria-selected={isActive}
                ref={(e) => (tabRefs.current[i] = e)}
                onKeyDown={onTabKeyDown}
                tabIndex={selectedTabIndex === i ? 0 : -1}
                onFocus={() => setSelectedTabIndex(i)}
              >
                {i + 1}
              </button>

            })}
          </div>

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
                The Technology...
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
                {technologyData[currentTab].name}
              </motion.h3>
            </AnimatePresence>

            <AnimatePresence mode='wait'>
              <motion.p
                className='paragraph'
                key={currentTab}
                variants={textVariants}
                initial='initial'
                animate='animate'
                exit='exit'
              >
                {technologyData[currentTab].description}
              </motion.p>
            </AnimatePresence>
          </section>

      </div>

      <div className='technology_img-container'>
        <div className='technology_img-wrapper | overflow-hidden relative'>
          <AnimatePresence>
            <motion.img
              key={currentTab}
              variants={techVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='technology_img'
              src={imgPath}
              alt={technologyData[currentTab].name}
            />
          </AnimatePresence>
        </div>
      </div>

    </div>
  </MainLayout>
  );
};

export default Technology;