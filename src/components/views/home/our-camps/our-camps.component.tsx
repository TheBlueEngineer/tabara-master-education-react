import CampOfferCard from '@components/templates/camp-offer-card/camp-offer-card.component';
import * as SC from './our-camps.styles';
import { useTranslation } from 'react-i18next';
import { campOffersData } from '@consts/camp-offers';

const OurCamps = () => {
  const { i18n, t } = useTranslation('home');
  const currentLanguage = i18n.language;

  return (
    <SC.Container>
      <h1>{t('ourCampsSection.title')}</h1>
      <h2>{t('ourCampsSection.description')}</h2>
      <SC.Offers>
        {campOffersData.map((campOffer, idx) => {
          const code = campOffer.code;
          const currentOfferTranslation = `ourCampsSection.campOffersList.${code}`;

          return (
            <CampOfferCard
              key={idx}
              title={t(`${currentOfferTranslation}.title`)}
              code={campOffer.code}
              description={t(`${currentOfferTranslation}.description`)}
              location={campOffer.location}
              price={campOffer.priceInRON}
              src={campOffer.bgImageUrl}
              durationInDaysText={`${campOffer.durationDays} ${currentLanguage === 'en' ? 'days' : 'zile'}`}
              buttonText={t(`${currentOfferTranslation}.buttonText`)}
            />
          );
        })}
      </SC.Offers>
    </SC.Container>
  );
};

export default OurCamps;
