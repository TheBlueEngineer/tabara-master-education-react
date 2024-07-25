import { FC } from 'react';
import * as SC from './navbar.styles';
import { useTranslation } from 'react-i18next';
import { FaHome } from 'react-icons/fa';
import { FaPhoneVolume, FaCampground } from 'react-icons/fa6';

const NavigationBar: FC = () => {
  const { t } = useTranslation('common');

  return (
    <SC.Navbar>
      <SC.NavLink to="/">
        <FaHome />
        {t('navigationBar.home')}
      </SC.NavLink>
      <SC.NavLink to="/camps">
        <FaCampground />
        {t('navigationBar.camps')}
      </SC.NavLink>
      <SC.NavLink to="/contact">
        <FaPhoneVolume size={20} />
        {t('navigationBar.contact')}
      </SC.NavLink>
      <SC.CTAButton>{t(`navigationBar.cta-button`)}</SC.CTAButton>
    </SC.Navbar>
  );
};

export default NavigationBar;
