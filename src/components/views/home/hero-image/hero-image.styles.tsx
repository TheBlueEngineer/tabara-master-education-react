import styled from 'styled-components';
import { border, shadows, spacing, typography } from '@consts/template.const';
import heroImage from 'assets/images/home/home_bg.webp';
import { screens } from '@consts/media-queries.const';

export const Container = styled.section`
  display: flex;
  width: 100%;
  padding-top: ${spacing['192px']};
  padding-bottom: ${spacing['192px']};
  position: relative;
  background-image: url(${heroImage});
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.6);
    z-index: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  row-gap: ${spacing['32px']};
  z-index: 2;
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 900;
  font-size: 4rem;
  text-align: center;
  color: white;
  text-shadow: ${shadows.font.heavy};
  font-family: 'Roboto Condensed', sans-serif;
`;

export const Subtitle = styled.h2`
  display: flex;
  font-weight: 600;
  font-size: 2.5rem;
  text-align: center;
  color: #e0e0e0;
  width: 50%;
  text-shadow: ${shadows.font.heavy};
`;

export const CTAButton = styled.button`
  display: flex;
  ${typography.weight.semibold};
  ${typography.size.lg};
  padding: ${spacing['12px']} ${spacing['24px']};
  margin-left: ${spacing['16px']};
  cursor: pointer;
  box-shadow: ${shadows.elevation.md};
  border-radius: ${border.radius.xs} 0 ${border.radius.xs};
  color: ${({ theme }) => theme.colors.white};
  align-self: center;
  position: relative;
  transition:
    box-shadow 300ms,
    color 300ms,
    border-color 300ms,
    background-color 300ms;
  background: ${({ theme }) =>
    `linear-gradient(135deg,${theme.colors.green700},${theme.colors.green800});`};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0;
    mix-blend-mode: add;
    z-index: 1;
    transition:
      opacity 300ms,
      box-shadow 300ms;
  }

  &:hover::after {
    opacity: 0.2;
  }

  @media ${screens.lg} {
    justify-self: inherit;
  }
`;
