import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getProfileData, getProfileReadOnly, profileActions, saveProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadOnly);
  const currentUserData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = currentUserData?.id === profileData?.id;

  const onEdit = () => {
    dispatch(profileActions.onChangeReadOnly(false));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.onChangeReadOnly(true));
    dispatch(profileActions.onCancelEdit());
  };

  const onSave = () => {
    dispatch(saveProfileData(profileData?.id));
  };

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <div className={cls.header}>
        {t('Профиль')}
        {canEdit && (
          <div>
            {readonly
              ? (
                <Button
                  theme={ThemeButton.OUTLINE}
                  size={ButtonSize.M}
                  className={cls.editBtn}
                  onClick={onEdit}
                >
                  {t('Редактировать')}
                </Button>
              )
              : (
                <div>
                  <Button
                    theme={ThemeButton.OUTLINE}
                    size={ButtonSize.M}
                    className={cls.saveBtn}
                    onClick={onSave}
                  >
                    {t('Сохранить')}
                  </Button>

                  <Button
                    theme={ThemeButton.OUTLINE_RED}
                    size={ButtonSize.M}
                    className={cls.cancelEditBtn}
                    onClick={onCancelEdit}
                  >
                    {t('Отменить')}
                  </Button>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
};
