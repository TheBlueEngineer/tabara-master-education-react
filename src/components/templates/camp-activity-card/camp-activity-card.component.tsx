import { FC } from 'react';
import { IconType } from 'react-icons';
import * as SC from './camp-activity-card.styles';
import Icon from '@components/shared-components/icons/icon.component';

type CampActivityCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

const CampActivityCard: FC<CampActivityCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <SC.Container>
      <SC.Frame>
        <Icon IconComponent={icon} size={48} />
      </SC.Frame>
      <SC.Title>{title}</SC.Title>
      <SC.Description>{description}</SC.Description>
    </SC.Container>
  );
};

export default CampActivityCard;
