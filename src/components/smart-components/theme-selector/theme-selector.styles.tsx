import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.button.secondary.background};
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const SwitchLabel = styled.label<{ checked: boolean }>`
  ${SwitchInput}:checked + ${Slider} {
    background-color: ${(props) => props.theme.button.primary.background};
  }

  ${SwitchInput}:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;
