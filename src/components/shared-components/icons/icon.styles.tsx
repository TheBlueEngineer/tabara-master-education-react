import styled, { css } from 'styled-components';
import { IconProps } from './icon.component';
import { ThemeType } from '../../../consts/themes.const';

type IconWrapperProps = Omit<IconProps, 'IconComponent'>;

const iconSize = (theme: ThemeType, size: string) => {
  switch (size) {
    case 'small':
      return css`
        font-size: ${theme.typography.font.size.sm};
      `;
    case 'medium':
      return css`
        font-size: ${theme.typography.font.size.md};
      `;
    case 'large':
      return css`
        font-size: ${theme.typography.font.size.lg};
      `;
  }
};

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme, size }) => iconSize(theme, size || 'medium')}
`;

IconWrapper.defaultProps = {
  size: 'medium',
};
