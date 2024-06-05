import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { ThemeType, darkTheme, lightTheme } from 'src/consts/themes';
import { ThemeProvider } from 'styled-components';

type ThemeContextProps = {
  theme: ThemeType;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const values = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useTheme error. Must be used inside a ThemeContextProvider'
    );
  }
  return context;
};
