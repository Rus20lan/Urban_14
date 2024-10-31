import arrow from '../../../icons/arrow.png';
import style from './introBtn.module.css';
const IntroBtn = () => {
  return (
    <div className={style.introButtonWrapper}>
      <p className={style.introBtnP}>
        Let's
        <a className={style.link}>
          <img src={arrow} alt="arrow" />
        </a>{' '}
        listen together
      </p>
    </div>
  );
};

export default IntroBtn;
