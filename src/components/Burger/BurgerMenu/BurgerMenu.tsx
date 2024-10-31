import { Dispatch, FC, useContext } from 'react';
import styled from 'styled-components';
import SwitchTheme from '../../Switch/SwitchTheme';
import { ActiveContext, ThemeContext } from '../../../AppRouter';
import { Link } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const BurgerMenuContainer = styled.div`
  position: absolute;
  top: 89px;
  right: 4.3%;
  width: 30%;
  height: auto;
  background: var(--dark-06);
  border: 1px solid var(--dark-12);
  border-radius: 12px 0 12px 12px;
  display: flex;
  justify-content: space-around;
`;
const BurgerMenuList = styled.ul`
  margin: 10px;
  padding-left: 0;
  display: flex;
  flex-direction: column;
`;
const BurgerMenuItem = styled.li`
  list-style-type: none;
  width: 100%;
  padding: 6px 0px;
  font-family: var(--font-manrope-m);
  font-weight: 500;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: var(--grey-95);
  @media (max-width: 480px) {
    font-size: 0.88rem;
  }
  @media (max-width: 390px) {
    font-size: 0.8rem;
  }
`;

const SwitchThemeWrapper = styled.div`
  width: 20%;
  height: 20%;
  justify-content: center;
  align-self: center;
`;

const BurgerMenu: FC<Props> = ({ isOpen, setIsOpen }) => {
  const currentTheme = useContext(ThemeContext);
  const currentActive = useContext(ActiveContext);
  const handleClick = (str: string) => {
    setIsOpen(!isOpen);
    currentActive?.setActive(+str);
  };
  const styleLink = {
    textDecoration: 'none',
    color: 'var(--light-03)',
    padding: '6px 0px',
    borderBottom: '1px solid var(--dark-20)',
  };

  return isOpen ? (
    <BurgerMenuContainer
      style={
        currentTheme?.theme === 'light'
          ? { background: 'var(--purple-55)' }
          : { background: 'var(--dark-06)' }
      }
    >
      <BurgerMenuList>
        <BurgerMenuItem>
          <Link style={styleLink} to={'/'} onClick={() => handleClick('0')}>
            Home
          </Link>
        </BurgerMenuItem>
        <BurgerMenuItem>
          <Link
            style={styleLink}
            to={'/about'}
            onClick={() => handleClick('1')}
          >
            About me
          </Link>
        </BurgerMenuItem>
        <BurgerMenuItem>
          <Link
            style={styleLink}
            to={'/albums'}
            onClick={() => handleClick('2')}
          >
            Albums
          </Link>
        </BurgerMenuItem>
        <BurgerMenuItem>
          <Link
            style={styleLink}
            to={'/singles'}
            onClick={() => handleClick('3')}
          >
            Singles
          </Link>
        </BurgerMenuItem>
      </BurgerMenuList>
      <SwitchThemeWrapper>
        <SwitchTheme isBurger={true} />
      </SwitchThemeWrapper>
    </BurgerMenuContainer>
  ) : null;
};

export default BurgerMenu;
