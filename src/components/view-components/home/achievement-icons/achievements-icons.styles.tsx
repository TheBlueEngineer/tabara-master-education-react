import {
  borderRadius,
  colorsPalette,
  fontSize,
  fontWeight,
  spacing,
} from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: ${spacing['3rem']};
  padding-right: ${spacing['3rem']};
  padding-top: ${spacing['6rem']};
  padding-bottom: ${spacing['6rem']};
  background-color: hsla(0, 0%, 0%, 0.5);
  width: 100%;
  justify-content: space-evenly;
  row-gap: ${spacing['4rem']};
  column-gap: ${spacing['6rem']};
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing['1rem']};
  background-color: ${colorsPalette.yellowGreen[300]};
  border-right: ${spacing['0.25rem']};
  border-radius: ${borderRadius['1rem']};
`;

export const Title = styled.h2`
  font-size: ${fontSize['2.25rem']};
  font-weight: ${fontWeight[900]};
`;

export const Subtitle = styled.p`
  font-size: ${fontSize['1.125rem']};
  font-weight: ${fontWeight[400]};
`;
