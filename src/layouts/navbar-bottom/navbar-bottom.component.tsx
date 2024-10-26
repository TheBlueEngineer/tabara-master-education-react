import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import * as SC from './navbar-bottom.styles';
import { FaHome } from 'react-icons/fa';

const NavbarBottom: FC = () => {
  const {} = useTranslation('common');

  return (
    <SC.Navbar>
      <SC.NavLink to="/">
        <FaHome />
        Home
      </SC.NavLink>
      <SC.NavLink to="/">
        <FaHome />
        Camp
      </SC.NavLink>
      <SC.CTAButton to="/">
        <FaHome />
        Book
      </SC.CTAButton>
      <SC.NavLink to="/">
        <FaHome />
        Team
      </SC.NavLink>
      <SC.NavLink to="/">
        <FaHome />
        Contact
      </SC.NavLink>
    </SC.Navbar>
  );
};

export default NavbarBottom;
