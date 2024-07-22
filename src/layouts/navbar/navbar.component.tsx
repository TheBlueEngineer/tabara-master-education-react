import { FC } from 'react';
import * as SC from './navbar.styles';
import { useTranslation } from 'react-i18next';
import { BiHome } from 'react-icons/bi';

const NavigationBar: FC = () => {
  const { t } = useTranslation('common');

  return (
    <SC.Navbar>
      <SC.NavLink to="/">
        <BiHome />
        <p>{t('navigationBar.home')}</p>
      </SC.NavLink>
      <SC.NavLink to="/camps">
        <BiHome />
        <p>{t('navigationBar.camps')}</p>
      </SC.NavLink>
      <SC.NavLink to="/team">
        <BiHome />
        <p>{t('navigationBar.team')}</p>
      </SC.NavLink>
      <SC.NavLink to="/contact">
        <BiHome />
        <p> {t('navigationBar.contact')}</p>
      </SC.NavLink>
      <SC.NavLink to="/login">
        <BiHome />
        <p>{t('navigationBar.sign-in')}</p>
      </SC.NavLink>
    </SC.Navbar>
  );
};

export default NavigationBar;
