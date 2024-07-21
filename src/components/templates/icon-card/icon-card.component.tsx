import { FC } from 'react';
import * as SC from './icon-card.styles';
import { IconType } from 'react-icons';

type IconCardProps = {
  Icon: IconType;
  title: string;
  description: string;
};

export const IconCard: FC<IconCardProps> = ({ Icon, title, description }) => {
  return (
    <SC.Container>
      <Icon size={48} />
      <h3>{title}</h3>
      <p>{description}</p>
    </SC.Container>
  );
};

export default IconCard;
