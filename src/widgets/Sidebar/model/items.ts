import React from 'react';
import MainIcon from 'shared/assets/icons/link-to-main.svg';
import AboutIcon from 'shared/assets/icons/link-to-about.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';

export type SidebarItemType = {
  path: string
  text: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: '/',
    icon: MainIcon,
    text: 'Главная',
  },
  {
    path: '/about',
    icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: '/profile',
    icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true,
  },
];
