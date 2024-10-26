import styled from 'styled-components';
import { spacing, typography } from '@consts/template.const';
import bgImage from 'assets/images/home/b_munti3.webp';
import { screens } from '@consts/media-queries.const';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  background-image: url(${bgImage});
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: ${spacing['96px']} 10%;
  padding-top: ${spacing['128px']};
  z-index: 0;

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
      ${theme.colors.gray800},
      ${theme.colors.gray400},
      ${theme.colors.white}
    )`};
    opacity: 0.6;
    z-index: 1;
  }

  & > h1 {
    font-family: 'Roboto Condensed', sans-serif;
    position: relative;
    ${typography.size.xl4};
    ${typography.weight.black};
    color: ${({ theme }) => theme.colors.white};

    &:after {
      content: '';
      position: absolute;
      width: 10%;
      height: 1px;
      bottom: 0;
      left: 45%;
      border: 1px solid ${({ theme }) => theme.colors.white};
    }
    z-index: 2;
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.gray200};
    ${typography.size.xl2};
    z-index: 2;
  }
`;

export const Offers = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1;
  grid-template-rows: auto;

  padding-top: ${spacing['64px']};
  padding-bottom: ${spacing['64px']};
  z-index: 3;

  @media ${screens.sm} {
    grid-template-columns: 2;
    grid-template-rows: auto;
    column-gap: ${spacing['96px']};
    row-gap: ${spacing['64px']};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: ${spacing['16px']};
`;
