import styled from 'styled-components';

export const HomeAboutUsContainer = styled.section`
  width: 100%;
  padding: 0 7.5%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  column-gap: 2rem;
  background-color: ${(props) => props.theme.background};

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
  margin: ${({ theme }) => theme.spacing['16px']} 0;
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
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing['16px']};
  ${({ theme }) => theme.shadows.font.light};
  text-align: center;
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.size.base};
  text-align: left;
  max-width: 50em;
  margin-bottom: ${({ theme }) => theme.spacing['24px']};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing['12px']};
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing['4px']};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow-clip-margin: content-box;
  overflow: hidden;
  object-fit: cover;
  border-radius: 2rem 0rem 2rem 0rem;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.size.base};
`;
