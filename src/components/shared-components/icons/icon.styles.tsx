import styled from 'styled-components';

type IconWrapperProps = {
  $color: string | null;
  $size: number;
};

const pxToRem = (px: number): string => `${px / 16}rem`;

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) => ($size ? pxToRem($size) : '1rem')};
  color: ${({ $color }) => $color || null};
`;
