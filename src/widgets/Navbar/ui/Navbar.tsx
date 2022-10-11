import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(getUserAuthData);
  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  if (user) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        <div className={cls.links}>
          <Button
            theme={ThemeButton.CLEAR_INVERTED}
            className={cls.links}
            onClick={onLogout}
          >
            {t('Выйти')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      <div className={cls.links}>
        <Button
          theme={ThemeButton.CLEAR_INVERTED}
          className={cls.links}
          onClick={() => setIsAuthModal(true)}
        >
          {t('Войти')}
        </Button>
      </div>
    </div>
  );
};
