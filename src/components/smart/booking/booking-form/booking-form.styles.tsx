import { border, shadows, spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Content = styled.form`
  display: flex;
  width: 100%;
  flex-direction: row;
  border-radius: ${border.width.xl};
  box-shadow: ${shadows.elevation.lg};
  z-index: 2;
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  padding: ${spacing['64px']};
  background-color: ${({ theme }) => theme.colors.green900};
  column-gap: ${spacing['16px']};

  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

export const PaymentInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${spacing['64px']};
  background-color: ${({ theme }) => theme.colors.white};
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  color: ${({ theme }) => theme.colors.gray900};
  row-gap: ${spacing['32px']};

  h2 {
    grid-template-columns: 1;
    ${typography.size.lg};
    ${typography.weight.semibold};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.black};
    text-align: left;
  }
  & > p {
    font-style: italic;
    color: ${({ theme }) => theme.colors.gray600};
    svg {
      margin-right: ${spacing['8px']};
    }
  }
`;

export const Payments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  row-gap: ${spacing['16px']};
`;

export const Filler = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  ${typography.size.base};
  ${typography.weight.medium};
  text-align: left;
  ${({ theme }) => theme.colors.gray900};

  &:last-of-type {
    ${typography.size.md};
    ${typography.weight.semibold};
    border-top: 1px solid ${({ theme }) => theme.colors.gray300};
    padding-top: ${spacing['16px']};
  }
`;
