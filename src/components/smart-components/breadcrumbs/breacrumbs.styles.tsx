import { spacing, typography } from '@consts/template.const';
import { NavigationLink } from '@layouts/header/header.styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${spacing['8px']};
`;

export const BreadcrumbLink = styled(NavigationLink)`
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
