import Button from '../Button/Button';
import style from './about.module.css';
import btn from '../../db/btn.json';
import atbAbout from '../../images/atb_about.webp';
import { FC } from 'react';
import { updateStringByNum } from '../../modules/modules';
import AboutTitle from './AboutTitle/AboutTitle';
import face from '../../icons/f.svg';
import tw from '../../icons/t.svg';
import in_ from '../../icons/in.svg';
import SocialButtons from '../SocialButtons/SocialButtons';
import TitlePart from '../TitlePart/TitlePart';
import { IButtonData } from '../../interfaces';

type Props = {
  biography: string;
  email: string;
  phone: string;
};
const About: FC<Props> = ({ biography, email, phone }) => {
  return (
    <div className={style.container}>
      <div className={style.aboutFirstLine}>
        <TitlePart
          namePart={'About'}
          headPart={'I am Andre Tanneberger'}
          isNavigatyBtns={false}
          isButton={true}
          objBtn={[btn[0] as IButtonData]}
          styleGroup={{ maxWidth: '163px', width: '100%' }}
        />
      </div>
      <div className={style.aboutSecondLine}>
        <div className={style.aboutDivFoto}>
          <img className={style.aboutFoto} src={atbAbout} alt="about" />
        </div>
        <div className={style.aboutIntroWrapper}>
          <div className={style.aboutIntroFirstLine}>
            <AboutTitle text="Introduction" />
            <p>{updateStringByNum(biography, 403)}</p>
          </div>
          <div className={style.aboutIntroSecondLine}>
            <AboutTitle text="Contact Information" />
            <div className={style.aboutDivEP}>
              <div className={style.aboutDivEmail}>
                <p className={style.aboutNameEP}>Email</p>
                <p className={style.aboutValueEP}>{email}</p>
              </div>
              <div className={style.aboutDivPhone}>
                <p className={style.aboutNameEP}>Phone Number</p>
                <p className={style.aboutValueEP}>{phone}</p>
              </div>
            </div>
            <div className={style.aboutSocialWrapper}>
              <SocialButtons icons={[face, tw, in_]} />
              <div className={style.aboutBtnGroup}>
                <Button
                  text={btn[1].text}
                  size={btn[1].size}
                  path={btn[1].path}
                />
                <Button
                  text={btn[2].text}
                  size={btn[2].size}
                  path={btn[2].path}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
