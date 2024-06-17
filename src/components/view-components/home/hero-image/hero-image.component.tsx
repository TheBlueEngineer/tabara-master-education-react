import { FC } from 'react';
import * as SC from './hero-image.styles';
import { useNavigate } from 'react-router-dom';

const HeroImage: FC = () => {
  const navigate = useNavigate();

  const handleOnClickContact = () => {
    navigate('/');
  };

  return (
    <SC.HeroContainer>
      <SC.Overlay />
      <SC.Content>
        <SC.Title>Make your great escape</SC.Title>
        <SC.Subtitle>
          Book campsites to your camp. You will not regret hiking with us !
        </SC.Subtitle>
        <SC.CTAButton
          variant="primary"
          size="medium"
          shape="rounded"
          onClick={handleOnClickContact}
        >
          Contact Us
        </SC.CTAButton>
      </SC.Content>
    </SC.HeroContainer>
  );
};

export default HeroImage;
