import { spacing } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: auto;
  padding: ${spacing['128px']} 15% ${spacing['96px']} 15%;
  row-gap: ${spacing['16px']};
  column-gap: ${spacing['32px']};
  // Breadcrumbs
  div:first-child {
    grid-column: 1 / span 9;
  }
  // ImageHeader
  div:nth-child(2) {
    grid-column: 1 / span 7;
  }

  //Booking Information
  div:nth-child(3) {
    grid-row: 2/4;
    grid-column: 8 / span 2;
  }
  // Content
  div:nth-child(4) {
    grid-row: 3 / auto;
    grid-column: 1 / span 7;
  }
`;
