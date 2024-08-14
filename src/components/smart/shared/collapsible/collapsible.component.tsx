import useToggle from '@hooks/toggle.hooks';
import { FC } from 'react';
import * as SC from './collapsible.styles';

type CollapsibleProps = {
  isOpen?: boolean;
  title: string;
  children: React.ReactNode;
};

const Collapsible: FC<CollapsibleProps> = ({
  isOpen = false,
  title,
  children,
}) => {
  const { isToggled, handleToggle } = useToggle(isOpen);

  return (
    <SC.Container>
      <SC.ButtonHeader onClick={handleToggle}>
        <p>{title}</p>
        <SC.Icon $isOpen={isToggled} size={20} />
      </SC.ButtonHeader>
      <SC.Content $isOpen={isToggled}>{children}</SC.Content>
    </SC.Container>
  );
};

export default Collapsible;
