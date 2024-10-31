import { FC, ReactNode, useContext } from 'react';
import styled from 'styled-components';
import style from './style.module.css';
import star from '../../../images/star.png';
import { ThemeContext } from '../../../AppRouter';

type Props = {
  categories?: string[];
  isAbsolute?: boolean;
};

const AbsoluteDiv = styled.div`
  position: absolute;
  top: 448px;
  max-width: 1920px;
  width: 100%;
  height: 80px;
  overflow: hidden;
  display: flex;

  @media (max-width: 1440px) {
    top: 345px;
    height: 62px;
  }
  @media (max-width: 768px) {
    top: 357px;
  }
`;
const SimpleDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  @media (max-width: 1440px) {
    height: 62px;
  }
`;
const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  user-select: none;
`;

const IntroRunLine: FC<Props> = ({ categories, isAbsolute }) => {
  const currentTheme = useContext(ThemeContext);
  const theme = currentTheme?.theme === 'light' ? style.light : style.dark;
  const renderElement = (): ReactNode => {
    const liList = categories?.map((cat, i) => (
      <li key={i}>
        <img src={star} alt="star" />
        <a className={style.linkRunLine}>{cat}</a>
      </li>
    ));
    if (isAbsolute) {
      return (
        <AbsoluteDiv className={`${style.absoluteDiv} ${theme}`}>
          <RelativeDiv>
            <ul className={`${style.categories} ${style.marquee}`}>{liList}</ul>
            <ul
              aria-hidden="true"
              className={`${style.categories} ${style.marquee}`}
            >
              {liList}
            </ul>
          </RelativeDiv>
        </AbsoluteDiv>
      );
    } else {
      return (
        <SimpleDiv className={theme}>
          <RelativeDiv>
            <ul
              className={`${style.categories} ${style.marquee} ${style.reverce}`}
            >
              {liList}
            </ul>
            <ul
              aria-hidden="true"
              className={`${style.categories} ${style.marquee} ${style.reverce}`}
            >
              {liList}
            </ul>
          </RelativeDiv>
        </SimpleDiv>
      );
    }
  };

  const elem = renderElement();

  return elem;
};

export default IntroRunLine;
