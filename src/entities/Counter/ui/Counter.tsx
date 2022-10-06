import { useDispatch, useSelector } from 'react-redux';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <p>
        value =
        {value}
      </p>
      <Button
        theme={ThemeButton.OUTLINE}
        onClick={increment}
        {/* eslint-disable-next-line i18next/no-literal-string */}
      >
        increment
      </Button>
      <Button
        theme={ThemeButton.OUTLINE}
        onClick={decrement}
      >
        decrement
      </Button>
    </div>
  );
};
