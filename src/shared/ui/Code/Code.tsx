import React, { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import copyIcon from 'shared/assets/icons/copy-icon.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string
  children: ReactNode
}

export const Code = memo(({ className, children }: CodeProps) => {
  const { t } = useTranslation();
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} className={cls.copyBtn}>
        <Icon noFill Svg={copyIcon} />
      </Button>
      <code>
        {children}
      </code>
    </pre>
  );
});
