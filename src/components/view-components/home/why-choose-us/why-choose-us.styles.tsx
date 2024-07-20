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

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: absolute;
  width: 65rem;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.75);
  clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
  padding-right: ${spacing['256px']};
  padding-left: 7.5%;
  padding-top: ${spacing['64px']};
  padding-bottom: ${spacing['64px']};
`;

export const Title = styled.h1`
  ${typography.size.xl};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.blue400};
  font-family: 'Roboto Condensed', sans-serif;
`;

export const Subtitle = styled.h2`
  ${typography.size.xl2}
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.blue50};
  text-align: left;
  margin-bottom: ${spacing['32px']};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${spacing['32px']};
`;

export const Description = styled.p`
  ${typography.size.base};
  ${typography.weight.lighter};
  color: ${({ theme }) => theme.colors.gray200};
  margin-bottom: ${spacing['48px']};
`;

export const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${spacing['16px']};
  align-items: self-start;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RowItemFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing['16px']};
  margin-top: ${spacing['8px']};
  border-radius: ${spacing['24px']} 0 ${spacing['24px']} 0;
  background-color: ${({ theme }) => theme.colors.green500};
`;

export const RowItemTitle = styled.h3`
  ${typography.size.lg};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.gray50};
`;

export const RowItemDescription = styled.p`
  ${typography.size.base};
  ${typography.weight.black};
  color: ${({ theme }) => theme.colors.gray200};
`;
