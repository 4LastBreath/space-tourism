import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/main';
import { useBodyClass } from '../hooks/useBodyClass';


const Home = () => {

  const navigate = useNavigate()

  useBodyClass('home-bg')

  return (
<MainLayout>
  <div className='home | w-full h-full flex align-end'>

    <div className='home_hero-wrapper | flex w-full even-columns'>

      <div className='flex flex-col gap-4'>
        <h5>So, you want to travel to</h5>
        <h1>
          Space
        </h1>
        <p className='paragraph'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </div>
      
      <div className='flex align-center justify-end'>
        <button
          role='link' 
          className='home_button'
          onClick={() => navigate('/destination')}
        >
          Explore
        </button>
      </div>
      
    </div>

  </div>
</MainLayout>
  );
};

export default Home;