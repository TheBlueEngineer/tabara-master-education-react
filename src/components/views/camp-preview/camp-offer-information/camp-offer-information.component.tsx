import { FC } from 'react';
import * as SC from './camp-offer-information.styles.tsx.tsx';
import { CampOfferDataType } from '@consts/camp-offers-data.ts';
import { useTranslation } from 'react-i18next';
import { IoMdCheckmark } from 'react-icons/io';
import { HiMiniXMark } from 'react-icons/hi2';

type CampOfferInformationProps = {
  campOffer: CampOfferDataType;
};

const CampOfferInformation: FC<CampOfferInformationProps> = ({ campOffer }) => {
  const { t } = useTranslation('camps', {
    keyPrefix: `campOffers.${campOffer.code}`,
  });
  return (
    <SC.Container>
      <SC.DetailsGrid>
        {campOffer.detailsGrid &&
          Object.entries(campOffer.detailsGrid).map(
            ([identifier, values], idx) => (
              <li key={idx}>
                <values.icon size={24} />
                <p>
                  {t(`detailsGrid.${identifier}.text`) +
                    (values.value ? ' ' + values.value + ' ' : ' ') +
                    t(`detailsGrid.${identifier}.appendText`)}
                </p>
              </li>
            )
          )}
      </SC.DetailsGrid>
      <SC.Description>
        <h2>Description</h2>
        {(
          t(`description.paragraphs`, {
            returnObjects: true,
          }) as string[]
        ).map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
        <SC.DescriptionGrid>
          {(
            t(`description.grid`, {
              returnObjects: true,
            }) as { title: string; list: string[] }[]
          ).map((item, idx) => (
            <SC.DescriptionGridItem key={idx}>
              <h3>{item.title}</h3>
              <ul>
                {item.list.map((string, idx2) => (
                  <p key={idx2}>{string}</p>
                ))}
              </ul>
            </SC.DescriptionGridItem>
          ))}
        </SC.DescriptionGrid>
        <SC.DescriptionGrid>
          <SC.DescriptionPrices $isIncluded>
            <h3>{t(`description.priceIncludes.title`)}</h3>
            <ul>
              {(
                t(`description.priceIncludes.list`, {
                  returnObjects: true,
                }) as string[]
              ).map((string, idx) => (
                <li key={idx}>
                  <IoMdCheckmark size={20} />
                  {string}
                </li>
              ))}
            </ul>
          </SC.DescriptionPrices>
          <SC.DescriptionPrices>
            <h3>{t(`description.priceExcludes.title`)}</h3>
            <ul>
              {(
                t(`description.priceExcludes.list`, {
                  returnObjects: true,
                }) as string[]
              ).map((string, idx) => (
                <li key={idx}>
                  <HiMiniXMark size={24} />
                  {string}
                </li>
              ))}
            </ul>
          </SC.DescriptionPrices>
        </SC.DescriptionGrid>
      </SC.Description>
      <SC.WhatToExpect>
        <h2>{t(`whatToExpect.title`)}</h2>
        {(
          t(`whatToExpect.paragraphs`, {
            returnObjects: true,
          }) as string[]
        ).map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
        <ul>
          {(
            t(`whatToExpect.list`, {
              returnObjects: true,
            }) as string[]
          ).map((string, idx) => (
            <li key={idx}>{string}</li>
          ))}
        </ul>
      </SC.WhatToExpect>
    </SC.Container>
  );
};

export default CampOfferInformation;
