import BookingForm from '@components/smart/booking/booking-form/booking-form.component';
import { FC } from 'react';
import * as SC from './booking.styles';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../shared/breadcrumbs/breadcrumbs.component';

const BookingView: FC = () => {
  const search = new URLSearchParams(useLocation().search);
  const idParam = search.get('id');
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
      link: `/camp/${idParam}`,
      text: t(`campOffers.${idParam}.previewTitle`),
    },
    {
      link: null,
      text: t(`campOffers.${idParam}.previewTitle`),
    },
  ];
  return (
    <SC.Container>
      <Breadcrumbs list={breadcrumbsList} />
      <BookingForm />
    </SC.Container>
  );
};

export default BookingView;
