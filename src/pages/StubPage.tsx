import { FC, useContext } from 'react';
import { ThemeContext } from '../AppRouter';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
import stubImg from '../images/stub_img.webp';

const MainContainer = styled.div`
  height: auto;
  width: 83.1%;
  margin: 0 auto;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  width: 50%;
  height: 70%;
`;
const H1 = styled.h1`
  margin: 0;
  font-size: 4rem;
  color: var(--grey-90);
  font-family: var(--font-manrope-s-b);
  text-align: center;
  text-transform: capitalize;
  @media (max-width: 1440px) {
    font-size: 3.75rem;
  }
  @media (max-width: 1280px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
type Props = {
  pageName: string | 'empty';
};
export const StubPage: FC<Props> = ({ pageName }) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <div
      className={`container ${
        currentTheme?.theme === 'dark' ? 'dark' : 'light'
      }`}
    >
      <MainContainer>
        <ImageWrapper>
          <H1>Page {pageName}</H1>
          <img
            src={stubImg}
            alt="stub"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
            }}
          />
        </ImageWrapper>
      </MainContainer>
      <Footer />
    </div>
  );
};
