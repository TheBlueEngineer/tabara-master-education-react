import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';
import backgroundImage from 'assets/images/home/b_munti1.webp';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 2rem;
  padding-top: ${spacing['96px']};
  padding-bottom: ${spacing['96px']};
  position: relative;
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      `linear-gradient(180deg,${theme.colors.green800},${theme.colors.green950})`};
    mix-blend-mode: multiply;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  position: relative;
  ${typography.size.xl2};
  ${typography.weight.black};
  color: ${({ theme }) => theme.colors.gray100};
  z-index: 1;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray200};
  ${typography.size.xl3};
  z-index: 1;
  margin-bottom: ${spacing['16px']};
`;

export const Description = styled.p`
  ${typography.size.lg};
  ${typography.weight.lighter};
  color: ${({ theme }) => theme.colors.gray200};
  z-index: 1;
  margin-bottom: ${spacing['64px']};
`;
