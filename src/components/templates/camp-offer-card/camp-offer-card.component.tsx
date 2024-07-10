import { FC } from 'react';
import * as SC from './camp-offer-card.styles';
import Button from '@components/shared-components/button/button.component';
import Icon from '@components/shared-components/icons/icon.component';
import { FaClock } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';

type CampOfferCardProps = {
  title: string;
  description: string;
  price: string;
  imageURL: string;
};

const CampOfferCard: FC<CampOfferCardProps> = ({
  title,
  description,
  price,
  imageURL,
}) => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <SC.Container>
      <SC.Image $src={imageURL}>
        <SC.Overlay />
      </SC.Image>
      <SC.Price>{price}</SC.Price>
      <SC.Title>{title}</SC.Title>
      <SC.Description>{description}</SC.Description>
      <SC.DateAndLocation>
        <SC.Cell>
          <Icon IconComponent={BiCalendar} />
          <span>Aug 27</span>
        </SC.Cell>
        <SC.Cell>
          <Icon IconComponent={FaClock} />
          <span>4 days</span>
        </SC.Cell>
      </SC.DateAndLocation>
      <Button onClick={handleClick} size="large">
        READ MORE
      </Button>
    </SC.Container>
  );
};

export default CampOfferCard;
