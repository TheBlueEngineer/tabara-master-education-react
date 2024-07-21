import { FC } from 'react';
import { IconType } from 'react-icons';
import * as SC from './camp-activity-card.styles';

type CampActivityCardProps = {
  Icon: IconType;
  title: string;
  description: string;
};

const CampActivityCard: FC<CampActivityCardProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <SC.Container>
      <SC.Frame>
        <Icon size={48} />
      </SC.Frame>
      <h2>{title}</h2>
      <p>{description}</p>
    </SC.Container>
  );
};

export default CampActivityCard;
