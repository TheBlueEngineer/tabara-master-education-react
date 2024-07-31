import HeroImageIconCards from '@components/views/home/hero-image-icon-cards/hero-image-icon-cards.component';
import * as SC from './home-page.styles';
import HomeAboutUs from '@components/views/home/about-us/about-us.component';
import HeroImage from '@components/views/home/hero-image/hero-image.component';
import AchievementIcons from '@components/views/home/achievement-icons/achievements-icons.component';
import OurCamps from '@components/views/home/our-camps/our-camps.component';
import CampActivities from '@components/views/home/camp-activities/camp-activities.component';
import WhyChooseUs from '@components/views/home/why-choose-us/why-choose-us.component';
import OurDestinations from '@components/views/home/our-destinations/our-destinations.component';
import OurTeam from '@components/views/home/our-team/our-team.component';
import LatestCampOffer from '@components/views/home/latest-camp-offer/latest-camp-offer.component';
import ContactUs from '@components/views/home/contact-us/contact-us.component';
import GalleryOfModals from '@components/views/home/gallery-of-modals/gallery-of-modals.component';

const HomePage = () => {
  return (
    <SC.Wrapper>
      <HeroImage />
      <HeroImageIconCards />
      <HomeAboutUs />
      <AchievementIcons />
      <OurCamps />
      <CampActivities />
      <WhyChooseUs />
      <OurDestinations />
      <LatestCampOffer />
      <OurTeam />
      <ContactUs />
      <GalleryOfModals />
    </SC.Wrapper>
  );
};

export default HomePage;
