import { FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const TEMPLATE_ID_MESSAGE = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID_RO;
const TEMPLATE_ID_BOOKING = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID_RO;
const USER_ID = import.meta.env.VITE_EMAIL_JS_USER_ID;

const getTemplateID = (templateType: string): null | string => {
  switch (templateType) {
    case 'BOOKING':
      return TEMPLATE_ID_BOOKING;
    case 'MESSAGE':
      return TEMPLATE_ID_MESSAGE;
    default:
      return null;
  }
};

const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendEmail = async (
    event: FormEvent<HTMLFormElement>,
    templateType: 'BOOKING' | 'MESSAGE'
  ) => {
    const formCurrentTarget = event.currentTarget;
    const templateID = getTemplateID(templateType);

    if (!templateID) {
      throw new Error(
        'getTemplateID returned null, the provided templateType was not valid.'
      );
    }

    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await emailjs.sendForm(
        SERVICE_ID,
        templateID,
        event.currentTarget,
        USER_ID
      );
      if (!response) {
        throw new Error('EmailJS system did not respond');
      }
      formCurrentTarget.reset();
      alert('Email has been sent succesfully');
    } catch (error) {
      console.error('sendEmail caught an error: ', error);
      alert('Email failed to be sent');
    } finally {
      setIsLoading(false);
    }
  };
  return { sendEmail, isLoading };
};

export default useEmailJS;
