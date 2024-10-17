import { createContext, Dispatch, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import data from './db/db.json';
import About from './components/About/About';
// import NavigationBtns from './components/NavigationBtns/NavigationBtns';
import Discography from './components/Discography/Discography';
import btn from './db/btn.json';

export const ThemeContext = createContext<{
  theme: string;
  setTheme: Dispatch<string>;
} | null>(null);

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container ${theme === 'dark' ? 'dark' : 'light'}`}>
        <Header />
        <Intro fullName={data.fullName} categories={data.categories} />
        <About
          biography={data.biography}
          email={data.email}
          phone={data.phone}
        />
        <Discography objBtn={[btn[3]]} albums={data.albums} />
        {/* <NavigationBtns /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
