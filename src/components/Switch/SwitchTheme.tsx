import { FC, useContext } from 'react';
import { ThemeContext } from '../../AppRouter';
import style from './switch.module.css';
import sun from '../../icons/sun.svg';
import moon from '../../icons/moon.svg';
import { useResize } from '../../hooks/useResize';
import { createClassNameByTheme } from '../../modules/modules';

type Props = {
  isBurger: boolean;
};
const SwitchTheme: FC<Props> = ({ isBurger }) => {
  const currentTheme = useContext(ThemeContext);
  const { isScreenMd } = useResize();
  const handleClick = () => {
    if (currentTheme?.theme === 'dark') {
      currentTheme.setTheme('light');
    } else {
      currentTheme?.setTheme('dark');
    }
  };

  let themeFon: string;

  if (isBurger) {
    themeFon = createClassNameByTheme(
      currentTheme!.theme,
      style.btnSwitch,
      style.light,
      style.dark
    );
  } else {
    themeFon = `btnSwitch ${currentTheme?.theme === 'dark' ? 'dark' : 'light'}`;
  }

  const switchBtn = (
    <a className={themeFon} onClick={handleClick}>
      <img
        src={currentTheme?.theme === 'dark' ? moon : sun}
        alt="Switch"
        style={{ width: '100%', height: '100%' }}
      ></img>
    </a>
  );

  return (
    <div className={style.container}>
      {!isScreenMd && !isBurger && switchBtn}
      {isScreenMd && isBurger && switchBtn}
    </div>
  );
};

export default SwitchTheme;
