import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy-icon.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
  const { t } = useTranslation();

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} theme={ThemeButton.CLEAR} className={cls.copyBtn}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code className={cls.codeText}>
        {text}
      </code>
    </pre>
  );
});
