import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${spacing['8px']};
`;

export const BreadcrumbLink = styled(NavLink)`
  ${typography.size.base};
  ${typography.weight.medium};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.green800};
  }
`;

export const BreadcrumbText = styled.p``;

export const BreadcrumbWrapper = styled.div`
  display: flex;
  column-gap: ${spacing['8px']};
`;
