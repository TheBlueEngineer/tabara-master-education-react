import {
  border,
  shadows,
  spacing,
  typography,
} from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 22rem;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  align-self: center;
  padding: ${spacing['24px']};
  background-color: white;
  border-radius: ${border.radius.sm};
  box-shadow: ${shadows.elevation.md};
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing['16px']};
  background-color: ${({ theme }) => theme.colors.green100};
`;

export const Title = styled.h2`
  ${typography.size.xl};
  ${typography.weight.bold};
`;

export const Quote = styled.span``;

export const Description = styled.p``;
