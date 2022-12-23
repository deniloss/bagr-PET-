import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import listIcon from 'shared/assets/icons/listView.svg';
import tilesIcon from 'shared/assets/icons/tilesView.svg';
import { ArticleView } from 'entities/Article/model/types/article';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string
  onChangeView?: (view: ArticleView) => void
  view: ArticleView
}

export const ArticleViewSelector = memo(({ className, onChangeView, view }: ArticleViewSelectorProps) => {
  const viewTypes = [
    {
      type: ArticleView.TILES,
      icon: tilesIcon,
    },
    {
      type: ArticleView.LIST,
      icon: listIcon,
    },
  ];

  const onClick = (newView: ArticleView) => () => {
    onChangeView?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType, index) => (
        <Button
          type="button"
          theme={ThemeButton.CLEAR}
          onClick={onClick(viewType.type)}
          key={index}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames(cls.icon, { [cls.notSelected]: viewType.type !== view })}
          />
        </Button>
      ))}
    </div>
  );
});
