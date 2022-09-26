import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string
}

// тестовый компонент для проброса ошибки в ErrorBoundary
export const BugButton = ({ className }: BugButtonProps) => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  React.useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button
      type="button"
      onClick={() => setError(true)}
    >
      {t('Прокинуть ошибку')}
    </button>
  );
};
