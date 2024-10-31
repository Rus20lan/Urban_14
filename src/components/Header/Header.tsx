import Burger from '../Burger/Burger';
import Logo from '../Logo/Logo';
import Nav from '../Nav';
import SwitchTheme from '../Switch/SwitchTheme';
import style from './header.module.css';

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.headerWrapper}>
        <Logo />
        <Nav />
        <SwitchTheme isBurger={false} />
        <Burger />
      </div>
    </div>
  );
};

export default Header;
