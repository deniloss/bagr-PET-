import React, { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  noFill?: boolean
}

export const Icon = memo(({ className, Svg, noFill }: IconProps) => {
  const mods: Mods = {
    [cls.noFill]: noFill,

  };

  return (
    <Svg className={classNames(cls.Icon, mods, [className])} />
  );
});
