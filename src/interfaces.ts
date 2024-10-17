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
  single: string;
}

export interface IButtonData {
  text: string;
  isIcon?: boolean;
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
