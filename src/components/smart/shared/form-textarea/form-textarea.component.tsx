import { FC, TextareaHTMLAttributes } from 'react';
import * as SC from './form-textarea.styles';

type FormTextareaProps = {
  label: string;
  name: string;
  value: string | number;
  error: string | number | undefined;
  description?: string;
  required?: boolean;
  changeHandler?: (name: string, value: string | number) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const FormTextarea: FC<FormTextareaProps> = ({
  name,
  label = 'Default Label',
  value,
  error = '',
  required = false,
  description = '',
  changeHandler,
  ...otherProps
}) => {
  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (!changeHandler) return;
    changeHandler(name, value);
  };

  return (
    <SC.Container>
      <label>
        {label}
        {required ? <SC.Span>*</SC.Span> : null}
      </label>
      <SC.InputWrapper>
        <SC.Textarea
          name={name}
          value={value}
          onChange={changeHandler ? handleOnChange : undefined}
          {...otherProps}
        />
      </SC.InputWrapper>

      <SC.Error>{error}</SC.Error>
      <SC.Description>{description}</SC.Description>
    </SC.Container>
  );
};

export default FormTextarea;
