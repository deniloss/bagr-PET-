import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

const article = [{
  id: '1',
  title: 'JavaScript 2022',
  subtitle: "What's new?",
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png',
  views: 12,
  createdAt: '26.02.2022',
  type: [
    'IT',
    'JS',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'First param',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros metus, aliquet a nisi at, rutrum aliquam lectus. Integer \nornare dictum libero, a auctor dui bibendum eget. Nullam imperdiet ipsum quis lacus posuere sodales. Cras non malesuada sapien.\n Phasellus consectetur luctus sem, gravida elementum leo tempor ut. Nullam nec suscipit nulla, vitae porta neque. \nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas varius lorem vitae \nleo placerat placerat. Sed eu molestie est, vitae efficitur justo. Nulla fermentum metus lorem, in sagittis lorem pharetra at.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros metus, aliquet a nisi at, rutrum aliquam lectus. Integer \nornare dictum libero, a auctor dui bibendum eget. Nullam imperdiet ipsum quis lacus posuere sodales. Cras non malesuada sapien.\n Phasellus consectetur luctus sem, gravida elementum leo tempor ut. Nullam nec suscipit nulla, vitae porta neque. \nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas varius lorem vitae \nleo placerat placerat. Sed eu molestie est, vitae efficitur justo. Nulla fermentum metus lorem, in sagittis lorem pharetra at.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros metus, aliquet a nisi at, rutrum aliquam lectus. Integer \nornare dictum libero, a auctor dui bibendum eget. Nullam imperdiet ipsum quis lacus posuere sodales. Cras non malesuada sapien.\n Phasellus consectetur luctus sem, gravida elementum leo tempor ut. Nullam nec suscipit nulla, vitae porta neque. \nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas varius lorem vitae \nleo placerat placerat. Sed eu molestie est, vitae efficitur justo. Nulla fermentum metus lorem, in sagittis lorem pharetra at.',
      ],
    },
    {
      id: '2',
      type: 'CODE',
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
    },
    {
      id: '3',
      type: 'IMAGE',
      src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      title: 'Рисунок 1',
    },
    {
      id: '4',
      type: 'WARNING',
      warningType: 'success',
      title: 'Warning tip!',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error facere iusto quam quibusdam rem tempore. Eaque hic minima nisi!',
    },
  ],
}] as Article[];

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList articles={article} />
    </div>
  );
};

export default ArticlesPage;
