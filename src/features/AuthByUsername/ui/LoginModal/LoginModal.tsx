import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    lazy
    className={classNames('LoginModal', {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
  >
    <LoginForm />
  </Modal>
);
