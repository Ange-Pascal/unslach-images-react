import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext();

export const AppProvide = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme); 
    const body = document.querySelector('body')
    body.classList.toggle('dark')
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }} >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
