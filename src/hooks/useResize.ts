import { useState, useEffect } from 'react';
import { SCREEN_SM, SCREEN_MD, SCREEN_XXL, SCREEN_LG } from './breakpoints';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const win = event.target as Window;
      setWidth(win.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // console.log(width);
  return {
    width,
    isScreenSm: width <= SCREEN_SM,
    isScreenMd: width <= SCREEN_MD,
    isScreenLG: width <= SCREEN_LG,
    isScreenXXL: width <= SCREEN_XXL,
  };
};
