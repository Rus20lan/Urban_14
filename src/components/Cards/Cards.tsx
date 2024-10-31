import { FC, useEffect, useState } from 'react';
import style from './cards.module.css';
import { IAlbum, ISingle } from '../../interfaces';
import Card from './Card/Card';
import { checkingIndexInRange, getAlbumOrSingle } from '../../modules/modules';
import { useResize } from '../../hooks/useResize';

type Props = {
  discography: IAlbum[] | ISingle[];
  move: { action: string };
};
const Cards: FC<Props> = ({ discography, move }) => {
  const [position, setPosition] = useState([0, 1, 2]);

  const { isScreenMd } = useResize();

  useEffect(() => {
    if (move.action !== '') {
      setPosition(
        checkingIndexInRange(move.action, position, discography.length - 1)
      );
    }
  }, [move]);

  const prev = getAlbumOrSingle(discography, position[0]);
  const current = getAlbumOrSingle(discography, position[1]);
  const next = getAlbumOrSingle(discography, position[2]);

  return (
    <div className={style.container}>
      {!isScreenMd && <Card key={prev.id} album={prev} />}
      <Card key={current.id} album={current} isFull={isScreenMd} />
      {!isScreenMd && <Card key={next.id} album={next} />}
    </div>
  );
};

export default Cards;
