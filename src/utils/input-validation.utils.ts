export const validateName = (value: string): string => {
  if (value.length == 0) {
    return 'This field is mandatory.';
  } else return '';
};

export const validatePhone = (value: string): string => {
  const regexForNumbers =
    /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  if (value.length == 0) {
    return '';
  }
  if (value.length < 10) {
    return 'Invalid phone number.';
  }
  if (!regexForNumbers.test(value)) {
    return 'Phone number should contain only numbers.';
  }
  return '';
};

export const validateEmail = (value: string): string => {
  const regexForEmails = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regexForEmails.test(value)) {
    return 'Invalid e-mail address.';
  }
  return '';
};
