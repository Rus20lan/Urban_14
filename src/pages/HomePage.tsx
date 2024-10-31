import btn from '../db/btn.json';
import About from '../components/About/About';
import Discography from '../components/Discography/Discography';
import FAQs from '../components/FAQs/FAQs';
import Footer from '../components/Footer/Footer';
import Intro from '../components/Intro/Intro';
import IntroRunLine from '../components/Intro/IntroRunLine/IntroRunLine';
import Testimonials from '../components/Testimonials/Testimonials';
import { FC, useContext } from 'react';
import { ThemeContext } from '../AppRouter';
import { IData } from '../interfaces';

type Props = {
  data: IData;
};
const HomePage: FC<Props> = ({ data }) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <>
      <div
        className={`container ${
          currentTheme?.theme === 'dark' ? 'dark' : 'light'
        }`}
      >
        <IntroRunLine categories={data.categories} isAbsolute={true} />
        <Intro fullName={data.fullName} />
        <About
          biography={data.biography}
          email={data.email}
          phone={data.phone}
        />
        <Discography
          objBtn={[btn[3]]}
          discography={data.albums}
          namePart="Albums"
          headPart="Explore my Albums."
        />
        <Discography
          objBtn={[btn[4]]}
          discography={data.singles}
          namePart="Singles"
          headPart="Explore my Singles."
        />
        <FAQs
          namePart="FAQ'S"
          headPart="Frequently asked questions"
          isNavigatyBtns={false}
          isButton={false}
          faqs={data.faqs}
        />
        <Testimonials reviews={data.reviews} />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
