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
  padding: ${spacing['32px']} 10%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('/src/assets/images/home/istockphoto-1372132668-170667a.jpg');
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

export const SectionTitle = styled.h2`
  ${typography.size.lg};
  ${typography.weight.bold};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.green800};
`;

export const Link = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.colors.gray800};
`;

export const BottomBar = styled.p`
  color: ${({ theme }) => theme.colors.green50};
  padding: ${spacing['16px']};
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green950};
`;
