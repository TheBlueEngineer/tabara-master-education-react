import { FC, useEffect, useState } from 'react';
import * as SC from './camp-preview.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { CampOfferDataType, campOffersData } from '@consts/camp-offers';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight, FaLocationDot } from 'react-icons/fa6';
import Breadcrumbs from '@components/smart-components/breadcrumbs/breadcrumbs.component';
import useCounter from '@hooks/counter.hook';
import { IoMdCheckmark } from 'react-icons/io';
import { HiMiniXMark } from 'react-icons/hi2';

type CampOfferProps = {
  readonly campPreviewCode: string;
};

const CampPreview: FC = () => {
  const { t } = useTranslation('camps');
  const navigate = useNavigate();
  const { campPreviewCode } = useParams<CampOfferProps>();
  const [campOffer, setCampOffer] = useState<CampOfferDataType | null>(null);
  const adults = useCounter(0);
  const children = useCounter(0);
  const translationUrl = `campOffers.${campPreviewCode}`;
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

  const handleClick = () => {
    navigate('/contact');
  };

  useEffect(() => {
    console.log(campPreviewCode);
    const foundCampOffer = campOffersData.find(
      (campOffer) => campOffer.code === campPreviewCode
    );
    if (!foundCampOffer) return;
    setCampOffer(foundCampOffer);
  }, [campPreviewCode]);

  return (
    <SC.Container>
      <Breadcrumbs list={breadcrumbsList} />
      {campOffer ? (
        <>
          <SC.ImageHeader $src={campOffer.bgImageUrl}></SC.ImageHeader>
          <div>
            <SC.Content>
              <SC.MainInformation>
                <h1>{t(`${translationUrl}.title`)}</h1>
                <h2>
                  <FaLocationDot />
                  {campOffer.location + ' -'}
                  <a
                    href="https://www.google.com/maps/place/Castelul+Bran/@45.5102277,25.3579848,14z/data=!4m15!1m8!3m7!1s0x40b347e54ce55873:0xb2a3745ffef5cc10!2s507025+Bran!3b1!8m2!3d45.5191918!4d25.3696831!16zL20vMDQyNzlt!3m5!1s0x40b347e5a415de31:0xcf922792d921ab7f!8m2!3d45.5149022!4d25.3671637!16zL20vMDJnbXk3?entry=ttu"
                    target="_blank"
                  >
                    View on the map
                  </a>
                </h2>
              </SC.MainInformation>
              <SC.DetailsGrid>
                {campOffer.detailsGrid &&
                  Object.entries(campOffer.detailsGrid).map(
                    ([identifier, values], idx) => (
                      <li key={idx}>
                        <values.icon size={24} />
                        <p>
                          {t(
                            `${translationUrl}.detailsGrid.${identifier}.text`
                          ) +
                            (values.value ? ' ' + values.value + ' ' : ' ') +
                            t(
                              `${translationUrl}.detailsGrid.${identifier}.appendText`
                            )}
                        </p>
                      </li>
                    )
                  )}
              </SC.DetailsGrid>
              <SC.Description>
                <h2>Description</h2>
                <ul>
                  <li>
                    <h3>Highlights</h3>
                    <p>The castle and its surroundings</p>
                  </li>
                  <li>
                    <h3>Departure time</h3>
                    <p>1 Hour before the specified time</p>
                  </li>
                  <li>
                    <h3>Price includes</h3>
                    <ul>
                      <li>
                        <IoMdCheckmark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                      <li>
                        <IoMdCheckmark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                      <li>
                        <IoMdCheckmark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                      <li>
                        <IoMdCheckmark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                      <li>
                        <IoMdCheckmark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                      <li>
                        <IoMdCheckmark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3>Price excludes</h3>
                    <ul>
                      <li>
                        <HiMiniXMark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                      <li>
                        <HiMiniXMark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                      <li>
                        <HiMiniXMark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                      <li>
                        <HiMiniXMark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                      <li>
                        <HiMiniXMark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                      <li>
                        <HiMiniXMark />
                        <p>Lorem ipsum dolor sit amet</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </SC.Description>
              <SC.WhatToExpect></SC.WhatToExpect>
            </SC.Content>
          </div>
          <div>
            <SC.BookingInformation>
              <li>
                <label>Price</label>
                <p>$333.99</p>
              </li>
              <li>
                <label>Date of departure</label>
                <p>07/08/2024</p>
              </li>
              <li>
                <label>Date of return</label>
                <p>09/08/2024</p>
              </li>
              <li>
                <label>Adults</label>
                <div>
                  <p>Age 18+</p>
                  <SC.Counter>
                    <button onClick={adults.decrement}>
                      <FaChevronLeft />
                    </button>
                    <input
                      type="number"
                      onChange={adults.handleChangeCount}
                      value={adults.count}
                    />
                    <button onClick={adults.increment}>
                      <FaChevronRight />
                    </button>
                  </SC.Counter>
                </div>
              </li>
              <li>
                <label>Children</label>
                <div>
                  <p>Age 6-17</p>
                  <SC.Counter>
                    <button onClick={children.decrement}>
                      <FaChevronLeft />
                    </button>
                    <input
                      type="number"
                      onChange={children.handleChangeCount}
                      value={children.count}
                    />
                    <button onClick={children.increment}>
                      <FaChevronRight />
                    </button>
                  </SC.Counter>
                </div>
              </li>
              <li>
                <p>Enrollment ends on 28 Aug</p>
                <button onClick={handleClick}>BOOK NOW</button>
              </li>
            </SC.BookingInformation>
          </div>
        </>
      ) : (
        <h1>Hi</h1>
      )}
    </SC.Container>
  );
};

export default CampPreview;
