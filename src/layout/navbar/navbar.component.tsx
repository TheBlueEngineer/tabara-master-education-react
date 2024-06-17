import { FC } from 'react';
import { Navbar } from './navbar.styles';
import * as SC from './navbar.styles';
import { useTranslation } from 'react-i18next';
import Icon from '@components/shared-components/icons/icon.component';
import { BiHome } from 'react-icons/bi';

const NavigationBar: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Navbar>
      <SC.NavLink to="/">
        <Icon IconComponent={BiHome} size="medium" />
        <SC.Text>{t('navigationBar.home')}</SC.Text>
      </SC.NavLink>
      <SC.NavLink to="/camps">
        <Icon IconComponent={BiHome} size="medium" />
        <SC.Text>{t('navigationBar.camps')}</SC.Text>
      </SC.NavLink>
      <SC.NavLink to="/team">
        <Icon IconComponent={BiHome} size="medium" />
        <SC.Text>{t('navigationBar.team')}</SC.Text>
      </SC.NavLink>
      <SC.NavLink to="/contact">
        <Icon IconComponent={BiHome} size="medium" />
        <SC.Text> {t('navigationBar.contact')}</SC.Text>
      </SC.NavLink>
      <SC.NavLink to="/login">
        <Icon IconComponent={BiHome} size="medium" />
        <SC.Text>{t('navigationBar.sign-in')}</SC.Text>
      </SC.NavLink>
    </Navbar>
  );
};

export default NavigationBar;
