import { FC, TextareaHTMLAttributes } from 'react';
import * as SC from './form-textarea.styles';

type FormTextareaProps = {
  label: string;
  name: string;
  description?: string;
  required?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const FormTextarea: FC<FormTextareaProps> = ({
  label = 'Default Label',
  required = false,
  description = '',
  onChange,
  ...otherProps
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <SC.InputWrapper>
        <SC.Textarea onChange={handleOnChange} {...otherProps} />
      </SC.InputWrapper>

      <SC.Description>{description}</SC.Description>
    </SC.Container>
  );
};

export default FormTextarea;
