import { SyntheticEvent } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { isRequired } from '../../hooks/useForm/form.validators';
import { useForm } from '../../hooks/useForm/useForm';
import TextBox from '../../shared/TextBox/TextBox';

import './Login.scss';

const Login = () => {
  const { auth, login } = useAuth();

  const { form, handleInputChange, resetForm, formIsValid } = useForm({
    username: { value: '', validators: [isRequired] },
    password: { value: '', validators: [isRequired] },
  });

  const { username, password } = form;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (formIsValid) {
      login(username.value.toLowerCase().trim(), password.value.trim());
    }

    resetForm();
  };

  return (
    <>
      {auth.loading ? (
        <>Loading</>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextBox
            type="text"
            name="username"
            state={username}
            onChange={handleInputChange}
          />

          <TextBox
            type="password"
            name="password"
            state={password}
            onChange={handleInputChange}
          />

          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
};

export default Login;
