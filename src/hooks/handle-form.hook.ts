import { useState } from 'react';

type FormValues = {
  [key: string]: string;
};

const useForm = (initFormValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initFormValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleOnChange = (name: string, value: string) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleError = (name: string, errorValue: string) => {
    setErrors({
      ...errors,
      [name]: errorValue,
    });
  };

  return { values, errors, handleOnChange, handleError };
};

export default useForm;
