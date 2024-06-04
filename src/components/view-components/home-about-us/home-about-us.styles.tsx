import styled from 'styled-components';

export const HomeAboutUsContainer = styled.section`
  width: 100%;
  padding: 0 7.5%;
  display: flex;
  flex-direction: row;
  row-gap: 1rem;
  column-gap: 2rem;
`;

export const InformationContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const ImagesContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  row-gap: 1rem;
  column-gap: 1rem;
`;

export const ImageBoxLeft = styled.div`
  width: 50%;
  display: flex;
`;

export const ImageBoxRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
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
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: left;
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Image = styled.img`
  width: 100%;
  height: auto;
  overflow-clip-margin: content-box;
  border-radius: 2rem 0rem 2rem 0rem;
`;
