import Review from '../Review/Review';
import style from './reviews.module.css';
import { IReview } from '../../../interfaces';
import { FC, useEffect, useState } from 'react';
import { checkingIndexInRange } from '../../../modules/modules';
import { useResize } from '../../../hooks/useResize';

type Props = {
  reviews: IReview[];
  move: { action: string };
};
const Reviews: FC<Props> = ({ reviews, move }) => {
  const [position, setPosition] = useState([0, 1, 2]);
  const { isScreenMd } = useResize();

  useEffect(() => {
    if (move.action !== '') {
      setPosition(
        checkingIndexInRange(move.action, position, reviews.length - 1)
      );
    }
  }, [move]);

  const checkPos = () => {
    let prevIndex = position[0];
    let currIndex = position[1];
    let nextIndex = position[2];

    const arrRev = [
      isScreenMd ? null : reviews[prevIndex],
      isScreenMd
        ? Object.assign({}, reviews[currIndex], { isFull: true })
        : reviews[currIndex],
      isScreenMd ? null : reviews[nextIndex],
    ]
      .filter((item) => item !== null)
      .map((rev, index) => (
        <Review key={move.action + index} review={rev as IReview} />
      ));
    return arrRev;
  };

  return <div className={style.container}>{checkPos()}</div>;
};

export default Reviews;
