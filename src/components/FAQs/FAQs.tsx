import { FC } from 'react';
import TitlePart from '../TitlePart/TitlePart';
import style from './faqs.module.css';
import FAQ from './FAQ/FAQ';
import { getRandomList, IFAQ } from '../../interfaces';
import { useResize } from '../../hooks/useResize';

type Props = {
  namePart: string;
  headPart: string;
  isNavigatyBtns: boolean;
  isButton: boolean;
  faqs: IFAQ[];
};

const FAQs: FC<Props> = ({
  namePart,
  headPart,
  isNavigatyBtns,
  isButton,
  faqs,
}) => {
  const { isScreenMd } = useResize();

  const getFaqsByWidth = () => {
    if (!isScreenMd) {
      faqs = getRandomList<IFAQ>(faqs, 8);
    } else {
      faqs = getRandomList<IFAQ>(faqs, 4);
    }
  };

  getFaqsByWidth();

  return (
    <div className={style.container}>
      <div className={style.firstLine}>
        <TitlePart
          namePart={namePart}
          headPart={headPart}
          isNavigatyBtns={isNavigatyBtns}
          isButton={isButton}
        />
      </div>
      <div className={style.secondLine}>
        <ul className={style.listQuestions}>
          {faqs.map((faq) => (
            <FAQ key={faq.id} faq={faq} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQs;
