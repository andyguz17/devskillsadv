import { Validator } from './form.validators';

export interface IFormState {
  [key: string]: IFormField;
}

export interface IFormField {
  value: any;
  errors?: string[];
  isValid?: boolean;
  validators?: Validator[];
}
