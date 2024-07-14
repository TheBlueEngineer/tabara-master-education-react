import {
  border,
  shadows,
  spacing,
  typography,
} from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: ${spacing['48px']};
  padding-right: ${spacing['48px']};
  padding-top: ${spacing['96px']};
  padding-bottom: ${spacing['96px']};
  background-image: url('/src/assets/images/home/home_bg.webp');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  width: 100%;
  justify-content: space-evenly;
  row-gap: ${spacing['64px']};
  column-gap: ${spacing['96px']};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.4);
  z-index: 1;
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing['16px']};
  background-color: ${({ theme }) => theme.colors.green700};
  border-right: ${spacing['4px']};
  border-radius: ${border.radius.xs};
  margin-bottom: ${spacing['8px']};
`;

export const Title = styled.h2`
  ${typography.size.xl2};
  ${typography.weight.bolder};
  color: ${({ theme }) => theme.colors.green100};
  ${shadows.font.medium};
`;

export const Subtitle = styled.p`
  ${typography.size.lg};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.green100};
  ${shadows.font.medium};
`;
