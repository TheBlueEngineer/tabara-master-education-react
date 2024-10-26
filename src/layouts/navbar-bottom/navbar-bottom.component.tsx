import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import * as SC from './navbar-bottom.styles';
import { FaHome } from 'react-icons/fa';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';

const NavbarBottom: FC = () => {
  const {} = useTranslation('common');

  return (
    <SC.Navbar>
      <SC.NavLink to="/">
        <FaHome />
        Home
      </SC.NavLink>
      <SC.NavLink to="/camps">
        <FaHome />
        Camp
      </SC.NavLink>
      <SC.CTAButton to="/">
        <BsFillBookmarkPlusFill />
      </SC.CTAButton>
      <SC.NavLink to="/team">
        <FaHome />
        Team
      </SC.NavLink>
      <SC.NavLink to="/contact">
        <FaHome />
        Contact
      </SC.NavLink>
    </SC.Navbar>
  );
};

export default NavbarBottom;
