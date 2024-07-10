import { spacing } from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  width: 100%;
  padding: ${spacing['64px']} 7.5%;
  background-color: ${({ theme }) => theme.colors.gray100};
  row-gap: ${spacing['32px']};
  column-gap: ${spacing['32px']};
`;
