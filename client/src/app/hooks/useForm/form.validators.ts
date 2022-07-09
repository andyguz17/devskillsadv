import { isNilOrEmpty } from '../../auth/helpers/helpers';
import { ERRORS } from './form.errors';

export type Validator = (value: any) => {
  isValid: boolean;
  error?: string;
};

export const isRequired: Validator = (value: any) => ({
  isValid: !isNilOrEmpty(value),
  error: isNilOrEmpty(value) ? ERRORS.REQUIRED : undefined,
});

export const minLength =
  (min: number): Validator =>
  (value: string) => ({
    isValid: value.length > min,
    error: value.length < min ? ERRORS.MIN_LENGTH(min) : undefined,
  });

export const isSSN: Validator = (value: any) => {
  const match = value.match(
    /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/
  );
  return {
    isValid: match !== null,
    error: match === null ? ERRORS.SSN : undefined,
  };
};
