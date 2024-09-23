import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const Text = styled.div<{
  $isVisible: boolean;
  $position: 'top' | 'bottom';
}>`
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 4px;

  /* Positioning */
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position above the element */
  left: 50%;
  transform: translateX(-50%);

  /* Fade in tooltip */
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s;

  /* Arrow below tooltip */
  &::after {
    content: '';
    position: absolute;
    top: 100%; /* Arrow at the bottom */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;
