import { border, spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div<{ $src: string }>`
  width: 100%;
  height: 35rem;
  background-image: ${({ $src }) => `url(${$src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${border.radius.xs};
`;

export const MainInformation = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${spacing['8px']};
  padding: ${spacing['32px']} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};

  h1 {
    ${typography.size.lg};
    ${typography.weight.semibold};
    column-gap: ${spacing['8px']};
  }

  h2 {
    display: flex;
    column-gap: ${spacing['8px']};
    ${typography.size.md};
    ${typography.weight.medium};
    color: ${({ theme }) => theme.colors.gray800};
  }

  a {
    color: ${({ theme }) => theme.colors.blue600};
    ${typography.weight.default};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DetailsGrid = styled.ul`
  display: grid;
  width: 100%;
  padding: ${spacing['32px']} 0;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  row-gap: ${spacing['24px']};
  column-gap: ${spacing['32px']};

  li {
    grid-row: span 1;
    grid-column: span 1;
    column-gap: ${spacing['8px']};
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    svg {
      color: ${({ theme }) => theme.colors.green800};
    }

    p {
      color: ${({ theme }) => theme.colors.gray800};
    }
  }
`;
