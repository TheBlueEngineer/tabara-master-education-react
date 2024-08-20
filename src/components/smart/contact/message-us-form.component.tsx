import * as SC from './message-us-form.styles';
import FormInput from '@components/smart/shared/form-input/form-input.component';
import Button from '@components/shared-components/button/button.component';
import {
  validateEmail,
  validateName,
  validatePhone,
} from '@utils/input-validation.utils';
import useEmailJS from '@hooks/email.hook';
import { FormEvent } from 'react';
import FormTextarea from '../shared/form-textarea/form-textarea.component';

const MessageUsForm = () => {
  const { sendEmail } = useEmailJS();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendEmail(event, 'MESSAGE');
  };

  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Cell>
        <FormInput
          label="Last Name"
          name="lastname"
          placeholder="Jane"
          validationHandler={validateName}
          required
        />
        <FormInput
          label="First Name"
          name="firstname"
          placeholder="Doe"
          validationHandler={validateName}
          required
        />
      </SC.Cell>

      <FormInput
        label="Phone"
        name="phone"
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

export default MessageUsForm;
