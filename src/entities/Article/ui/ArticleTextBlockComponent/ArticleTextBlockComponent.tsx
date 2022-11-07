import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string
  paragraphs: string[]
}

export const ArticleTextBlockComponent = ({ className, paragraphs }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {paragraphs.map((item) => <Text className={cls.textBlock} text={item} />)}
    </div>
  );
};
