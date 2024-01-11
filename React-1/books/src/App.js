import "./App.css";
import React, { useState } from "react";
import Booklist from "./components/book/Booklist";
import ThemeSwitcher from './components/theme/ThemeSwitcher';
import {createContext} from 'react';

export const ThemeContext = createContext();
function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === 'light')
      setTheme('dark');
    else
      setTheme('light');
  }
  return (
    <> 
    <ThemeSwitcher toggleTheme={toggleTheme}/>
    <ThemeContext.Provider value={theme} >
       <div className={`main ${theme}`}>
      <Booklist />
    </div>
    </ThemeContext.Provider>
    </>

  );
}

export default App;
