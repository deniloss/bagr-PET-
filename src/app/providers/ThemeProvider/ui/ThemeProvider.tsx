import React, {FC} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";

const ThemeProvider: FC = ({children}) => {

  const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  const defaultProps = React.useMemo(() =>({
    theme: theme,
    setTheme: setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;