import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
`;

export const HeroImageContainer = styled.section`
  background-image: url('/src/assets/images/home/hero_image.jpg');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  padding: 10rem 0rem 15rem 0rem;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 900;
  font-size: 4rem;
  text-align: center;
  color: white;
  text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.5);
`;

export const Subtitle = styled.h2`
  display: flex;
  font-weight: 600;
  font-size: 2.5rem;
  text-align: center;
  color: #e0e0e0;
  width: 50%;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const CTAButton = styled.button`
  display: flex;
  background-color: green;
  padding: 1rem;
  color: white;
  font-size: 1.8rem;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
`;
