import { FC } from 'react';
import * as SC from './camp-offer-card.styles';
import Button from '@components/shared-components/button/button.component';
import { FaClock } from 'react-icons/fa';
import PriceTag from '@components/smart/shared/price-tag/price-tag.component';
import { MdPendingActions } from 'react-icons/md';
import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useCampOffer } from '@context/camp-offer.context';

type CampOfferCardProps = {
  title: string;
  code: string;
  location: string;
  description: string;
  price: number;
  src: string;
  alt?: string;
  buttonText: string;
  durationInDaysText: string;
};

const CampOfferCard: FC<CampOfferCardProps> = ({
  title,
  code,
  location,
  description,
  price,
  src,
  alt,
  buttonText,
  durationInDaysText,
}) => {
  const navigate = useNavigate();
  const { handleSetCampOffer } = useCampOffer();

  const handleOnClick = () => {
    handleSetCampOffer(code);
    navigate(`/camps/${code}`);
  };

  return (
    <SC.Container>
      <img src={src} alt={alt} />
      <SC.Content>
        <SC.Price>
          <PriceTag value={price} />
        </SC.Price>
        <h3>{title}</h3>
        <h4>
          <FaLocationDot />
          {location}
        </h4>
        <p>{description}</p>
        <SC.DetailsList>
          <li>
            <FaCalendarDays />
            27 August
          </li>
          <li>
            <FaClock />
            {durationInDaysText}
          </li>
          <li>
            <MdPendingActions />
            Enrollment ends on: 29 Aug
          </li>
        </SC.DetailsList>
        <Button onClick={handleOnClick} size="large" onHoverStyle="glow">
          {buttonText}
        </Button>
      </SC.Content>
    </SC.Container>
  );
};

export default CampOfferCard;
