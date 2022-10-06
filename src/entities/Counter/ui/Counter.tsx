import { useDispatch, useSelector } from 'react-redux';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);
  const { t } = useTranslation();
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <p>{value}</p>
      <Button
        theme={ThemeButton.OUTLINE}
        onClick={increment}
      >
        {t('увеличить')}
      </Button>
      <Button
        theme={ThemeButton.OUTLINE}
        onClick={decrement}
      >
        {t('уменьшить')}
      </Button>
    </div>
  );
};
