import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData, ProfileCard } from 'entities/Profile';

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const { t } = useTranslation();
  return (
    <div className={classNames('', {}, [className])}>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
