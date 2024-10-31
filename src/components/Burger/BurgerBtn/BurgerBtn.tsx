import { FC, useContext } from 'react';
import style from './burgerBtn.module.css';
import { ThemeContext } from '../../../AppRouter';
import { createClassNameByTheme } from '../../../modules/modules';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const BurgerBtn: FC<Props> = ({ isOpen, setIsOpen }) => {
  const currentTheme = useContext(ThemeContext);
  const lineTheme = createClassNameByTheme(
    currentTheme!.theme,
    style.line,
    style.light,
    style.dark
  );
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${style.menu} ${isOpen ? style.open : ''}`}
      onClick={handleClick}
    >
      <div className={lineTheme}></div>
      <div className={lineTheme}></div>
      <div className={lineTheme}></div>
    </div>
  );
};

export default BurgerBtn;
