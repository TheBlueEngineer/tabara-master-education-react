import styled from 'styled-components';
import { shadows, spacing } from 'src/consts/template.const';
import Button from '@components/shared-components/button/button.component';

export const HeroContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 5rem;
  padding-top: ${spacing['192px']};
  padding-bottom: ${spacing['192px']};
  position: relative;
  background-image: url('/src/assets/images/home/home_bg.webp');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.25);
  z-index: 1;
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

export const CTAButton = styled(Button)``;
