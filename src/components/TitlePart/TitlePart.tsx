import { FC } from 'react';
import Button from '../Button/Button';
import style from './titlePart.module.css';
import { IButtonData } from '../../interfaces';
import NavigationBtns from '../NavigationBtns/NavigationBtns';

type Props = {
  namePart: string;
  headPart: string;
  isNavigatyBtns: boolean;
  isButton: boolean;
  objBtn?: IButtonData[];
  styleGroup?: {
    maxWidth: string;
    width: string;
  };
  move: {
    move: { action: string };
    setMove: React.Dispatch<React.SetStateAction<{ action: string }>>;
  };
};

const TitlePart: FC<Props> = ({
  namePart,
  headPart,
  isNavigatyBtns,
  isButton,
  objBtn,
  styleGroup,
  move,
}) => {
  return (
    <div className={style.container}>
      <div>
        <p className={style.namePart}>{namePart}</p>
        <h1 className={style.headPart}>{headPart}</h1>
      </div>
      <div className={style.btnsGroup} style={styleGroup}>
        {isNavigatyBtns ? <NavigationBtns move={move} /> : null}
        {isButton
          ? objBtn?.map((btn, i) => (
              <Button key={i} text={btn.text} size={btn.size} />
            ))
          : null}
      </div>
    </div>
  );
};
export default TitlePart;
