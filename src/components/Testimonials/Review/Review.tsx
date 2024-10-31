import style from './review.module.css';
import face from '../../../icons/f.svg';
import tw from '../../../icons/t.svg';
import in_ from '../../../icons/in.svg';
import SocialButtons from '../../SocialButtons/SocialButtons';
import { IReview } from '../../../interfaces';
import { FC, ReactNode, useContext } from 'react';
import shape from '../../../icons/shape.svg';
import { useResize } from '../../../hooks/useResize';
import { createClassNameByTheme } from '../../../modules/modules';
import { ThemeContext } from '../../../AppRouter';

type Props = {
  review: IReview;
};
const Review: FC<Props> = ({ review }) => {
  const { isScreenLG, isScreenMd } = useResize();
  const currentTheme = useContext(ThemeContext);
  const addEstimat = () => {
    const arr: React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >[] = [];
    for (let i = 0; i < review.estimation; i++) {
      arr.push(<img key={i} src={shape}></img>);
    }
    return arr;
  };
  const themeContainer = createClassNameByTheme(
    currentTheme!.theme,
    style.container,
    style.light,
    style.dark
  );
  const themeStatePerson = createClassNameByTheme(
    currentTheme!.theme,
    style.statePerson,
    style.statePersonLight,
    style.statePersonDark
  );
  return (
    <div
      className={themeContainer}
      style={review?.isFull ? { minWidth: '100%' } : {}}
    >
      <div className={style.firstLine}>
        <div className={style.namePersonBlock}>
          <p className={style.mainFontReview}>{review.name}</p>
          <p className={themeStatePerson}>{review.from}</p>
        </div>
        {!isScreenLG && <SocialButtons icons={[face, tw, in_]} />}
        {isScreenMd && <SocialButtons icons={[face, tw, in_]} />}
      </div>
      <div className={style.secondtLine}>{addEstimat() as ReactNode}</div>
      <div className={style.thirdLine}>
        <p className={style.mainFontReview}>{review.review}</p>
      </div>
    </div>
  );
};

export default Review;
