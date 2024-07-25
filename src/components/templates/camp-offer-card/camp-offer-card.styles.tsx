import { border, shadows, spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-self: center;
  align-self: center;
  max-width: 30rem;

  border-radius: ${border.radius.xs};
  box-shadow: ${shadows.elevation.lg};
  border-width: ${border.width.xs};
  border-color: ${({ theme }) => theme.colors.gray100};
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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing['16px']} ${spacing['32px']};
  row-gap: ${spacing['24px']};

  & > h3 {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    ${typography.weight.semibold};
    color: ${({ theme }) => theme.colors.green900};
    ${typography.size.xl};

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

  & > h4 {
    display: flex;
    align-self: flex-start;
    align-items: flex-end;
    column-gap: ${spacing['8px']};
    line-height: 1;
  }

  & > p {
    display: flex;
    color: ${({ theme }) => theme.colors.gray700};
    font-size: ${typography.size.md};
  }

  & > button {
    text-transform: uppercase;
  }
`;

export const Price = styled.div`
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

export const DetailsList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${spacing['8px']};

  & > li {
    display: flex;
    align-items: flex-start;
    column-gap: ${spacing['8px']};
    color: ${({ theme }) => theme.colors.gray800};
    ${typography.size.base};
    ${typography.weight.medium};

    & > svg {
      ${typography.size.md};
    }
  }
`;
