import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getValidateErrors,
  profileActions,
  ProfileCard,
} from 'entities/Profile';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { useSelector } from 'react-redux';
import { Country } from 'app/const/common';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const validateErrorTranslations = {
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка Сервера'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_CITY]: t('Некорректный город'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректные данные пользователя'),
  };

  React.useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getValidateErrors);

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const OnChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    console.log('1');
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <div className={classNames('', {}, [className])}>
      <ProfilePageHeader />
      {validateErrors?.length && validateErrors.map((err) => (
        <Text
          theme={TextTheme.ERROR}
          text={validateErrorTranslations[err]}
          key={err}
        />
      ))}
      <ProfileCard
        data={formData}
        error={error}
        isLoading={isLoading}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        readonly={readonly}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={OnChangeAvatar}
        onChangeCountry={onChangeCountry}
      />
    </div>
  );
};

export default ProfilePage;
