import { ChangeEvent, useState } from 'react';
import { IFormState } from './form.model';

const updateField = (form: IFormState, target: string, value: string) => {
  const newForm = { ...form };
  const errors: string[] = [];

  newForm[target].validators?.forEach(validator => {
    const { error } = validator(value);
    error && errors.push(error);
  });

  newForm[target].value = value;
  newForm[target].errors = errors;
  newForm[target].isValid = errors.length === 0;

  return newForm;
};

export const useForm = (formState: IFormState) => {
  const [form, setState] = useState(formState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setState(updateField(form, target.name, target.value));
  };

  const updateForm = () => {
    let newForm = { ...form };

    Object.keys(newForm).forEach(key => {
      newForm = updateField(newForm, key, newForm[key].value);
    });

    setState(newForm);
  };

  const formIsValid = Object.values(form).every(({ isValid }) => isValid);
  const resetForm = () => setState(formState);

  return { form, handleInputChange, resetForm, formIsValid, updateForm };
};
