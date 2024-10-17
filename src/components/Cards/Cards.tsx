import { FC, useEffect, useState } from 'react';
import style from './cards.module.css';
import { IAlbum, ISingle } from '../../interfaces';
import Card from './Card/Card';
import { checkingIndexInRange } from '../../modules/modules';

type Props = {
  albums?: IAlbum[];
  singles?: ISingle[];
  move: { action: string };
};
const Cards: FC<Props> = ({ albums, move }) => {
  const [position, setPosition] = useState([0, 1, 2]);

  useEffect(() => {
    if (move.action !== '') {
      setPosition(
        checkingIndexInRange(move.action, position, albums!.length - 1)
      );
    }
  }, [move]);
  console.log(position);

  return (
    <div className={style.container}>
      {albums
        ?.filter((album, i) => position.includes(i))
        .map((album) => (
          <Card key={album.id} album={album} />
        ))}
      {/* {albums?.map((album) => (
        <Card key={album.id} album={album} />
      ))} */}
    </div>
  );
};

export default Cards;
