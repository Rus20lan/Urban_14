import { FC, useContext } from 'react';
import style from './links.module.css';
import { ILink } from '../../interfaces';
import { ThemeContext } from '../../AppRouter';
import { createClassNameByTheme } from '../../modules/modules';

type Props = {
  title: string;
  links: ILink[];
};
const Links: FC<Props> = ({ title, links }) => {
  const currentTheme = useContext(ThemeContext);
  const themeLink = createClassNameByTheme(
    currentTheme!.theme,
    style.link,
    style.light,
    style.dark
  );
  return (
    <div className={style.container}>
      <p>{title}</p>
      <ul className={style.linkList}>
        {links.map((link) => (
          <li key={link.id}>
            <a className={themeLink}>{link.link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
