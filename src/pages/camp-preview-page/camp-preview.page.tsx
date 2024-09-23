import CampOfferSelector from '@components/smart/camp-preview/camp-offer-selector/camp-offer-selector.component';
import { useNavigationInformation } from '@context/navigation-information.context';
import { FC, useEffect } from 'react';

const CampPreview: FC = () => {
  const { navbarStyleToggler } = useNavigationInformation();

  useEffect(() => {
    navbarStyleToggler.disableToggle();
    console.log('Mounted Camp Preview');
    return () => {
      navbarStyleToggler.enableToggle();
      console.log('Unmounted Camp Preview');
    };
  }, []);

  return <CampOfferSelector />;
};

export default CampPreview;
