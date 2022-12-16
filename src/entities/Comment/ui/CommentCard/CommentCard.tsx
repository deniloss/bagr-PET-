import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Comment } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { t } = useTranslation();

  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
        </div>
        <div className={cls.content}>
          <Skeleton className={cls.userName} width="5em" height="15px" />
          <Skeleton className={cls.commentText} width="10em" height="15px" />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        <Avatar src={comment.user.avatar} size={30} />
      </div>
      <div className={cls.content}>
        <Text className={cls.userName} text={comment.user.username} />
        <Text className={cls.commentText} text={comment.text} />
      </div>
    </div>
  );
});
