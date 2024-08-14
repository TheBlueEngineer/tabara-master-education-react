import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${spacing['16px']} 0;
  padding-bottom: ${spacing['32px']};
  row-gap: ${spacing['16px']};
  h2 {
    text-align: left;
    ${typography.size.lg};
    ${typography.weight.semibold};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;

  & li:not(:last-of-type)::before {
    display: flex;
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    border-left: 2px solid ${({ theme }) => theme.colors.green700};
    left: 7px;
    align-self: center;
    z-index: 2;
    top: 8px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: ${spacing['8px']};

  span {
    ${typography.weight.medium};
    ${typography.size.md};
    color: ${({ theme }) => theme.colors.green800};
  }

  h3 {
    ${typography.weight.medium};
    ${typography.size.md};
    color: ${({ theme }) => theme.colors.black};
  }

  &::before {
    content: '';
    position: relative;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 4px solid ${({ theme }) => theme.colors.green700};
    border-radius: 100%;
    left: 0;
    align-self: center;
    z-index: 2;
    margin-right: ${spacing['16px']};
  }

  &:first-child::after {
    top: 18px;
  }

  &:last-child::after {
    bottom: 18px;
  }
`;

export const Details = styled.ul`
  list-style: disc inside none;
  margin-bottom: ${spacing['8px']};

  li {
    margin-left: ${spacing['32px']};
    color: ${({ theme }) => theme.colors.gray800};
  }

  svg {
    margin-right: ${spacing['8px']};
  }
`;

export const Content = styled.div`
  position: relative;
  margin-left: ${spacing['32px']};
  color: ${({ theme }) => theme.colors.gray700};
  margin-bottom: ${spacing['16px']};
`;
