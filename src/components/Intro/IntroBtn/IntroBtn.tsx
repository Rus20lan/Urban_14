import arrow from '../../../icons/arrow.png';
import style from './introBtn.module.css';
const IntroBtn = () => {
  return (
    <a className={style.link} href="#">
      <img src={arrow} alt="arrow" />
    </a>
  );
};

export default IntroBtn;
