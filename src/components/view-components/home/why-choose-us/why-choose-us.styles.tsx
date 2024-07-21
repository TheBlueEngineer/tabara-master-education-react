import { spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 55rem;
  background: url('/src/assets/images/home/b_munti3.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: absolute;
  width: 65rem;
  height: 100%;

  padding-right: ${spacing['256px']};
  padding-left: 7.5%;
  padding-top: ${spacing['64px']};
  padding-bottom: ${spacing['64px']};

  background-color: hsla(0, 0%, 0%, 0.75);
  clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);

  & > h1 {
    ${typography.size.xl};
    ${typography.weight.bold};
    color: ${({ theme }) => theme.colors.blue400};
    font-family: 'Roboto Condensed', sans-serif;
  }

  & > h2 {
    ${typography.size.xl2}
    ${typography.weight.bold};
    color: ${({ theme }) => theme.colors.blue50};
    text-align: left;
    margin-bottom: ${spacing['32px']};
  }

  & > p {
    ${typography.size.base};
    ${typography.weight.default};
    color: ${({ theme }) => theme.colors.gray200};
    margin-bottom: ${spacing['48px']};
  }

  & > ul {
    display: flex;
    flex-direction: column;
    row-gap: ${spacing['32px']};
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-areas: 'iconWrap title' 'iconWrap description';
  column-gap: ${spacing['16px']};

  & > div {
    grid-area: iconWrap;
    padding: ${spacing['16px']};
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    margin-top: ${spacing['4px']};
    border-radius: ${spacing['24px']} 0 ${spacing['24px']} 0;
    background-color: ${({ theme }) => theme.colors.green500};
  }

  & > h3 {
    grid-area: title;
    justify-self: left;
    ${typography.size.lg};
    ${typography.weight.bold};
    color: ${({ theme }) => theme.colors.gray50};
  }

  & > p {
    grid-area: description;
    ${typography.size.base};
    ${typography.weight.default};
    color: ${({ theme }) => theme.colors.gray200};
  }
`;
