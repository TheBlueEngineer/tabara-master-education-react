import {
  border,
  shadows,
  spacing,
  typography,
} from 'src/consts/template.const';
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
  background: linear-gradient(
    ${({ theme }) => theme.colors.blue50},
    ${({ theme }) => theme.colors.green50}
  );
`;

export const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  position: relative;
  ${typography.size.xl4};
  ${typography.weight.black};
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

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.blue600};
  ${typography.size.xl2};
  margin-bottom: ${spacing['64px']};
`;

export const List = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: ${spacing['32px']};
  column-gap: ${spacing['32px']};
`;

export const Destination = styled.div<{ $src: string; $colSpan: number }>`
  display: flex;
  position: relative;
  width: 100%;
  height: ${spacing['384px']};
  padding: ${spacing['16px']};
  border-radius: ${border.radius.md} 0 ${border.radius.md} 0;
  background-image: url(${({ $src }) => $src});
  grid-column: ${({ $colSpan }) => `span ${$colSpan}` || `span: 1`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow:
    ${shadows.elevation.md},
    inset 4px 6px 22px 0px hsla(0, 0%, 100%, 0.5);
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
  top: 0;
  right: 0;
  ${typography.size.md};
  ${typography.weight.bold};
  padding: ${spacing['8px']} ${spacing['24px']};
  margin-top: ${spacing['8px']};
  margin-right: ${spacing['16px']};
  border-radius: ${border.radius.sm} 0 ${border.radius.sm} 0;
  border-bottom: ${border.width.sm} solid
    ${({ theme }) => theme.colors.green900};
  border-right: ${border.width.sm} solid ${({ theme }) => theme.colors.green900};
  color: ${({ theme }) => theme.colors.green50};
  background: linear-gradient(
    ${({ theme }) => theme.colors.green700},
    ${({ theme }) => theme.colors.green800}
  );
  box-shadow: ${shadows.elevation.md};
`;
