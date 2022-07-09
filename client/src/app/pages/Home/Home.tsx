import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  isRequired,
  isSSN,
  minLength,
} from '../../hooks/useForm/form.validators';
import { useForm } from '../../hooks/useForm/useForm';
import TextBox from '../../shared/TextBox/TextBox';
import { createMember } from '../../store/members/members.actions';
import { AppDispatch, RootState } from '../../store/store';

import './Home.scss';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.members);

  const { form, handleInputChange, resetForm, formIsValid, updateForm } =
    useForm({
      firstName: { value: '', validators: [isRequired, minLength(1)] },
      lastName: { value: '', validators: [isRequired, minLength(1)] },
      address: { value: '', validators: [isRequired, minLength(1)] },
      SSN: { value: '', validators: [isRequired, isSSN] },
    });

  const { firstName, lastName, address, SSN } = form;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (formIsValid) {
      dispatch(
        createMember({
          firstName: firstName.value,
          lastName: lastName.value,
          address: address.value,
          ssn: SSN.value,
        })
      );
    } else {
      updateForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextBox
        type="text"
        name="firstName"
        state={firstName}
        onChange={handleInputChange}
      />

      <TextBox
        type="text"
        name="lastName"
        state={lastName}
        onChange={handleInputChange}
      />

      <TextBox
        type="text"
        name="address"
        state={address}
        onChange={handleInputChange}
      />

      <TextBox
        type="text"
        name="SSN"
        state={SSN}
        onChange={handleInputChange}
      />

      <div className="form-buttons">
        <button type="submit">Save</button>
        <button onClick={resetForm}>Reset</button>
      </div>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default Home;
