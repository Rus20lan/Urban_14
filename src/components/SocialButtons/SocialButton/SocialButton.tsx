import { FC, useContext } from 'react';
import style from './socialButton.module.css';
import { ThemeContext } from '../../../AppRouter';
type Props = {
  icon: string;
};
const SocialButton: FC<Props> = ({ icon }) => {
  const currentTheme = useContext(ThemeContext);
  let theme: string;
  currentTheme?.theme === 'light'
    ? (theme = `${style.aLink} ${style.light}`)
    : (theme = `${style.aLink} ${style.dark}`);
  return (
    <a className={theme}>
      <img
        style={{
          width: '20px',
          height: '20px',
        }}
        src={icon}
        alt="socialButton"
      />
    </a>
  );
};

export default SocialButton;
