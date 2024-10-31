export interface IData {
  name: string;
  fullName: string;
  born: string;
  age: number;
  email: string;
  phone: string;
  biography: string;
  singles: ISingle[];
  albums: IAlbum[];
  quotes: string[];
  categories: string[];
  faqs: IFAQ[];
  reviews: IReview[];
}

export interface ICategories {
  categories: string[];
}

export interface IAlbum {
  id: number;
  album?: string;
  month: string;
  year: string;
  release: string;
  imgUrl: string;
}

export interface ISingle extends IAlbum {
  single?: string;
}

export interface IReview {
  id: number;
  name: string;
  from: string;
  estimation: number;
  review: string;
  isFull?: boolean;
}
export interface ILink {
  id: number;
  link: string;
}

export interface IMoveObject {
  move: { action: string };
  setMove: React.Dispatch<React.SetStateAction<{ action: string }>>;
}

export interface IButtonData {
  text: string;
  isIcon?: boolean;
  path: string;
  size?: {
    maxWidth?: string;
    padding?: string;
    width?: string;
    maxHeight?: string;
    height?: string;
    borderRadius?: string;
    background?: string;
  };
}
export interface IFAQ {
  id: number;
  question: string;
  answer: string;
}

export function getRandomList<T>(array: T[], num: number): T[] {
  const nSet = new Set();
  while (nSet.size < num) {
    nSet.add(array[Math.floor(Math.random() * array.length)]);
  }

  return [...nSet] as T[];
}
