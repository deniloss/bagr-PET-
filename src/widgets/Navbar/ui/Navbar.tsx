import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton/BugButton';
import React from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <BugButton />
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.RED} to="/about">
        О сайте
      </AppLink>
    </div>
  </div>
);
