import { spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray50};
  padding: ${spacing['64px']} 0;
`;

export const Offers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  column-gap: ${spacing['64px']};
  row-gap: ${spacing['32px']};
  padding-top: ${spacing['64px']};
  padding-bottom: ${spacing['64px']};
`;

export const Title = styled.h2`
  position: relative;
  ${typography.size.xl4};
  ${typography.weight.bolder};
  color: ${({ theme }) => theme.colors.green800};
  &:after {
    content: '';
    position: absolute;
    width: 10%;
    height: 1px;
    bottom: 0;
    left: 45%;
    border: 1px solid ${({ theme }) => theme.colors.green700};
  }
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.blue600};
  ${typography.size.xl2};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: ${spacing['16px']};
`;
