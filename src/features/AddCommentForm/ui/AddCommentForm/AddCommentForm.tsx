import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CommentFormActions } from 'features/AddCommentForm';
import { getCommentFormText } from 'features/AddCommentForm/model/selectors/CommentFormSelectors';
import { useSelector } from 'react-redux';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string
  sendComment: (text: string) => void
}

const AddCommentForm = memo(({ className, sendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getCommentFormText);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(CommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    sendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, sendComment, text]);

  return (
    <div className={classNames(cls.AddCommentForm, {}, [className])}>
      <Input
        className={cls.input}
        placeholder={t('Написать комментарий')}
        type="text"
        value={text}
        onChange={onCommentTextChange}
      />
      <Button
        rounded
        onClick={onSendHandler}
      >
        {t('Отправить')}
      </Button>
    </div>
  );
});

export default AddCommentForm;
