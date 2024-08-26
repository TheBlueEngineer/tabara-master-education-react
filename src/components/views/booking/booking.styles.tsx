import styled from 'styled-components';

import bgImage from 'assets/images/home/b_munti1.webp';
import { border, spacing } from '@consts/template.const';

export const Container = styled.section<{ $url: string | undefined }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: ${spacing['160px']} 20% ${spacing['128px']} 20%;
  row-gap: ${spacing['32px']};
  column-gap: ${spacing['32px']};
  background-image: url(${({ $url }) => ($url ? $url : bgImage)});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${({ theme }) => `linear-gradient(
      in hsl longer hue to bottom,
      ${theme.colors.black},
      ${theme.colors.gray400},
      ${theme.colors.white}
    )`};
    opacity: 0.5;
    z-index: 1;
  }
`;

export const BreadcrumbWrapper = styled.div`
  display: flex;
  padding: ${spacing['16px']} ${spacing['32px']};
  border-radius: ${border.radius.xs};
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 2;
`;
