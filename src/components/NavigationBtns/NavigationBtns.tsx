import style from './navigationBtns.module.css';
import lArrow from '../../icons/leftArrow.svg';
import rArrow from '../../icons/rightArrow.svg';
import { FC } from 'react';

type Props = {
  move: {
    move: { action: string };
    setMove: React.Dispatch<React.SetStateAction<{ action: string }>>;
  };
};
const NavigationBtns: FC<Props> = ({ move }) => {
  const handleIncrement = () => {
    move.setMove({ action: 'next' });
  };

  const handleDecrement = () => {
    move.setMove({ action: 'prev' });
  };

  return (
    <div className={style.container}>
      <a className={style.arrow} onClick={handleDecrement}>
        <img
          style={{
            width: '8.5px',
            height: '17px',
          }}
          src={lArrow}
          alt="left arrow"
        />
      </a>
      <a className={style.arrow} onClick={handleIncrement}>
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
