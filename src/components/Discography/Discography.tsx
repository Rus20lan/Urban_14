import { FC, useState } from 'react';
import { IButtonData, IAlbum, ISingle } from '../../interfaces';
import TitlePart from '../TitlePart/TitlePart';
import style from './discography.module.css';
import Cards from '../Cards/Cards';
import { useResize } from '../../hooks/useResize';
import NavigationBtns from '../NavigationBtns/NavigationBtns';

type Props = {
  objBtn: IButtonData[];
  namePart: string;
  headPart: string;
  discography: IAlbum[] | ISingle[];
};
const Discography: FC<Props> = ({
  objBtn,
  discography,
  namePart,
  headPart,
}) => {
  const [move, setMove] = useState({ action: '' });
  const { isScreenMd } = useResize();
  const styleGroup = { maxWidth: '400px', width: '100%' };
  return (
    <div className={style.container}>
      <div className={style.discoFirstLine}>
        <TitlePart
          namePart={namePart}
          headPart={headPart}
          isNavigatyBtns={true}
          isButton={true}
          objBtn={objBtn}
          styleGroup={styleGroup}
          move={{ move, setMove }}
        />
      </div>
      <Cards move={move} discography={discography} />
      {isScreenMd && (
        <div className={style.navBtnsWrapper}>
          <NavigationBtns move={{ move, setMove }} />
        </div>
      )}
    </div>
  );
};

export default Discography;
