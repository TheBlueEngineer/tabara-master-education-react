import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import CampOfferDisplay from '@components/views/camp-preview/camp-offer-display/camp-offer-display.component';
import useCampFinder from '@hooks/camp-finder.hook';

type RouteParamsProps = {
  campPreviewCode: string;
};

const CampOfferSelector: FC = () => {
  const { campPreviewCode } = useParams<RouteParamsProps>();
  const campOffer = useCampFinder(campPreviewCode!);
  const translationUrl = `campOffers.${campPreviewCode}`;

  const { t } = useTranslation('camps');

  const breadcrumbsList = [
    {
      link: '/',
      text: t('breadcrumbs.home'),
    },
    {
      link: '/camps',
      text: t('breadcrumbs.camps'),
    },
    {
      link: null,
      text: t(`${translationUrl}.previewTitle`),
    },
  ];

  return (
    <>
      {campOffer ? (
        <CampOfferDisplay
          campOffer={campOffer}
          breadcrumbsList={breadcrumbsList}
        />
      ) : (
        <h1>Nu am gasit</h1>
      )}
    </>
  );
};

export default CampOfferSelector;
