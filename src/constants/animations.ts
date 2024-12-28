export const planetVariants = {
  initial: {
    opacity: 0, 
    scale: 0.7, 
    translateY: -100
  }, 
  animate: {
    opacity: 1, 
    scale: 1, 
    translateY: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0, scale: 0.5, translateY: 50,
    transition: {
      duration: 0.4,
    }
  }
}

export const textVariants = {
  initial:{ 
    opacity: 0, 
    clipPath: 'inset(0 100%)'
  },
  animate:{
    opacity: 1, 
    clipPath: 'inset(0 0%)',
    transition: {duration: 0.6 }
  },
  exit: {
    opacity: 0, 
    clipPath: 'inset(0 100%)', 
    transition: {duration: 0.4}
  }
}

export const crewVariants = {
  initial:{ 
    opacity: 0, 
    translateX: '-100%',
    scale: 0.5,
  },
  animate:{
    opacity: 1, 
    translateX: 0,
    scale: 1,
    transition: { duration: 0.6 }
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    translateX: '100%',
    transition: { duration: 0.4 }
  }
}

export const techVariants = {
  initial:{ 
    opacity: 0, 
    translateX: '-100%',
  },
  animate:{
    opacity: 1, 
    translateX: 0,
    transition: { duration: 0.6 }
  },
  exit: {
    opacity: 0,
    translateX: '100%',
    transition: { duration: 0.6 }
  }
}