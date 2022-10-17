import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  className?: string
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = ({ className, item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [className])}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
      >
        <item.icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
    </div>
  );
};
