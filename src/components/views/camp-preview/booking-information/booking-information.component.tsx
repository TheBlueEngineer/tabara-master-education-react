import { FC } from 'react';
import * as SC from './booking-information.styles';
import { useTranslation } from 'react-i18next';
import PriceTag from '@components/smart/shared/price-tag/price-tag.component';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import useCounter from '@hooks/counter.hook';
import { useNavigate } from 'react-router-dom';

type BookingInformationType = {
  code: string;
  price: number;
  dateOfDeparture: Date;
  dateOfReturn: Date;
};

const BookingInformation: FC<BookingInformationType> = ({
  code,
  price,
  dateOfDeparture,
  dateOfReturn,
}) => {
  const navigate = useNavigate();
  const childrenCounter = useCounter(1);
  const { t } = useTranslation('camp-preview', {
    keyPrefix: 'bookingInformation',
  });
  const handleBookingClick = () => {
    navigate(`/camps/booking?id=${code}&children=${childrenCounter.count}`);
  };

  return (
    <SC.Container>
      <li>
        <label>{t('price')}</label>
        <PriceTag value={price * childrenCounter.count} />
      </li>
      <li>
        <label>{t('dateOfDeparture')}</label>
        <p>{dateOfDeparture.toDateString()}</p>
      </li>
      <li>
        <label>{t('dateOfReturn')}</label>
        <p>{dateOfReturn.toDateString()}</p>
      </li>

      <li>
        <label>{t('children.label')}</label>
        <div>
          <p>{t('children.value')}</p>
          <SC.Counter>
            <button onClick={childrenCounter.decrement}>
              <FaChevronLeft />
            </button>
            <input
              type="number"
              onChange={childrenCounter.handleChangeCount}
              value={childrenCounter.count}
            />
            <button onClick={childrenCounter.increment}>
              <FaChevronRight />
            </button>
          </SC.Counter>
        </div>
      </li>
      <li>
        <p>Enrollment ends on 28 Aug</p>
        <button onClick={handleBookingClick}>{t('button')}</button>
      </li>
    </SC.Container>
  );
};

export default BookingInformation;
