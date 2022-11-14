import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => (
  <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
    <Code>
      {block.code}
    </Code>
  </div>
);
