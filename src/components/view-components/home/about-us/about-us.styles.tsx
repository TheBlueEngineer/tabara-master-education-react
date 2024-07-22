import { border, spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 0 10% ${spacing['128px']} 10%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  column-gap: 2rem;
  background-color: ${({ theme }) => theme.colors.gray50};

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-areas: 'imgLeft imgRightUp' 'imgLeft imgRightDown';
  row-gap: ${spacing['16px']};
  column-gap: ${spacing['16px']};
  height: 35rem;

  img {
    width: 100%;
    height: 100%;
    overflow-clip-margin: content-box;
    overflow: hidden;
    object-fit: cover;
    border-radius: ${border.radius.md} 0rem ${border.radius.md} 0rem;

    &:first-child {
      grid-area: imgLeft;
      margin: ${spacing['16px']} 0;
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }

  h1 {
    position: relative;
    font-family: 'Roboto Condensed', sans-serif;
    ${typography.size.xl2};
    ${typography.weight.black};
    color: ${({ theme }) => theme.colors.green800};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 75%;
      height: 1px;
      border: 1px solid ${({ theme }) => theme.colors.green900};
    }
  }

  h2 {
    ${typography.size.xl3};
    ${typography.weight.bold};
    line-height: 4rem;
    text-align: left;
    margin-bottom: ${spacing['16px']};
    text-align: center;

    @media (min-width: 1024px) {
      text-align: left;
    }
  }

  & > p {
    ${typography.size.base};
    color: ${({ theme }) => theme.colors.gray800};
    text-align: left;
    max-width: 50em;
    margin-bottom: ${spacing['24px']};
  }

  span {
    color: ${({ theme }) => theme.colors.green800};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${spacing['16px']};

  & > li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    column-gap: ${spacing['8px']};
    color: ${({ theme }) => theme.colors.green800};

    & > p {
      ${typography.size.base};
      color: ${({ theme }) => theme.colors.gray900};
    }
  }
`;
