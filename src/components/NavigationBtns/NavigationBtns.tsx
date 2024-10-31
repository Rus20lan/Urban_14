import style from './navigationBtns.module.css';
import lArrow from '../../icons/leftArrow.svg';
import rArrow from '../../icons/rightArrow.svg';
import { FC, useContext } from 'react';
import { ThemeContext } from '../../AppRouter';

type Props = {
  move?: {
    move: { action: string };
    setMove: React.Dispatch<React.SetStateAction<{ action: string }>>;
  };
};
const NavigationBtns: FC<Props> = ({ move }) => {
  const currentTheme = useContext(ThemeContext);
  const handleIncrement = () => {
    move?.setMove({ action: 'next' });
  };

  const handleDecrement = () => {
    move?.setMove({ action: 'prev' });
  };
  let themeContainer: string, themeArrow: string;
  if (currentTheme?.theme === 'light') {
    themeContainer = style.light;
    themeArrow = style.arrowLight;
  } else {
    themeContainer = style.dark;
    themeArrow = style.arrowDark;
  }
  return (
    <div className={`${style.container} ${themeContainer}`}>
      <a className={`${style.arrow} ${themeArrow}`} onClick={handleDecrement}>
        <img
          style={{
            width: '8.5px',
            height: '17px',
          }}
          src={lArrow}
          alt="left arrow"
        />
      </a>
      <a className={`${style.arrow} ${themeArrow}`} onClick={handleIncrement}>
        <img
          style={{
            width: '8.5px',
            height: '17px',
          }}
          src={rArrow}
          alt="right arrow"
        />
      </a>
    </div>
  );
};

export default NavigationBtns;
