import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.M}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {SidebarItemsList.map((item) => (
          <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
            authOnly={item.authOnly}
          />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
