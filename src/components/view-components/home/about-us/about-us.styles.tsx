import { border, spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

export const HomeAboutUsContainer = styled.section`
  width: 100%;
  padding: 0 7.5% ${spacing['64px']} 7.5%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  column-gap: 2rem;
  background-color: ${({ theme }) => theme.colors.gray50};

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 1rem;
  column-gap: 1rem;
  flex: 1;
  height: 35rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const ImageBoxLeft = styled.div`
  margin: ${spacing['16px']} 0;
  flex: 1 1 15rem;
`;

export const ImageBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  flex: 1 1 15rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.green800};
`;

export const Title = styled.h1`
  position: relative;
  font-family: 'Roboto Condensed', sans-serif;
  ${typography.size.xl2};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.green800};

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 75%;
    height: 1px;
    border: 1px solid ${({ theme }) => theme.colors.green900};
  }
`;

export const Subtitle = styled.h2`
  ${typography.size.xl3};
  ${typography.weight.bolder};
  text-align: left;
  margin-bottom: ${spacing['16px']};
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Description = styled.p`
  ${typography.size.base};
  color: ${({ theme }) => theme.colors.gray900};
  text-align: left;
  max-width: 50em;
  margin-bottom: ${spacing['24px']};
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.green800};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${spacing['12px']};
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: ${spacing['4px']};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow-clip-margin: content-box;
  overflow: hidden;
  object-fit: cover;
  border-radius: ${border.radius.md} 0rem ${border.radius.md} 0rem;
`;

export const Text = styled.p`
  ${typography.size.base};
`;
