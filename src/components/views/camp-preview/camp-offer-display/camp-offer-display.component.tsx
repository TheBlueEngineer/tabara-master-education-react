import { FC } from 'react';
import * as SC from './camp-offer-display.styles';
import { CounterType } from '@hooks/counter.hook';
import { CampOfferDataType } from '@consts/camp-offers';
import Breadcrumbs, {
  BreadcrumbItemType,
} from '@components/views/shared/breadcrumbs/breadcrumbs.component';
import CampOfferHeader from '@components/views/camp-preview/camp-offer-header/camp-offer-header.component';
import { useTranslation } from 'react-i18next';
import BookingInformation from '@components/views/camp-preview/booking-information/booking-information.component';
import CampOfferInformation from '../camp-offer-information/camp-offer-information.component';

type CampOfferDisplayProps = {
  campOffer: CampOfferDataType;
  adultsCounter: CounterType;
  childrenCounter: CounterType;
  breadcrumbsList: BreadcrumbItemType[];
};

const CampOfferDisplay: FC<CampOfferDisplayProps> = ({
  campOffer,
  adultsCounter,
  childrenCounter,
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
          price={campOffer.priceInRON}
          dateOfDeparture={campOffer.startDate}
          dateOfReturn={campOffer.endDate}
          adults={adultsCounter}
          children={childrenCounter}
        />
      </div>
      <div>
        <CampOfferInformation campOffer={campOffer} />
      </div>
    </SC.Container>
  );
};

export default CampOfferDisplay;
