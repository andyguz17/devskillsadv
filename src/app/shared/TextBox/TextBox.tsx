import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

import { ERRORS } from '../../hooks/useForm/form.errors';
import { IFormField } from '../../hooks/useForm/form.model';

import './TextBox.scss';

interface ITextBoxProps {
  name: string;
  label?: string;
  state: IFormField;
  type?: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextBox = ({
  name,
  state,
  onChange,
  label = name,
  type = 'text',
}: ITextBoxProps) => (
  <div className="text-box">
    <label
      htmlFor={name}
      children={label}
      className={
        state.errors?.find(error => error === ERRORS.REQUIRED) && 'required'
      }
    />

    <input
      id={name}
      type={type}
      name={name}
      value={state.value}
      autoComplete="off"
      onChange={onChange}
    />

    {state.errors
      ?.filter(error => error !== ERRORS.REQUIRED)
      .map(error => (
        <span key={error}>{error}</span>
      ))}
  </div>
);

export default TextBox;
