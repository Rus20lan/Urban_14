import style from './introFotos.module.css';
import atb_1 from '../../../images/collage/atb_1.webp';
import atb_2 from '../../../images/collage/atb_2.webp';
import atb_3 from '../../../images/collage/atb_3.webp';
import atb_4 from '../../../images/collage/atb_4.webp';
import atb_5 from '../../../images/collage/atb_5.webp';
import atb_6 from '../../../images/collage/atb_6.webp';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';

const IntroFotos = () => {
  const currentTheme = useContext(ThemeContext);
  let theme = '';

  if (currentTheme?.theme === 'dark') {
    theme = 'dark';
  } else {
    theme = 'light';
  }

  return (
    <div className={style.container}>
      <figure className={`${style.item} ${style.item1}`}>
        <img
          className={`${style.itemImg} ${style.itemImg1}`}
          src={atb_1}
          alt="atb1"
        />
      </figure>
      <figure className={`${style.item} ${style.item2}`}>
        <img
          className={`${style.itemImg} ${style.itemImg2}`}
          src={atb_2}
          alt="atb2"
        />
      </figure>
      <figure className={`${style.item} ${style.item3} ${theme}`}>
        <img
          className={`${style.itemImg} ${style.itemImg3}`}
          src={atb_3}
          alt="atb3"
        />
      </figure>
      <figure className={`${style.item} ${style.item4}`}>
        <img
          className={`${style.itemImg} ${style.itemImg4}`}
          src={atb_4}
          alt="atb4"
        />
      </figure>
      <figure className={`${style.item} ${style.item5}`}>
        <img className={style.itemImg} src={atb_5} alt="atb5" />
      </figure>
      <figure className={`${style.item} ${style.item6}`}>
        <img className={style.itemImg} src={atb_6} alt="atb6" />
      </figure>
    </div>
  );
};

export default IntroFotos;
