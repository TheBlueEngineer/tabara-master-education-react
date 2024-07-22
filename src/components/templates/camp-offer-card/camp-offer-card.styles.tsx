import {
  border,
  shadows,
  spacing,
  typography,
} from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  width: 25rem;
  border-radius: ${border.radius.xs};
  box-shadow: ${shadows.elevation.lg};
  border-width: ${border.width.xs};
  border-color: ${({ theme }) => theme.colors.gray100};
  padding-bottom: ${spacing['16px']};
  background-color: white;

  img {
    display: flex;
    width: 100%;
    min-height: 15rem;
    position: relative;
    object-fit: contain;
    border-top-left-radius: ${border.radius.xs};
    border-top-right-radius: ${border.radius.xs};

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: hsla(0, 0%, 0%, 0.25);
      z-index: 1;
      border-top-left-radius: ${border.radius.xs};
      border-top-right-radius: ${border.radius.xs};
    }
  }

  h3 {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    ${typography.weight.bold};
    color: ${({ theme }) => theme.colors.green900};
    ${typography.size.xl};
    padding-bottom: ${spacing['4px']};

    &:after {
      content: '';
      position: absolute;
      width: 50%;
      height: 1px;
      bottom: 0;
      left: 25%;
      border: 1px solid ${({ theme }) => theme.colors.green900};
    }
  }
`;

export const Price = styled.p`
  display: flex;
  position: absolute;
  top: 10%;
  left: 0;
  clip-path: polygon(0% 0%, 100% 0, 90% 50%, 100% 100%, 0% 100%);
  padding: ${spacing['4px']} ${spacing['16px']};
  padding-right: ${spacing['32px']};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.blue500},
    ${({ theme }) => theme.colors.blue600}
  );
  color: ${({ theme }) => theme.colors.gray50};
  ${typography.weight.bold};
  ${typography.size.lg};
  z-index: 2;
  box-shadow: ${shadows.elevation.sm};
`;

export const Description = styled.p`
  display: flex;
  color: ${({ theme }) => theme.colors.gray700};
  font-size: ${typography.size.md};
  padding: ${spacing['16px']};
`;

export const DateAndLocation = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-bottom: ${spacing['16px']};

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    vertical-align: center;
    column-gap: ${spacing['8px']};
    color: ${({ theme }) => theme.colors.green800};
    ${typography.size.base};
    ${typography.weight.bold};
  }

  & > p {
    ${typography.weight.bold};
  }
`;
