import { border, spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.colors.gray50},
    ${({ theme }) => theme.colors.gray50}
  );
  padding: ${spacing['96px']} 7.5%;
`;

export const Title = styled.h2`
  position: relative;
  ${typography.size.xl4};
  ${typography.weight.bolder};
  color: ${({ theme }) => theme.colors.green800};
  word-wrap: break-word;

  &:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 1px;
    bottom: 0;
    left: 25%;
    border: 1px solid ${({ theme }) => theme.colors.green800};
  }
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.blue500};
  ${typography.size.xl2};
`;

export const List = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: ${spacing['24px']};
  column-gap: ${spacing['24px']};
`;

export const Destination = styled.div<{ $src: string; $colSpan: number }>`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${spacing['16px']};
  border-radius: ${border.radius.md} 0 ${border.radius.md} 0;
  background-image: url(${({ $src }) => $src});
  height: ${spacing['384px']};
  grid-column: ${({ $colSpan }) => `span ${$colSpan}` || `span: 1`};
`;

export const ImageTitle = styled.h4`
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  ${typography.size.lg};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${spacing['8px']};
  margin-left: ${spacing['16px']};
`;

export const ToursCount = styled.p`
  display: flex;
  position: absolute;
  padding: ${spacing['8px']} ${spacing['8px']};
  border-radius: ${border.radius.sm} 0 ${border.radius.sm} 0;
  border-bottom: ${border.radius.xs} solid
    ${({ theme }) => theme.colors.green400};
  border-right: ${border.radius.xs} solid
    ${({ theme }) => theme.colors.green400};
  color: ${({ theme }) => theme.colors.green50};
  background-color: ${({ theme }) => theme.colors.green700};
  top: 0;
  right: 0;
  ${typography.size.md};
  ${typography.weight.bold};
  margin-top: ${spacing['8px']};
  margin-right: ${spacing['16px']};
`;
