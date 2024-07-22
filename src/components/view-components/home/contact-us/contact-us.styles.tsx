import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray50};
  padding: ${spacing['96px']} 10%;
  column-gap: ${spacing['64px']};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${spacing['32px']};
`;

export const Form = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h1 {
    position: relative;
    ${typography.size.xl2};
    ${typography.weight.bold};
    font-family: 'Roboto Condensed', sans-serif;
    color: ${({ theme }) => theme.colors.green800};
    margin-bottom: ${spacing['8px']};

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 75%;
      height: 1px;
      border: 1px solid ${({ theme }) => theme.colors.green900};
    }
  }

  h2 {
    ${typography.size.xl3};
    ${typography.weight.bold};
    margin-bottom: ${spacing['16px']};
  }

  h3 {
    ${typography.size.xl};
    margin-bottom: ${spacing['8px']};
    color: ${({ theme }) => theme.colors.black};
  }

  & > p {
    ${typography.size.base};
    color: ${({ theme }) => theme.colors.gray900};
    margin-bottom: ${spacing['16px']};
  }

  span {
    color: ${({ theme }) => theme.colors.green800};
  }
`;

export const ContactInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${spacing['8px']};

  & > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: ${spacing['8px']};

    & > svg {
      color: ${({ theme }) => theme.colors.green800};
    }

    & > p {
      ${typography.size.md};
      color: ${({ theme }) => theme.colors.gray800};
    }
  }
`;
