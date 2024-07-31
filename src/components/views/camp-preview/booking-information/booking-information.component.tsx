import { FC } from 'react';
import * as SC from './booking-information.styles';
import { useTranslation } from 'react-i18next';
import PriceTag from '@components/smart/shared/price-tag/price-tag.component';
import { CounterType } from '@hooks/counter.hook';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

type BookingInformationType = {
  price: number;
  dateOfDeparture: Date;
  dateOfReturn: Date;
  adults: CounterType;
  children: CounterType;
};

const BookingInformation: FC<BookingInformationType> = ({
  price,
  dateOfDeparture,
  dateOfReturn,
  adults,
  children,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation('camp-preview', {
    keyPrefix: 'bookingInformation',
  });
  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <SC.Container>
      <li>
        <label>{t('price')}</label>
        <PriceTag value={price} />
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
        <label>{t('adults.label')}</label>
        <div>
          <p>{t('adults.value')}</p>
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
        <label>{t('children.label')}</label>
        <div>
          <p>{t('children.value')}</p>
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
        <button onClick={handleClick}>{t('button')}</button>
      </li>
    </SC.Container>
  );
};

export default BookingInformation;
