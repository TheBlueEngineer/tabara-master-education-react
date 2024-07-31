import Button from '@components/shared-components/button/button.component';
import * as SC from './latest-camp-offer.styles';
import { useNavigate } from 'react-router-dom';

const LatestCampOffer = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <SC.Container>
      <SC.Title>Our next adventure awaits you</SC.Title>
      <SC.Subtitle>Don't miss the wonders of Bran Castle</SC.Subtitle>
      <SC.Description>This is the description</SC.Description>
      <Button onClick={handleOnClick} size="large" shape="leaf">
        BOOK NOW
      </Button>
    </SC.Container>
  );
};

export default LatestCampOffer;
