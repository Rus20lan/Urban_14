import style from './socialButtons.module.css';
import { FC, useContext } from 'react';
import SocialButton from './SocialButton/SocialButton';
import { ThemeContext } from '../../AppRouter';

type Props = {
  icons: string[];
};
const SocialButtons: FC<Props> = ({ icons }) => {
  const currentTheme = useContext(ThemeContext);
  let theme: string;
  currentTheme?.theme === 'light'
    ? (theme = `${style.container} ${style.light}`)
    : (theme = `${style.container} ${style.dark}`);
  return (
    <div className={theme}>
      {icons.map((icon, i) => (
        <SocialButton key={i} icon={icon} />
      ))}
    </div>
  );
};

export default SocialButtons;
