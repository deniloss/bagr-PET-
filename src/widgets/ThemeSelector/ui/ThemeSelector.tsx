import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './ThemeSelector.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark-icon.svg'
import LightIcon from 'shared/assets/icons/theme-light-icon.svg'
import {Button} from "shared/ui/Button/Button";

interface ThemeSelectorProps {
  className?: string
}

export const ThemeSelector = ({className}: ThemeSelectorProps) => {

  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      className={classNames(cls.ThemeSelector, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
