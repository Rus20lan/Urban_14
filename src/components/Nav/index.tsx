import { useContext } from 'react';
import { ActiveContext, ThemeContext } from '../../AppRouter';
import style from './nav.module.css';
import { useNavigate } from 'react-router-dom';
import { links } from '../../utils/consts';

const Nav = () => {
  const currentTheme = useContext(ThemeContext);
  const currentActive = useContext(ActiveContext);
  const navigate = useNavigate();
  let theme = '';
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    const target = event.target as HTMLAnchorElement;

    navigate(path);
    currentActive?.setActive(+target.id);
  };

  if (currentTheme?.theme === 'dark') {
    theme = style.activeDark;
  } else {
    theme = style.activeLight;
  }

  return (
    <nav className={style.container}>
      <ul className={style.links}>
        {links.map(({ name, path }, index) => {
          return (
            <li
              key={index}
              className={`${style.link} ${
                currentActive?.active === index ? theme : ''
              }`}
            >
              <a
                className={style.navA}
                id={'' + index}
                onClick={(event) => handleClick(event, path)}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
