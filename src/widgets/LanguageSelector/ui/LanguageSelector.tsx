import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './LanguageSelector.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface LanguageSelectorProps {
  className?: string
}

export const LanguageSelector = ({className}: LanguageSelectorProps) => {

  const {t, i18n} = useTranslation()

  const onTranslate = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button className={classNames(cls.LanguageSelector, {}, [className])}
            onClick={onTranslate}>
      {t('язык')}
    </Button>
  );
};
