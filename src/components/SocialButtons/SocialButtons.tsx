import style from './socialButtons.module.css';
import { FC } from 'react';
import SocialButton from './SocialButton/SocialButton';

type Props = {
  icons: string[];
};
const SocialButtons: FC<Props> = ({ icons }) => {
  return (
    <div className={style.container}>
      {icons.map((icon, i) => (
        <SocialButton key={i} icon={icon} />
      ))}
    </div>
  );
};

export default SocialButtons;
