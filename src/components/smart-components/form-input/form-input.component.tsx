import { FC } from 'react';
import * as SC from './form-input.styles';
import Icon from '@components/shared-components/icons/icon.component';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

type FormInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  type: 'text' | 'number' | 'email' | 'textarea';
  maxLength?: number;
  required?: boolean;
  onChange: (name: string, value: string) => void;
  errorHandler: (name: string, value: string) => void;
  validationHandler?: (value: string) => string;
};

const FormInput: FC<FormInputProps> = ({
  name,
  label = 'Default Label',
  placeholder = '',
  type = 'text',
  value,
  error = '',
  maxLength,
  required = false,
  onChange,
  errorHandler,
  validationHandler,
  ...otherProps
}) => {
  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (validationHandler) {
      errorHandler(name, validationHandler(value));
    } else errorHandler(name, '');
    onChange(name, value);
  };

  return (
    <SC.Container>
      <SC.Label>
        {label}
        {required ? <SC.Span>*</SC.Span> : null}
      </SC.Label>
      {type === 'textarea' ? (
        <SC.InputWrapper>
          <SC.Textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
            required={required}
            {...otherProps}
          />
        </SC.InputWrapper>
      ) : (
        <SC.InputWrapper $hasError={error ? true : false}>
          <SC.Input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            onChange={handleOnChange}
            required={required}
            {...otherProps}
          />
          {(value.length > 0 || error) && (
            <SC.ValidationIconWrapper $isValid={error ? false : true}>
              <Icon
                IconComponent={
                  error ? FaRegCircleXmark : IoMdCheckmarkCircleOutline
                }
                size={24}
              />
            </SC.ValidationIconWrapper>
          )}
        </SC.InputWrapper>
      )}
      <SC.Error>{error}</SC.Error>
      <SC.Description></SC.Description>
    </SC.Container>
  );
};

export default FormInput;
