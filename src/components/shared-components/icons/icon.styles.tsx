import styled, { css } from 'styled-components';
import { typography } from 'src/consts/template.const';

type IconWrapperProps = {
  $size?: 'small' | 'medium' | 'large';
  $variant?: 'primary' | 'framed';
};

const iconSize = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        ${typography.size.sm};
      `;
    case 'medium':
      return css`
        ${typography.size.md};
      `;
    case 'large':
      return css`
        ${typography.size.lg};
      `;
  }
};

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $size }) => iconSize($size || 'medium')}
`;

IconWrapper.defaultProps = {
  $size: 'medium',
};
