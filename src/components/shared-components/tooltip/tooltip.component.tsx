import useToggle from '@hooks/toggle.hooks';
import { FC } from 'react';
import * as SC from './tooltip.styles';

type TooltipProps = {
  text: string;
  position?: 'top' | 'bottom';
  children: React.ReactNode;
};

const Tooltip: FC<TooltipProps> = ({ text, position = 'bottom', children }) => {
  const isVisible = useToggle();
  return (
    <SC.Container
      onMouseEnter={() => isVisible.setToggle(true)}
      onMouseLeave={() => isVisible.setToggle(false)}
    >
      {children}
      <SC.Text $position={position} $isVisible={isVisible.isToggled}>
        {text}
      </SC.Text>
    </SC.Container>
  );
};

export default Tooltip;
