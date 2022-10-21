import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        {t('Профиль')}
        <Button
          theme={ThemeButton.OUTLINE}
          size={ButtonSize.M}
          className={cls.editBtn}
        >
          {t('Редактировать')}
        </Button>
      </div>

      <div className={cls.data}>
        <div className={cls.inputCell}>
          <p className={cls.inputName}>
            {t('Ваше имя')}
            :
          </p>
          <Input
            value={data?.firstname}
            type="text"
            className={cls.input}
          />
        </div>

        <div className={cls.inputCell}>
          <p className={cls.inputName}>
            {t('Ваша фамилия')}
            :
          </p>
          <Input
            value={data?.lastname}
            type="text"
            className={cls.input}
          />
        </div>
      </div>
    </div>
  );
};
