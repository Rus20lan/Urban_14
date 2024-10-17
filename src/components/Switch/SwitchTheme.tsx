import { useContext, useState } from 'react';
import { ThemeContext } from '../../App';
import style from './switch.module.css';
import sun from '../../icons/sun.svg';
import moon from '../../icons/moon.svg';

const SwitchTheme = () => {
  const currentTheme = useContext(ThemeContext);
  const [isDark, setIsDark] = useState(
    currentTheme?.theme === 'dark' ? true : false
  );
  const handleClick = () => {
    if (currentTheme?.theme === 'dark') {
      currentTheme.setTheme('light');
      setIsDark(false);
    } else {
      currentTheme?.setTheme('dark');
      setIsDark(true);
    }
  };

  return (
    <div className={style.container} onClick={handleClick}>
      <a className={`btn-switch ${isDark ? 'dark' : 'light'}`}>
        <img
          src={isDark ? moon : sun}
          alt="Switch"
          style={{ width: '100%', height: '100%' }}
        ></img>
      </a>
    </div>
  );
};

export default SwitchTheme;
