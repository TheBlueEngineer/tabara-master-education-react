/* import { useTranslation } from 'react-i18next';
 */ import HeroImageIconCards from '@components/view-components/hero-image-icon-cards/hero-image-icon-cards.component';
import * as SC from './home-page.styles';
import HomeAboutUs from '@components/view-components/home-about-us/home-about-us.component';

const HomePage = () => {
  /* const { t } = useTranslation('home'); */

  return (
    <SC.HomePageContainer>
      <SC.HeroImageContainer>
        <SC.Title>Make your great escape</SC.Title>
        <SC.Subtitle>
          Book campsites to your camp. You will not regret hiking with us !
        </SC.Subtitle>
        <SC.CTAButton>Contact Us</SC.CTAButton>
      </SC.HeroImageContainer>

      <HeroImageIconCards />

      <HomeAboutUs />
    </SC.HomePageContainer>
  );
};

export default HomePage;
