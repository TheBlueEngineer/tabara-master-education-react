import { FC } from 'react';
import * as SC from './camp-offer-card.styles';
import Button from '@components/shared-components/button/button.component';
import { FaClock } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import PriceTag from '@components/shared-components/price-tag/price-tag.component';

type CampOfferCardProps = {
  title: string;
  description: string;
  price: number;
  src: string;
  alt?: string;
};

const CampOfferCard: FC<CampOfferCardProps> = ({
  title,
  description,
  price,
  src,
  alt,
}) => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <SC.Container>
      <img src={src} alt={alt} />
      <SC.Price>
        <PriceTag value={price} />
      </SC.Price>
      <h3>{title}</h3>
      <SC.Description>{description}</SC.Description>
      <SC.DateAndLocation>
        <div>
          <BiCalendar />
          <p>Aug 27</p>
        </div>
        <div>
          <FaClock />
          <p>4 days</p>
        </div>
      </SC.DateAndLocation>
      <Button onClick={handleClick} size="large">
        READ MORE
      </Button>
    </SC.Container>
  );
};

export default CampOfferCard;
