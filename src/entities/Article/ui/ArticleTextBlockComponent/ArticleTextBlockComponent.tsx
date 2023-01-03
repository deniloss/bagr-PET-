import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => (
  <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
    {block.paragraphs.map((item, index) => <Text className={cls.textBlock} text={item} key={index} />)}
  </div>
);
