import { useState, useContext } from 'react';
import { ThemeContext } from '../../App';
import style from './nav.module.css';

const links: string[] = ['Home', 'About Me', 'Portfolio', 'Services'];

const Nav = () => {
  const currentTheme = useContext(ThemeContext);
  const [active, setActive] = useState(0);
  let theme = '';
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;
    setActive(+target.id);
  };

  if (currentTheme?.theme === 'dark') {
    theme = style.activeDark;
  } else {
    theme = style.activeLight;
  }

  return (
    <nav className={style.container}>
      <ul className={style.links}>
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className={`${style.link} ${active === index ? theme : ''}`}
            >
              <a
                className={style.navA}
                id={'' + index}
                onClick={(event) => handleClick(event)}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
