import { FC, FormEvent, useEffect, useState } from 'react';
import * as SC from './booking-form.styles';
import FormInput from '@components/smart/shared/form-input/form-input.component';
import {
  validateEmail,
  validateName,
  validatePhone,
} from '@utils/input-validation.utils';
import Button from '@components/shared-components/button/button.component';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PriceTag from '@components/smart/shared/price-tag/price-tag.component';
import { FaExclamationCircle } from 'react-icons/fa';
import { CampOfferDataType, campOffersData } from '@consts/camp-offers';
import useCounter from '@hooks/counter.hook';
import useEmailJS from '@hooks/email.hook';

const BookingForm: FC = () => {
  const search = new URLSearchParams(useLocation().search);
  const idParam = search.get('id');
  const childrenParam = search.get('children');

  const [campOffer, setCampOffer] = useState<CampOfferDataType | null>(null);
  const childrenCounter = useCounter(childrenParam ? Number(childrenParam) : 1);
  const { sendEmail } = useEmailJS();
  const { t } = useTranslation('camps', { keyPrefix: 'campOffers' });

  useEffect(() => {
    const foundCampOffer = campOffersData.find(
      (campOffer) => campOffer.code === idParam
    );
    if (foundCampOffer) {
      setCampOffer(foundCampOffer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendEmail(event, 'BOOKING');
  };

  return (
    <SC.Container>
      <SC.Content onSubmit={handleSubmit}>
        <SC.Grid>
          <FormInput
            label="Last Name"
            name="lastname"
            type="text"
            placeholder="Jane"
            validationHandler={validateName}
            required
          />
          <FormInput
            label="First Name"
            name="firstname"
            type="text"
            placeholder="Doe"
            validationHandler={validateName}
            required
          />

          <FormInput
            label="Phone"
            name="phone"
            type="text"
            placeholder="0776665555"
            maxLength={15}
            validationHandler={validatePhone}
            required
          />
          <FormInput
            label="E-mail"
            name="email"
            type="email"
            placeholder="email.address@gmail.com"
            validationHandler={validateEmail}
            required
          />

          <FormInput
            label="Camp Selected"
            name="camp"
            type="text"
            value={t(`${idParam}.title`)}
            tabIndex={-1}
            readOnly
            required
          />
          <FormInput
            label="Children"
            name="children"
            type="number"
            onChange={childrenCounter.handleChangeCount}
            defaultValue={childrenCounter.count}
            min={1}
            required
          />
        </SC.Grid>

        <SC.PaymentInfo>
          <h2>Payment Info</h2>
          <SC.Payments>
            <SC.Row>
              <label>Payment in advance</label>
              <PriceTag
                value={
                  Number(childrenCounter.count) *
                  Number(campOffer?.paymentInAdvanceInRON)
                }
              />
            </SC.Row>
            <SC.Row>
              <label>Price of camp &#40;remainder&#41;</label>
              <PriceTag
                value={
                  (Number(campOffer?.priceInRON) -
                    Number(campOffer?.paymentInAdvanceInRON)) *
                  Number(childrenCounter.count)
                }
              />
            </SC.Row>
            <SC.Filler />
            <SC.Row>
              <label>Total Payment:</label>
              <PriceTag
                value={
                  Number(campOffer?.priceInRON) * Number(childrenCounter.count)
                }
              />
            </SC.Row>
          </SC.Payments>

          <p>
            <FaExclamationCircle />
            Note: You are not gonna make an actual payment on this website, it's
            just a breakdown of the price. The actual payment will be done in
            person or through a banking transfer.
          </p>
          <Button type="submit" shape="leaf" size="large" onHoverStyle="glow">
            SUBMIT
          </Button>
        </SC.PaymentInfo>
      </SC.Content>
    </SC.Container>
  );
};

export default BookingForm;
