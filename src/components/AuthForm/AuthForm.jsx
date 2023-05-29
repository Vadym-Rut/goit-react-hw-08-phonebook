import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  InputStyled,
} from 'components/ContactForm/ContactForm.styled';

const AuthForm = ({ onSubmit, submitTitle, options, initialState }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
	};
	

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {options.map(el => (
        <label key={el.name}>
          <h3>{el.label}</h3>
          <InputStyled
            type={el.type}
            name={el.name}
            value={form[el.name]}
            onChange={handleChange}
            placeholder={el.palceholder}
          />
        </label>
      ))}
      <Button type="submit">{submitTitle}</Button>
    </Form>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  onSubmit: PropTypes.func,
  submitTitle: PropTypes.string,
  initialState: PropTypes.object,
  options: PropTypes.array,
};
