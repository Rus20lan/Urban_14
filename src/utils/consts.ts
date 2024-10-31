type TLink = {
  name: string;
  path: string;
  activeNumb: number;
};
export enum Paths {
  MAIN_PAGE_ROUTE = '/',
  ABOUT_PAGE_ROUTE = '/about',
  ALBUMS_PAGE_ROUTE = '/albums',
  SINGLES_PAGE_ROUTE = '/singles',
  TESTIMONIALS_PAGE_ROUTE = '/testimonials',
}

export const links: TLink[] = [
  { name: 'home', path: Paths.MAIN_PAGE_ROUTE, activeNumb: 0 },
  { name: 'About Me', path: Paths.ABOUT_PAGE_ROUTE, activeNumb: 1 },
  { name: 'Albums', path: Paths.ALBUMS_PAGE_ROUTE, activeNumb: 2 },
  { name: 'Singles', path: Paths.SINGLES_PAGE_ROUTE, activeNumb: 3 },
];
