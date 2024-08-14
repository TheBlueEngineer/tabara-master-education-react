import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import * as SC from './form-input.styles';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

type ParentOnChange = {
  (event: ChangeEvent<HTMLInputElement>): void;
  (value: string): void;
  (value: number): void;
};

type FormInputProps = {
  label: string;
  parentOnValueChange?: ParentOnChange;
  validationHandler?: (value: string) => string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
  label = 'Default Label',
  required = false,
  readOnly = false,
  onChange,
  parentOnValueChange,
  validationHandler,
  ...otherProps
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (validationHandler) {
      setError(validationHandler(value));
    }
    if (parentOnValueChange) {
      parentOnValueChange(value);
    }
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <SC.Container>
      <label>
        {label}
        {required ? <SC.Span>*</SC.Span> : null}
      </label>
      <SC.InputWrapper $hasError={error ? true : false} $readonly={readOnly}>
        <SC.Input
          readOnly={readOnly}
          onChange={handleOnChange}
          {...otherProps}
        />
        {error !== null && validationHandler && (
          <SC.ValidationIconWrapper $isValid={error ? false : true}>
            {error ? (
              <FaRegCircleXmark size={'1.5rem'} />
            ) : (
              <IoMdCheckmarkCircleOutline size={'1.5rem'} />
            )}
          </SC.ValidationIconWrapper>
        )}
      </SC.InputWrapper>

      <SC.Error>{error}</SC.Error>
      <SC.Description></SC.Description>
    </SC.Container>
  );
};

export default FormInput;
