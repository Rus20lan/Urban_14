import { CSSProperties, FC, useContext } from 'react';
import { IAlbum, ISingle } from '../../../interfaces';
import style from './card.module.css';
import arrow from '../../../icons/arrow.png';
import { ThemeContext } from '../../../AppRouter';
import { createClassNameByTheme } from '../../../modules/modules';

type Props = {
  album: IAlbum | ISingle;
  style?: CSSProperties;
  isFull?: boolean;
};

const Card: FC<Props> = ({ album, isFull }) => {
  const currentTheme = useContext(ThemeContext);
  const textTheme = createClassNameByTheme(
    currentTheme!.theme,
    style.pInfoName,
    style.light,
    style.dark
  );
  return (
    <div className={style.container} style={isFull ? { minWidth: '100%' } : {}}>
      <div className={style.divFoto}>
        <img src={album.imgUrl} alt="image" />
      </div>
      <div className={style.divInfo}>
        <div className={style.divInfoName}>
          <p className={textTheme}>
            {'album' in album && album.album}
            {'single' in album && album.single}
          </p>
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
