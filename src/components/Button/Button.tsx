import { FC } from 'react';
import { IButtonData } from '../../interfaces';
import style from './button.module.css';

const Button: FC<IButtonData> = ({ text, size }) => {
  return (
    <a className={style.btn} style={size}>
      {text}
    </a>
  );
};
export default Button;
