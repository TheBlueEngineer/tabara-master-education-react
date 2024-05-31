import { FC } from 'react';
import { Navbar } from './navbar.styles';
import * as SC from './navbar.styles';
import { useTranslation } from 'react-i18next';

const NavigationBar: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Navbar>
      <SC.NavLink to="/">{t('navigationBar.home')}</SC.NavLink>
      <SC.NavLink to="/camps">{t('navigationBar.camps')}</SC.NavLink>
      <SC.NavLink to="/team">{t('navigationBar.team')}</SC.NavLink>
      <SC.NavLink to="/contact">{t('navigationBar.contact')}</SC.NavLink>
      <SC.NavLink to="/login">{t('navigationBar.sign-in')}</SC.NavLink>
    </Navbar>
  );
};

export default NavigationBar;
