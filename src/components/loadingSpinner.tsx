import { LoaderPinwheel } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className='flex flex-col align-center gap-4'>
      <LoaderPinwheel className='loading-spinner_icon | animate-spin' size={40} />
      <p className='loading-spinner_text'>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;