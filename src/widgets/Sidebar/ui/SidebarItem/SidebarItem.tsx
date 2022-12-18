import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  className?: string
  item: SidebarItemType
  collapsed: boolean
  authOnly?: boolean
}

export const SidebarItem = memo(({
  className, item, collapsed, authOnly,
}: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);
  const userData = useSelector(getUserAuthData);

  if (authOnly && !isAuth) {
    return null;
  }

  return (
    <div className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [className])}>
      {item.path === '/profile'
        ? (
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={`${item.path}/${userData?.id}`}
          >
            <item.icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
          </AppLink>
        )
        : (
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
          >
            <item.icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
          </AppLink>
        )}
    </div>
  );
});
