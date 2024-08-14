import { useEffect, useState } from 'react';

type FormValues = {
  [key: string]: string | number;
};

const useForm = (initFormValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initFormValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleOnChange = (name: string, value: string | number) => {
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

  useEffect(() => {
    console.log('State changed', values);
  }, [values]);

  return { values, errors, handleOnChange, handleError };
};

export default useForm;
