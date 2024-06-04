import { FC } from 'react';
import * as SC from './icon-card.styles';

type IconCardProps = {
  iconComponent: React.ReactNode;
  title: string;
  description: string;
};

export const IconCard: FC<IconCardProps> = ({
  iconComponent,
  title,
  description,
}) => {
  return (
    <SC.IconCardContainer>
      {iconComponent}
      <SC.Title>{title}</SC.Title>
      <SC.Description>{description}</SC.Description>
    </SC.IconCardContainer>
  );
};

export default IconCard;
