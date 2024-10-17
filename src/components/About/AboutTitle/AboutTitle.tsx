import style from './aboutTitle.module.css';
import { FC } from 'react';
import star4 from '../../../icons/star4.png';

type Props = {
  text: string;
};

const AboutTitle: FC<Props> = ({ text }) => {
  return (
    <div className={style.container}>
      <img className={style.imgAboutTitle} src={star4} alt="star4" />
      <h2 className={style.h2AboutTitle}>{text}</h2>
    </div>
  );
};

export default AboutTitle;
