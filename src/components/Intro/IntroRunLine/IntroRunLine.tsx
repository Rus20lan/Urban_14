import { FC } from 'react';
import style from './style.module.css';
import { ICategories } from '../../../interfaces';
// import { RotateStar } from '../../animation/RotateStar';
import star from '../../../images/star.png';

const IntroRunLine: FC<ICategories> = ({ categories }) => {
  //   console.log(RotateStar);
  const liList = categories.map((cat, i) => (
    <li key={i}>
      <img src={star} alt="star" />
      <a className={style.linkRunLine} href="#">
        {cat}
      </a>
    </li>
  ));
  return <ul className={style.categories}>{liList}</ul>;
};

export default IntroRunLine;
