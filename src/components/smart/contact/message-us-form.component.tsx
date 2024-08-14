import useForm from '@hooks/handle-form.hook';
import * as SC from './message-us-form.styles';
import FormInput from '@components/smart/shared/form-input/form-input.component';
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

const MessageUsForm = () => {
  const { values } = useForm(initFormValues);

  const handleSubmit = () => {
    console.log(values);
  };

  return (
    <SC.Container>
      <SC.Cell>
        <FormInput
          label="Last Name"
          name="lastname"
          type="text"
          placeholder="Jane"
          value={values.lastname}
          validationHandler={validateName}
          required
        />
        <FormInput
          label="First Name"
          name="firstname"
          type="text"
          placeholder="Doe"
          value={values.firstname}
          validationHandler={validateName}
          required
        />
      </SC.Cell>{' '}
      <SC.Cell>
        <FormInput
          label="Phone"
          name="phone"
          type="text"
          placeholder="0776665555"
          maxLength={15}
          value={values.phone}
          validationHandler={validatePhone}
          required
        />
        <FormInput
          label="E-mail"
          name="email"
          type="email"
          placeholder="email.address@gmail.com"
          value={values.email}
          validationHandler={validateEmail}
          required
        />
      </SC.Cell>
      <FormInput
        label="Description"
        name="description"
        type="textarea"
        placeholder="Tell us more..."
        value={values.description}
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

export default MessageUsForm;
