import IntroRunLine from '../Intro/IntroRunLine/IntroRunLine';
import style from './footer.module.css';
import data from '../../db/db.json';
import atb from '../../images/atb-animation.png';
import { PulseDiv } from '../animation/PulseDiv';
import IntroBtn from '../Intro/IntroBtn/IntroBtn';
import face from '../../icons/f.svg';
import tw from '../../icons/t.svg';
import in_ from '../../icons/in.svg';
import SocialButtons from '../SocialButtons/SocialButtons';
import links from '../../db/links.json';
import Links from '../Links/Links';
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logoFooterWrapper}>
        <div className={style.logoWrapper}>
          <PulseDiv>
            <img src={atb} alt="atb footer" />
          </PulseDiv>
        </div>
        <IntroRunLine categories={data.categories} isAbsolute={false} />
      </div>
      <div className={style.mainFooterBlock}>
        <div className={style.mainFooterBlockOne}>
          <div className={style.footerButtonWrapper}>
            <span>A more meaningful home for sound</span>
            <IntroBtn />
          </div>
          <div className={style.footerLinksBlock}>
            <div className={style.linksWrapper}>
              {links.map((linkL) => (
                <Links key={linkL.id} title={linkL.name} links={linkL.links} />
              ))}
            </div>
          </div>
        </div>
        <div className={style.mainFooterBlockTwo}>
          <div className={style.blockTwoWrapper}>
            <div className={style.footerTermsBlock}>
              <p className={style.footerTerms}>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <SocialButtons icons={[face, tw, in_]} />
            <div className={style.footerCopyBlock}>
              <p>© 2024 Andre Tanneberger Music. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
