import IntroBtn from './IntroBtn/IntroBtn';
import { PulseDiv } from '../animation/PulseDiv';
import style from './intro.module.css';
import { FC } from 'react';
import labelAtb from '../../images/atb-animation.png';
import IntroFotos from './IntroFotos/IntroFotos';

type Props = {
  fullName: string;
};
const Intro: FC<Props> = ({ fullName }) => {
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
        <IntroBtn />
      </div>
      <div className={style.introRunLine}></div>
      <div className={style.introFotos}>
        <IntroFotos />
      </div>
    </div>
  );
};

export default Intro;
