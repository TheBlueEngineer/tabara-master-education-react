import styled from 'styled-components';
import {
  border,
  spacing,
  shadows,
  typography,
} from 'src/consts/template.const';

export const Container = styled.div`
  // Position
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // Size
  padding-top: ${spacing['160px']};
  padding-bottom: ${spacing['32px']};
  box-shadow:
    ${shadows.elevation.md},
    inset 4px 4px 16px 0px hsla(0, 0%, 100%, 0.3);
  border-top-left-radius: ${border.radius.md};
  border-top-right-radius: ${border.radius.md};
  border-bottom-left-radius: ${border.radius.sm};
  border-bottom-right-radius: ${border.radius.sm};
  background: ${({ theme }) =>
    `linear-gradient(180deg,${theme.colors.green800} 50%, ${theme.colors.green800} 50%)`};
`;

export const Frame = styled.div<{ $src: string }>`
  // Position
  display: flex;
  justify-content: center;
  align-items: center;
  // Size
  width: ${spacing['192px']};
  height: ${spacing['192px']};
  margin-top: -${spacing['128px']};
  margin-bottom: ${spacing['16px']};
  border-radius: 100%;
  border: solid ${border.width.sm};
  border-color: ${({ theme }) => theme.colors.white};
  outline: solid ${border.width.md};
  outline-color: ${({ theme }) => theme.colors.green800};
  color: ${({ theme }) => theme.colors.green900};
  // Background
  background: url(${({ $src }) => $src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // Other
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  flex-grow: 1;
`;

export const Name = styled.p`
  position: relative;
  ${typography.size.xl};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.green950};
  margin-bottom: ${spacing['4px']};

  &:after {
    content: '';
    position: absolute;
    width: 60%;
    height: 1px;
    bottom: 0;
    left: 20%;
    border: 1px solid ${({ theme }) => theme.colors.green800};
  }
`;

export const Profession = styled.p`
  ${typography.size.lg};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.blue500};
`;

export const Description = styled.p`
  display: flex;
  width: 100%;
  padding: ${spacing['16px']} ${spacing['32px']};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray800};
  ${typography.size.base};
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  column-gap: ${spacing['16px']};
  border-top: ${border.width.xs} solid ${({ theme }) => theme.colors.blue500};
  margin-top: ${spacing['24px']};
`;

export const LinkButton = styled.button`
  padding: ${spacing['8px']};
  border-radius: 100%;
  border: solid ${border.width.xs};
  border-color: ${({ theme }) => theme.colors.blue500};
  color: ${({ theme }) => theme.colors.blue600};
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateY(-50%);
  cursor: pointer;
  transition:
    color 300ms,
    border-color 300ms;

  &:hover {
    color: ${({ theme }) => theme.colors.blue400};
    border-color: ${({ theme }) => theme.colors.blue400};
  }
`;
