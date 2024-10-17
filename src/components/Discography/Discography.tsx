import { FC, useState } from 'react';
import { IButtonData, IAlbum } from '../../interfaces';
import TitlePart from '../TitlePart/TitlePart';
import style from './discography.module.css';
import Cards from '../Cards/Cards';

type Props = {
  objBtn: IButtonData[];
  albums: IAlbum[];
};
const Discography: FC<Props> = ({ objBtn, albums }) => {
  const [move, setMove] = useState({ action: '' });
  console.log(move);
  const styleGroup = { maxWidth: '400px', width: '100%' };
  return (
    <div className={style.container}>
      <div className={style.discoFirstLine}>
        <TitlePart
          namePart="Doscography"
          headPart="Explore my Discography."
          isNavigatyBtns={true}
          isButton={true}
          objBtn={objBtn}
          styleGroup={styleGroup}
          move={{ move, setMove }}
        />
      </div>
      <Cards move={move} albums={albums} />
      {/* <div className={style.discoSecondLine}></div> */}
    </div>
  );
};

export default Discography;
