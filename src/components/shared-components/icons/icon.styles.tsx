import styled, { css } from 'styled-components';
import { fontSize } from 'src/consts/template.const';
import { IconProps } from './icon.component';

type IconWrapperProps = Omit<IconProps, 'IconComponent'>;

const size = {
  smallest: css`
    font-size: ${fontSize['1rem']};
  `,
  small: css`
    font-size: ${fontSize['1.25rem']};
  `,
  medium: css`
    font-size: ${fontSize['1.5rem']};
  `,
  large: css`
    font-size: ${fontSize['2rem']};
  `,
  largest: css`
    font-size: ${fontSize['3rem']};
  `,
};

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => size[props.size || 'small']};
`;
