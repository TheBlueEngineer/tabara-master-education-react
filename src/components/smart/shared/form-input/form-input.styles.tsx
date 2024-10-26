import { border, spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${spacing['4px']};
  margin-bottom: ${spacing['8px']};

  & > label {
    ${typography.size.md};
    ${typography.weight.bold};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const InputWrapper = styled.div<{
  $hasError?: boolean;
  $readonly: boolean;
}>`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;
  outline: solid ${border.width.xs};
  outline-color: transparent;
  border-radius: ${border.radius.xs2};
  background-color: ${({ theme }) => theme.colors.white};

  input {
    color: ${({ $readonly, theme }) =>
      $readonly ? theme.colors.gray700 : theme.colors.black};
    font-style: ${({ $readonly }) => ($readonly ? 'italic' : 'initial')};
  }

  &:focus-within {
    outline-color: ${({ theme, $hasError = false }) =>
      $hasError ? theme.colors.red400 : theme.colors.green400};
  }

  & > :first-child {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    pointer-events: ${({ $readonly }) => ($readonly ? 'none' : 'auto')};
  }

  & > :last-child {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &::after {
    content: '';
    position: absolute;
    border-radius: inherit;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 1px 2px 4px 2px hsla(0, 0%, 0%, 0.3);
    pointer-events: none;
  }
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  ${typography.size.md};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.black};
  padding: ${spacing['8px']} ${spacing['16px']};
  transition: border-color 300ms;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    font-style: italic;
  }
`;

export const Error = styled.p`
  ${typography.size.base};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.red400};
  word-wrap: break-word;
`;

export const Description = styled.p`
  ${typography.size.base};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const ValidationIconWrapper = styled.div<{
  $isValid: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing['8px']};
  color: ${({ theme, $isValid }) =>
    $isValid ? theme.colors.green600 : theme.colors.red400};

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 75%;
    left: 0;
    top: 12.5%;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.green500};
  ${typography.weight.bold};
`;
