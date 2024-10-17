import IntroBtn from './IntroBtn/IntroBtn';
import { PulseDiv } from '../animation/PulseDiv';
import style from './intro.module.css';
import { FC } from 'react';
import labelAtb from '../../images/atb-animation.png';
import IntroRunLine from './IntroRunLine/IntroRunLine';
import IntroFotos from './IntroFotos/IntroFotos';

type Props = {
  fullName: string;
  categories: string[];
};
const Intro: FC<Props> = ({ fullName, categories }) => {
  return (
    <div className={style.container}>
      <div className={style.introName}>
        <div className={style.introNameWrapper}>
          <p>amazing music by</p>
          <h1>{fullName}</h1>
        </div>
        <div className={style.introLabelWrapper}>
          <PulseDiv>
            <img src={labelAtb}></img>
          </PulseDiv>
        </div>
        <div className={style.introButtonWrapper}>
          <p>
            Let's
            <IntroBtn /> listen together
          </p>
        </div>
      </div>
      <div className={style.introRunLine}>
        <IntroRunLine categories={categories} />
      </div>
      <div className={style.introFotos}>
        <IntroFotos />
      </div>
    </div>
  );
};

export default Intro;
