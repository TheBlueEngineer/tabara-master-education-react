/* import { useTranslation } from 'react-i18next';
 */ import HeroImageIconCards from '@components/view-components/home/hero-image-icon-cards/hero-image-icon-cards.component';
import * as SC from './home-page.styles';
import HomeAboutUs from '@components/view-components/home/about-us/about-us.component';
import HeroImage from '@components/view-components/home/hero-image/hero-image.component';
import AchievementIcons from '@components/view-components/home/achievement-icons/achievements-icons.component';

const HomePage = () => {
  /* const { t } = useTranslation('home'); */

  return (
    <SC.Wrapper>
      <SC.HomePageContainer>
        <HeroImage />
        <HeroImageIconCards />
        <HomeAboutUs />
        <AchievementIcons />
      </SC.HomePageContainer>
    </SC.Wrapper>
  );
};

export default HomePage;
