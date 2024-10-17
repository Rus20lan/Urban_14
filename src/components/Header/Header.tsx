import Logo from '../Logo/Logo';
import Nav from '../Nav';
import SwitchTheme from '../Switch/SwitchTheme';
import style from './header.module.css';

const Header = () => {
  return (
    <div className={style.container}>
      <Logo />
      <Nav />
      <SwitchTheme />
    </div>
  );
};

export default Header;
