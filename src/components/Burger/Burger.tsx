import styled from 'styled-components';
import { useResize } from '../../hooks/useResize';
import BurgerBtn from './BurgerBtn/BurgerBtn';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useState } from 'react';

const BurgerContainer = styled.div`
  border-left: 1px solid var(--dark-12);
  border-top: 1px solid var(--dark-12);
  border-radius: 20px 0 0 0;
  padding: 20px;
  max-width: 68px;
  width: 100%;
  max-height: 68px;
  height: 100%;
  box-sizing: border-box;
  align-self: flex-end;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScreenMd } = useResize();

  return (
    isScreenMd && (
      <BurgerContainer>
        <BurgerBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </BurgerContainer>
    )
  );
};

export default Burger;
