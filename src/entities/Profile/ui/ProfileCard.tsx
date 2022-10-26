import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'app/const/common';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading: boolean
  onChangeFirstName?: (value?: string) => void
  onChangeLastName?: (value?: string) => void
  readonly: boolean
  onChangeCity: (value?: string) => void
  onChangeAge: (value?: string) => void
  onChangeAvatar: (value?: string) => void
  onChangeUsername: (value?: string) => void
  onChangeCountry: (value: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeLastName,
    onChangeFirstName,
    onChangeCity,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      {data?.avatar && <Avatar src={data.avatar} size={50} />}
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
            onChange={onChangeFirstName}
            readonly={readonly}
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
            onChange={onChangeLastName}
            readonly={readonly}
          />
        </div>

        <div className={cls.inputCell}>
          <p className={cls.inputName}>
            {t('Возраст')}
            :
          </p>
          <Input
            value={data?.age}
            type="text"
            className={cls.input}
            onChange={onChangeAge}
            readonly={readonly}
          />
        </div>

        <div className={cls.inputCell}>
          <p className={cls.inputName}>
            {t('Город')}
            :
          </p>
          <Input
            value={data?.city}
            type="text"
            className={cls.input}
            onChange={onChangeCity}
            readonly={readonly}
          />
        </div>

        <div className={cls.inputCell}>
          <p className={cls.inputName}>
            {t('Аватар')}
            :
          </p>
          <Input
            value={data?.avatar}
            type="text"
            className={cls.input}
            onChange={onChangeAvatar}
            readonly={readonly}
          />
        </div>

        <div className={cls.inputCell}>
          <p className={cls.inputName}>
            {t('Страна')}
            :
          </p>
          <Select
            readonly={readonly}
            value={data?.country}
            // @ts-ignore
            onChange={onChangeCountry}
            options={[
              { value: Country.Belarus, content: Country.Belarus },
              { value: Country.USA, content: Country.USA },
              { value: Country.France, content: Country.France },
              { value: Country.Germany, content: Country.Germany },
              { value: Country.Russia, content: Country.Russia },
              { value: Country.Ukraine, content: Country.Ukraine },
            ]}
          />
        </div>

        <div className={cls.inputCell}>
          <p className={cls.inputName}>
            {t('Ник')}
            :
          </p>
          <Input
            value={data?.username}
            type="text"
            className={cls.input}
            onChange={onChangeUsername}
            readonly={readonly}
          />
        </div>
      </div>
    </div>
  );
};
