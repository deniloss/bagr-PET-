import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  options?: SelectOption[]
  label?: string
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    options,
    label,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionList = useMemo(() => options?.map((item) => (
    <option
      className={cls.option}
      value={item.value}
      key={item.value}
    >
      {item.value}
    </option>
  )), [options]);

  return (
    <div className={classNames(cls.Select, {}, [className])}>
      {label && (
        <span className={cls.label}>{label}</span>
      )}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
});
