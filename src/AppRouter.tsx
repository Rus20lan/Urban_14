import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import data from './db/db.json';
import { createContext, Dispatch, useState } from 'react';
import './App.css';
import { StubPage } from './pages/StubPage';
import Header from './components/Header/Header';
import { links, Paths } from './utils/consts';

export const ThemeContext = createContext<{
  theme: string;
  setTheme: Dispatch<string>;
} | null>(null);

export const ActiveContext = createContext<{
  active: number;
  setActive: Dispatch<number>;
} | null>(null);

const AppRouter = () => {
  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState(0);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container ${theme === 'dark' ? 'dark' : 'light'}`}>
        <ActiveContext.Provider value={{ active, setActive }}>
          <Header />
          <Routes>
            <Route
              path={Paths.MAIN_PAGE_ROUTE}
              element={<HomePage data={data} />}
            />
            <Route
              path={Paths.ABOUT_PAGE_ROUTE}
              element={<StubPage pageName={links[1].name} />}
            />
            <Route
              path={Paths.ALBUMS_PAGE_ROUTE}
              element={<StubPage pageName={links[2].name} />}
            />
            <Route
              path={Paths.SINGLES_PAGE_ROUTE}
              element={<StubPage pageName={links[3].name} />}
            />
            <Route
              path={Paths.TESTIMONIALS_PAGE_ROUTE}
              element={<StubPage pageName="testimonials" />}
            />
          </Routes>
        </ActiveContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
};
export default AppRouter;
