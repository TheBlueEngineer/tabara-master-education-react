import { spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Thumbnail = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
`;

export const Overlay = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.9)
  );
  opacity: 0;
  transition: opacity 300ms;
  z-index: 2;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing['32px']};
  border-radius: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
  color: white;

  & > svg {
    ${typography.size.xl};
  }
`;
