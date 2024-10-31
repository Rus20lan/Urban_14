import TitlePart from '../TitlePart/TitlePart';
import style from './testimonials.module.css';
import btn from '../../db/btn.json';
import { IButtonData, IReview } from '../../interfaces';
import Reviews from './Reviews/Reviews';
import { FC, useState } from 'react';
import { useResize } from '../../hooks/useResize';
import NavigationBtns from '../NavigationBtns/NavigationBtns';

type Props = {
  reviews: IReview[];
};
const Testimonials: FC<Props> = ({ reviews }) => {
  const [move, setMove] = useState({ action: '' });
  const { isScreenMd } = useResize();
  return (
    <div className={style.container}>
      <div className={style.firstLineWrapper}>
        <TitlePart
          namePart="Testimonials"
          headPart="What my Fans say"
          isNavigatyBtns={false}
          isButton={false}
        />
        <TitlePart
          namePart="Total Reviews"
          headPart={'' + reviews.length}
          isNavigatyBtns={true}
          isButton={true}
          objBtn={[btn[5] as IButtonData]}
          styleGroup={{ maxWidth: '435px', width: '100%' }}
          styleNamePart={{
            fontFamily: 'var(--font-manrope-r)',
            fontWeight: '400',
            fontSize: '1.1rem',
            lineHeight: '150%',
            color: 'var(--grey-40)',
            textTransform: 'capitalize',
          }}
          styleHeadPart={{
            fontFamily: 'var(--font-manrope-m)',
            fontWeight: '500',
            fontSize: '1.75rem',
            lineHeight: '150%',
            color: 'var(--grey-80)',
            textAlign: 'left',
          }}
          move={{ move, setMove }}
        />
      </div>
      <Reviews reviews={reviews} move={move} />
      {isScreenMd && (
        <div className={style.navBtnsWrapper}>
          <NavigationBtns move={{ move, setMove }} />
        </div>
      )}
    </div>
  );
};

export default Testimonials;
