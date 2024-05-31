import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const CampsPage: FC = () => {
  const { t } = useTranslation('camps');
  return <h1>{t('welcome')}</h1>;
};

export default CampsPage;
