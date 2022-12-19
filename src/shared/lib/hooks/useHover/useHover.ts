import { useCallback, useMemo, useState } from 'react';

interface useHoverBinds {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export type useHoverResult = [boolean, useHoverBinds]

export const useHover = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(() => [
    isHover,
    {
      onMouseEnter,
      onMouseLeave,
    },
  ], [isHover, onMouseEnter, onMouseLeave]);
};
