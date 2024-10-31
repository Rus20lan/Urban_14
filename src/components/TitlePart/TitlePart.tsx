import { CSSProperties, FC } from 'react';
import Button from '../Button/Button';
import style from './titlePart.module.css';
import { IButtonData } from '../../interfaces';
import NavigationBtns from '../NavigationBtns/NavigationBtns';
import { useResize } from '../../hooks/useResize';

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
  move?: {
    move: { action: string };
    setMove: React.Dispatch<React.SetStateAction<{ action: string }>>;
  };
  styleNamePart?: CSSProperties;
  styleHeadPart?: CSSProperties;
};

const TitlePart: FC<Props> = ({
  namePart,
  headPart,
  isNavigatyBtns,
  isButton,
  objBtn,
  styleGroup,
  styleNamePart,
  styleHeadPart,
  move,
}) => {
  const { isScreenMd, isScreenLG } = useResize();

  return (
    <div
      className={style.container}
      style={
        !isButton && !isNavigatyBtns && isScreenLG
          ? { maxHeight: '37%', minHeight: '37%' }
          : styleNamePart && styleHeadPart && isScreenLG
          ? {
              flexDirection: 'column-reverse',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
            }
          : {}
      }
    >
      <div className={style.wrapper}>
        <p className={style.namePart} style={styleNamePart}>
          {namePart}
        </p>
        <h1 className={style.headPart} style={styleHeadPart}>
          {headPart}
        </h1>
      </div>
      {isButton || isNavigatyBtns ? (
        <div className={style.btnsGroup} style={styleGroup}>
          {!isScreenMd &&
            (isNavigatyBtns ? <NavigationBtns move={move} /> : null)}
          {isButton
            ? objBtn?.map((btn, i) => (
                <Button
                  key={i}
                  text={btn.text}
                  size={btn.size}
                  path={btn.path}
                />
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};
export default TitlePart;
