import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => (
  <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
    {/* eslint-disable-next-line i18next/no-literal-string */}
    <img className={cls.articleImage} alt="img" src={block.src} />
    <Text text={block.title} align={TextAlign.CENTER} size={TextSize.M} />
  </div>
);
