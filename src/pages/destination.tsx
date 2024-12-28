import { useBodyClass } from '../hooks/useBodyClass';
import MainLayout from '../layouts/main';
import { destinationData } from '../data/destination';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { planetVariants, textVariants } from '../constants/animations';
import { useTabAccess } from '../hooks/useTabAccess';

const Destination = () => {

  const { onTabKeyDown, tabRefs, selectedTabIndex, setSelectedTabIndex } = useTabAccess(4)

  type Destination = 'moon' | 'mars' | 'europa' | 'titan'

  const tabs: Destination[] = ['moon', 'mars', 'europa', 'titan'];

  const [currentTab, setCurrentTab] = useState<Destination>('moon')

  useBodyClass('destination-bg')

  return (
    <MainLayout number={1} title='Pick your destination'>

        <div className='destination_content-wrapper | flex w-full h-full even-columns'>

              {/* Planet Img */}
              <div className='destination_img-container | flex align-center justify-center'>

                <AnimatePresence mode='wait'>
                  <motion.img
                    className='destination_img'
                    key={currentTab}
                    variants={planetVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    src={destinationData[currentTab].image} 
                    alt={destinationData[currentTab].name}
                  />
                </AnimatePresence>

              </div>

              <div className='flex flex-col align-center justify-center'>

                {/* Explanation */}
                <div className='description_explanation-wrapper | flex flex-col'>

                    {/* Tabs */}
                    <div className='destination_tabs | flex' role='tablist' aria-orientation='horizontal'>
                      {tabs.map((tab, i) => {
                        
                        const isActive = tab === currentTab
                        
                        return <button 
                          className={isActive ? 'destination_tab active' : 'destination_tab'}
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
                            {tab}
                        </button>
                      })}
                    </div>
                    
                  <section
                    role='tabpanel'
                    aria-labelledby={`tab-id-${currentTab}`}
                    id={`panel-id-${currentTab}`}
                  >
                    <AnimatePresence mode='wait'>
                        <motion.h2
                          key={currentTab}
                          variants={textVariants}
                          initial='initial'
                          animate='animate'
                          exit='exit'
                        >
                          {destinationData[currentTab].name}
                        </motion.h2>
                    </AnimatePresence>
                    
                    <AnimatePresence mode='wait'>
                        <motion.p
                          key={currentTab}
                          className='destination_description | paragraph'
                          variants={textVariants}
                          initial='initial'
                          animate='animate'
                          exit='exit'
                        >
                          {destinationData[currentTab].description}
                        </motion.p>
                    </AnimatePresence>

                    <div className='destination_divider | my-8'/>
                    
                    <div className='destination_infos'>
                      <div className='flex-1'>
                        <p className='sub-h2 mb-4'>Avg. Distance</p>
                        <AnimatePresence mode='wait'>
                          <motion.p
                            key={currentTab}
                            className='sub-h1'
                            variants={textVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                          >
                            {destinationData[currentTab].distance}
                          </motion.p>
                        </AnimatePresence>
                      </div>

                      <div className='flex-1'>
                        <p className='sub-h2 mb-4'>Est. Travel Time</p>
                        <AnimatePresence mode='wait'>
                          <motion.p
                            key={currentTab}
                            className='sub-h1'
                            variants={textVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                          >
                            {destinationData[currentTab].travel}
                          </motion.p>
                        </AnimatePresence>
                      </div>

                    </div>
                  </section>

                </div>

              </div>


        </div>
    </MainLayout>
  );
};

export default Destination;