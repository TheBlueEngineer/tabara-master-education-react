import useForm from '@hooks/handle-form.hook';
import * as SC from './contact-form.styles';
import FormInput from '../form-input/form-input.component';
import Button from '@components/shared-components/button/button.component';
import {
  validateEmail,
  validateName,
  validatePhone,
} from '@utils/input-validation.utils';

const initFormValues = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  description: '',
};

const ContactForm = () => {
  const { values, errors, handleError, handleOnChange } =
    useForm(initFormValues);

  const handleSubmit = () => {
    console.log(values);
  };

  return (
    <SC.Container>
      <SC.Row>
        <FormInput
          label="Last Name"
          name="lastname"
          type="text"
          placeholder="Jane"
          error={errors.lastname}
          value={values.lastname}
          onChange={handleOnChange}
          errorHandler={handleError}
          validationHandler={validateName}
          required
        />
        <FormInput
          label="First Name"
          name="firstname"
          type="text"
          placeholder="Doe"
          error={errors.firstname}
          value={values.firstname}
          onChange={handleOnChange}
          errorHandler={handleError}
          validationHandler={validateName}
          required
        />
      </SC.Row>
      <SC.Row>
        <FormInput
          label="Phone"
          name="phone"
          type="text"
          placeholder="0776665555"
          maxLength={15}
          error={errors.phone}
          value={values.phone}
          onChange={handleOnChange}
          errorHandler={handleError}
          validationHandler={validatePhone}
          required
        />
        <FormInput
          label="E-mail"
          name="email"
          type="email"
          placeholder="email.address@gmail.com"
          error={errors.email}
          value={values.email}
          onChange={handleOnChange}
          errorHandler={handleError}
          validationHandler={validateEmail}
          required
        />
      </SC.Row>
      <FormInput
        label="Description"
        name="description"
        type="textarea"
        placeholder="Tell us more..."
        error={errors.description}
        value={values.description}
        onChange={handleOnChange}
        errorHandler={handleError}
      />
      <Button
        onClick={handleSubmit}
        shape="leaf"
        size="large"
        onHoverStyle="glow"
      >
        SUBMIT
      </Button>
    </SC.Container>
  );
};

export default ContactForm;
