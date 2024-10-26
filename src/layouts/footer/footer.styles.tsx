import { NavLink } from 'react-router-dom';
import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

import treeBackground from 'assets/images/home/istockphoto-1372132668-170667a.jpg';
import { screens } from '@consts/media-queries.const';

export const Whitespace = styled.div`
  width: 100%;
  height: 51px;

  @media ${screens.sm} {
    height: 0;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};

  & > section {
    display: grid;
    width: 100%;
    position: relative;
    padding: ${spacing['96px']} 10%;
    row-gap: ${spacing['24px']};
    column-gap: ${spacing['12px']};
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    z-index: 0;

    @media ${screens.sm} {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media ${screens.lg} {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(${treeBackground});
      background-size: contain;
      background-repeat: repeat-x;
      background-position: bottom;
      opacity: 0.2;
      z-index: 1;
    }
  }

  & > p {
    color: ${({ theme }) => theme.colors.green50};
    padding: ${spacing['16px']};
    text-align: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.green950};
  }
`;

export const GridSection = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  row-gap: ${spacing['12px']};

  & > img {
    width: ${spacing['96px']};
    height: ${spacing['96px']};
  }

  & > h2 {
    position: relative;
    ${typography.size.xl};
    ${typography.weight.bold};
    color: ${({ theme }) => theme.colors.green950};
  }

  & > h3 {
    ${typography.size.lg};
    text-align: left;
    color: ${({ theme }) => theme.colors.green900};
    span {
      color: ${({ theme }) => theme.colors.blue600};
    }
  }

  & > p {
    ${typography.size.md};
    color: ${({ theme }) => theme.colors.gray800};
  }

  & > li {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    color: ${({ theme }) => theme.colors.green800};
    column-gap: ${spacing['8px']};
  }

  &:first-child {
    align-items: left;
  }

  @media ${screens.md} {
    & > li {
      align-items: left;
    }
  }
`;

export const Link = styled(NavLink)`
  ${typography.size.md};
  ${typography.weight.medium};
  color: ${({ theme }) => theme.colors.gray800};
  transition: color 300ms;

  &:hover {
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
    column-gap: ${spacing['8px']};
    align-items: center;
    color: ${({ theme }) => theme.colors.green800};

    & > p {
      ${typography.size.base};
      ${typography.weight.medium};
      color: ${({ theme }) => theme.colors.gray800};
    }
  }
`;
