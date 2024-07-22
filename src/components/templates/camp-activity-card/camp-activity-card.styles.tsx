import { border, shadows, spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  align-self: center;
  padding: 0 ${spacing['32px']} ${spacing['64px']} ${spacing['32px']};
  border-radius: ${border.radius.sm};

  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: ${shadows.elevation.lg};
    object-fit: cover;
  }

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(hsla(0, 100%, 0%, 0.4), hsla(0, 100%, 0%, 0.6));
    border-radius: inherit;
    box-shadow: inset 0px 6px 12px 0px hsl(0, 0%, 100%, 0.5);
  }

  & > h2 {
    position: relative;
    ${typography.size.xl2};
    ${typography.weight.bold};
    text-transform: uppercase;
    margin-top: ${spacing['16px']};
    margin-bottom: ${spacing['16px']};
    color: ${({ theme }) => theme.colors.green50};
    z-index: 1;

    &:after {
      content: '';
      position: absolute;
      width: 50%;
      height: 1px;
      bottom: 0;
      left: 25%;
      border: 1px solid ${({ theme }) => theme.colors.green500};
    }
  }

  & > p {
    ${typography.size.md};
    color: ${({ theme }) => theme.colors.gray100};
    text-align: center;
    z-index: 1;
  }
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing['32px']};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.green200},
    ${({ theme }) => theme.colors.green400}
  );
  border-radius: 100%;
  border: solid ${border.width.sm} white;
  box-shadow: ${shadows.elevation.sm};
  margin-top: -${spacing['64px']};
  color: ${({ theme }) => theme.colors.green900};
  z-index: 1;
`;
