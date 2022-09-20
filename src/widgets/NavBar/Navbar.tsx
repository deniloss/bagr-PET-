import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {

  const {t, i18n} = useTranslation()

  const onTranslate = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <button onClick={onTranslate}>{t('Перевод')}</button>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>О нас</AppLink>
      </div>

    </div>
  );
};
