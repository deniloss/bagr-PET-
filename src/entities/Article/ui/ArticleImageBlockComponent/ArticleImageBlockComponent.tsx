import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string
  image: string
}

export const ArticleImageBlockComponent = ({ className, image }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <img className={cls.articleImage} alt="img" src={image} />
    </div>
  );
};
