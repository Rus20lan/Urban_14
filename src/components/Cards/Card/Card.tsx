import { FC } from 'react';
import { IAlbum } from '../../../interfaces';
import style from './card.module.css';
import arrow from '../../../icons/arrow.png';

type Props = {
  album: IAlbum;
};
const Card: FC<Props> = ({ album }) => {
  return (
    <div className={style.container}>
      <div className={style.divFoto}>
        <img src={album.imgUrl} alt="image" />
      </div>
      <div className={style.divInfo}>
        <div className={style.divInfoName}>
          <p className={style.pInfoName}>{album.album}</p>
          <p className={style.pRelease}>{album.release}</p>
        </div>
        <div className={style.divInfoBtn}>
          <a className={style.aBtn}>
            View more <img src={arrow}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
