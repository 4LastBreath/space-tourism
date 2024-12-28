import { useNavigate } from 'react-router-dom';
import { Telescope } from 'lucide-react';


const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div className='not-found | h-screen w-full flex align-center justify-center'>

      <div className='text-center'>

        <Telescope size={50} opacity={0.5}/>
        <h3>404</h3>
        <h5>Page not found</h5>
        <p className='mt-5'>Your search has ventured beyond our solar system</p>

        <button 
          className='mt-10' 
          role='link'
          onClick={() => navigate('/')}
        >
          Return Home
        </button>

      </div>
      
    </div>
  );
};

export default NotFound;