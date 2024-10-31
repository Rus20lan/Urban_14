import { FC, useContext } from 'react';
import { IButtonData } from '../../interfaces';
import style from './button.module.css';
import { useResize } from '../../hooks/useResize';
import { ActiveContext, ThemeContext } from '../../AppRouter';
import { useNavigate } from 'react-router-dom';
import { links } from '../../utils/consts';

const Button: FC<IButtonData> = ({ text, size, path }) => {
  const currentTheme = useContext(ThemeContext);
  const currentActive = useContext(ActiveContext);
  const navigate = useNavigate();
  const { isScreenXXL } = useResize();
  let theme: string;

  if (currentTheme?.theme === 'light') {
    theme = `${style.btn} ${style.light}`;
  } else {
    theme = `${style.btn} ${style.dark}`;
  }

  if (isScreenXXL) {
    if (size && size.height != 'undefined') {
      size = Object.assign({}, size, { height: '49px' });
    }
  }

  const handleClick = (path: string) => {
    if (path !== '') {
      let findValue = links.find((x) => x.path === path)?.activeNumb;
      if (findValue) currentActive?.setActive(findValue);
      navigate(path);
    }
  };

  return (
    <a className={theme} style={size} onClick={() => handleClick(path)}>
      {text}
    </a>
  );
};
export default Button;
