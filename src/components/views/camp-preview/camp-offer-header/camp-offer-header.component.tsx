import { FC } from 'react';
import * as SC from './camp-offer-header.styles';
import { FaLocationDot } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

type CampOfferHeaderProps = {
  imageSrc: string;
  title: string;
  location: string;
  mapLink?: string;
};

const CampOfferHeader: FC<CampOfferHeaderProps> = ({
  imageSrc,
  title,
  location,
  mapLink,
}) => {
  const { t } = useTranslation('camp-preview', { keyPrefix: 'campHeader' });

  return (
    <SC.Container>
      <SC.Image $src={imageSrc} />
      <SC.MainInformation>
        <h1>{title}</h1>
        <h2>
          <FaLocationDot />
          {location}
          <a href={mapLink} target="_blank">
            {t(`locationLink`)}
          </a>
        </h2>
      </SC.MainInformation>
    </SC.Container>
  );
};

export default CampOfferHeader;
