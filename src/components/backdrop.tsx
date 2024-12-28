import { FocusTrap } from 'focus-trap-react';

interface BackDropProps {
  children: React.ReactNode
  onBackDropClick: () => void
}

const BackDrop = ({children, onBackDropClick}: BackDropProps) => {
  return (
  <FocusTrap>
    <div 
      className='backdrop' 
      onClick={() => onBackDropClick()}
    >
      {children}
    </div>
  </FocusTrap>
  );
};

export default BackDrop;