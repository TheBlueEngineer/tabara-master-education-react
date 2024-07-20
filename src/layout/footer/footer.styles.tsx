import { NavLink } from 'react-router-dom';
import { spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;

  width: 100%;
  flex-direction: column;
`;

export const Grid = styled.section`
  display: grid;
  width: 100%;
  position: relative;
  padding: ${spacing['64px']} 10%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('/src/assets/images/home/istockphoto-1372132668-170667a.jpg');
    background-size: contain;
    opacity: 0.2;
    z-index: 1;
  }
`;

export const GridSection = styled.div`
  display: flex;
  width: 100%;
  grid-row: span 2;
  grid-column: span 1;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
`;

export const FirstList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const SectionTitle = styled.h2`
  position: relative;
  ${typography.size.xl};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.green950};
  margin-bottom: ${spacing['24px']};

  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 1px;
    bottom: 0;
    left: 0;
    border: 1px solid ${({ theme }) => theme.colors.green900};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${spacing['12px']};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.green800};
  column-gap: ${spacing['8px']};
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

export const BottomBar = styled.p`
  color: ${({ theme }) => theme.colors.green50};
  padding: ${spacing['16px']};
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green950};
`;

export const Logo = styled.img`
  width: ${spacing['96px']};
  height: ${spacing['96px']};
`;

export const LogoTitle = styled.h3`
  ${typography.size.lg};
  text-align: left;
  color: ${({ theme }) => theme.colors.green900};
  span {
    color: ${({ theme }) => theme.colors.blue600};
  }
`;

export const LogoDescription = styled.p`
  ${typography.size.md};
  color: ${({ theme }) => theme.colors.gray800};
`;

export const ContactInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${spacing['8px']};
`;

export const ContactInfoItem = styled.li`
  display: flex;
  flex-direction: row;
  column-gap: ${spacing['8px']};
  align-items: center;
  color: ${({ theme }) => theme.colors.green800};
`;

export const ContactText = styled.p`
  ${typography.size.base};
  ${typography.weight.medium};
  color: ${({ theme }) => theme.colors.gray800};
`;
