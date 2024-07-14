/* import { useTranslation } from 'react-i18next';
 */ import HeroImageIconCards from '@components/view-components/home/hero-image-icon-cards/hero-image-icon-cards.component';
import * as SC from './home-page.styles';
import HomeAboutUs from '@components/view-components/home/about-us/about-us.component';
import HeroImage from '@components/view-components/home/hero-image/hero-image.component';
import AchievementIcons from '@components/view-components/home/achievement-icons/achievements-icons.component';
import OurCamps from '@components/view-components/home/our-camps/our-camps.component';
import CampActivities from '@components/view-components/home/camp-activities/camp-activities.component';
import WhyChooseUs from '@components/view-components/home/why-choose-us/why-choose-us.component';
import OurDestinations from '@components/view-components/home/our-destinations/our-destinations.component';

const HomePage = () => {
  /* const { t } = useTranslation('home'); */

  return (
    <SC.Wrapper>
      <SC.HomePageContainer>
        <HeroImage />
        <HeroImageIconCards />
        <HomeAboutUs />
        <AchievementIcons />
        <OurCamps />
        <CampActivities />
        <WhyChooseUs />
        <OurDestinations />
      </SC.HomePageContainer>
    </SC.Wrapper>
  );
};

export default HomePage;
