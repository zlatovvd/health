import css from './Radio.module.css';
import { useState } from 'react';

export const Radio = ({ name, children }) => {

  return (
    <label className={css.radioLabel}>
      <input type="radio" name={name} className={css.inputRadio} />
      <span className={css.radio}></span>
      <span className={css.radioMessage}>{children}</span>
    </label>
  );
};

export const Stack = ({ children, direction = 'row' }) => {
  const stackClass = direction === 'row' ? css.row : css.column;
  return <div className={stackClass}>{children}</div>;
};

