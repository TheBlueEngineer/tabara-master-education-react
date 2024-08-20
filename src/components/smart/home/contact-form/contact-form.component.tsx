import * as SC from './contact-form.styles';
import FormInput from '../../shared/form-input/form-input.component';
import Button from '@components/shared-components/button/button.component';
import {
  validateEmail,
  validateName,
  validatePhone,
} from '@utils/input-validation.utils';
import { FormEvent } from 'react';
import useEmailJS from '@hooks/email.hook';
import FormTextarea from '@components/smart/shared/form-textarea/form-textarea.component';

const ContactForm = () => {
  const { sendEmail } = useEmailJS();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendEmail(event, 'MESSAGE');
  };

  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Row>
        <FormInput
          label="Last Name"
          name="lastname"
          type="text"
          placeholder="Jane"
          validationHandler={validateName}
          required
        />
        <FormInput
          label="First Name"
          name="firstname"
          type="text"
          placeholder="Doe"
          validationHandler={validateName}
          required
        />
      </SC.Row>
      <FormInput
        label="Phone"
        name="phone"
        type="text"
        placeholder="0776665555"
        maxLength={15}
        validationHandler={validatePhone}
        required
      />
      <FormInput
        label="E-mail"
        name="email"
        type="email"
        placeholder="email.address@gmail.com"
        validationHandler={validateEmail}
        required
      />
      <FormTextarea
        label="Description"
        name="description"
        placeholder="Tell us more..."
      />
      <Button type="submit" shape="leaf" size="large" onHoverStyle="glow">
        SUBMIT
      </Button>
    </SC.Form>
  );
};

export default ContactForm;
