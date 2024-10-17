// import logo from '../../images/atb_logo_white_250.png';
import logo from '../../images/atb_logo_white_250.png';
import style from './logo.module.css';

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
