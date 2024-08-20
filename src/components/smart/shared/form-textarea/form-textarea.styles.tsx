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

export const InputWrapper = styled.div<{ $hasError?: boolean }>`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;
  border: solid ${border.width.xs};
  border-color: ${({ theme }) => theme.colors.green950};
  border-radius: ${border.radius.xs2};
  background-color: ${({ theme }) => theme.colors.gray50};
  box-shadow: inset 0px 2px 6px 2px hsla(0, 0%, 0%, 0.3);

  &:focus-within {
    border-color: ${({ theme, $hasError = false }) =>
      $hasError ? theme.colors.red400 : theme.colors.green400};
  }

  & > :first-child {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  & > :last-child {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`;

export const Textarea = styled.textarea`
  display: flex;
  width: 100%;
  ${typography.size.base};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.green950};
  padding: ${spacing['8px']} ${spacing['16px']};
  background-color: hsla(0, 0%, 0%, 0);
  transition: border-color 300ms;
  resize: vertical;
  min-height: ${spacing['192px']};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    font-style: italic;
  }
`;

export const Description = styled.p`
  ${typography.size.base};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.green500};
  ${typography.weight.bold};
`;
