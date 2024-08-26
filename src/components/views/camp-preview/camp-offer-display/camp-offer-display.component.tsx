import { FC } from 'react';
import * as SC from './camp-offer-display.styles';
import { CampOfferDataType } from '@consts/camp-offers-data';
import Breadcrumbs, {
  BreadcrumbItemType,
} from '@components/views/shared/breadcrumbs/breadcrumbs.component';
import CampOfferHeader from '@components/views/camp-preview/camp-offer-header/camp-offer-header.component';
import { useTranslation } from 'react-i18next';
import BookingInformation from '@components/views/camp-preview/booking-information/booking-information.view';
import CampOfferInformation from '../camp-offer-information/camp-offer-information.component';
import VerticalList from '@components/views/shared/vertical-list/vertical-list.component';

type CampOfferDisplayProps = {
  campOffer: CampOfferDataType;
  breadcrumbsList: BreadcrumbItemType[];
};

const CampOfferDisplay: FC<CampOfferDisplayProps> = ({
  campOffer,

  breadcrumbsList,
}) => {
  const { t } = useTranslation(`camps`, {
    keyPrefix: `campOffers.${campOffer.code}`,
  });

  return (
    <SC.Container>
      <div>
        <Breadcrumbs list={breadcrumbsList} />
      </div>
      <div>
        <CampOfferHeader
          imageSrc={campOffer.bgImageUrl}
          title={t(`title`)}
          location={campOffer.location}
          mapLink={campOffer.googleMapsLink}
        />
      </div>
      <div>
        <BookingInformation
          code={campOffer.code}
          price={campOffer.priceInRON}
          dateOfDeparture={campOffer.startDate}
          dateOfReturn={campOffer.endDate}
        />
      </div>
      <div>
        <CampOfferInformation campOffer={campOffer} />
      </div>
      <div>
        <VerticalList />
      </div>
    </SC.Container>
  );
};

export default CampOfferDisplay;
