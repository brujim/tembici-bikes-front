import { useState, useEffect } from 'react';

const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState({ width: '0px', height: '0px' });

  useEffect(() => {
    const isClient = typeof window === 'object';
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setScreenDimensions({
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Inicializa com os valores atuais

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenDimensions;
};

export default useScreenDimensions;