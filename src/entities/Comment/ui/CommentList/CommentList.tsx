import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from 'entities/Comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { t } = useTranslation();

  const { className, comments, isLoading } = props;

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {
        comments?.length
          ? comments.map((comment) => <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />)
          : <Text text={t('Комментарии отсутствуют')} />
      }
    </div>
  );
});
