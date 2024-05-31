import { FC } from 'react';
import * as SC from './icon-card.styles';

type IconCardProps = {
  iconUrl: string;
  title: string;
  description: string;
};

export const IconCard: FC<IconCardProps> = ({
  iconUrl,
  title,
  description,
}) => {
  return (
    <SC.IconCardContainer>
      <SC.Icon>{iconUrl}</SC.Icon>
      <SC.Title>{title}</SC.Title>
      <SC.Description>{description}</SC.Description>
    </SC.IconCardContainer>
  );
};

export default IconCard;
