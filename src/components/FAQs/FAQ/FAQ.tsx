import style from './faq.module.css';
import arrowDown from '../../../icons/a_down.svg';
import arrowUp from '../../../icons/a_up.svg';
import { FC, useContext, useState } from 'react';
import { IFAQ } from '../../../interfaces';
import {
  createClassNameByTheme,
  updateStringByNum,
} from '../../../modules/modules';
import { ThemeContext } from '../../../AppRouter';

type Props = {
  faq: IFAQ;
};
const FAQ: FC<Props> = ({ faq }) => {
  const [isVisible, setIsVisible] = useState(false);
  const currentTheme = useContext(ThemeContext);
  const themeQuestion = createClassNameByTheme(
    currentTheme!.theme,
    style.question,
    style.lightQuestion,
    style.darkQuestion
  );
  const themeAnswer = createClassNameByTheme(
    currentTheme!.theme,
    style.answer,
    style.lightAnswer,
    style.darkAnswer
  );
  return (
    <li
      className={style.container}
      style={isVisible ? { height: '171px' } : { height: '112px' }}
    >
      <div
        className={style.wrapper}
        style={isVisible ? { height: '70%' } : { maxHeight: '52px' }}
      >
        <div
          className={style.qaWrapper}
          style={isVisible ? { height: '100%' } : { maxHeight: '40px' }}
        >
          <p className={themeQuestion}>{faq.question}</p>
          <p
            className={themeAnswer}
            style={
              isVisible
                ? { display: 'block', maxHeight: '54px', height: '100%' }
                : { display: 'none' }
            }
          >
            {updateStringByNum(faq.answer, 107)}
          </p>
        </div>
        <p className={style.linkWrapper}>
          <a
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            <img
              src={isVisible ? `${arrowUp}` : `${arrowDown}`}
              alt="arrow down or up"
            />
          </a>
        </p>
      </div>
    </li>
  );
};

export default FAQ;
