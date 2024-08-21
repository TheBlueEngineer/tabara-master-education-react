import { FC } from 'react';
/* import { useTranslation } from 'react-i18next';
 */ import * as SC from './camps.styles';
import CampOffers from '@components/views/camps/camp-offers.component';

const CampsPage: FC = () => {
  /*   const { t } = useTranslation('camps');
   */ return (
    <SC.Wrapper>
      <CampOffers />
    </SC.Wrapper>
  );
};

export default CampsPage;
