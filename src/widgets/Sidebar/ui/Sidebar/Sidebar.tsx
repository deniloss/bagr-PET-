import React, { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSelector } from 'widgets/ThemeSelector'
import { LanguageSelector } from 'widgets/LanguageSelector'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSelector />
        <LanguageSelector className={cls.langButton} />
      </div>
    </div>
  )
}
