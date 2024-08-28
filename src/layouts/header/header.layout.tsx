import { FC, useEffect } from 'react';
import NavigationBar from '../navbar/navbar.component';
import * as SC from './header.styles';
import LanguageSelector from '@components/smart/shared/language-selector/language-selector.component';
import CurrencySelector from '@components/smart/shared/currency-selector/currency-selector.component';

import logo from 'assets/images/home/322412271_2318204071679802_4134667702766926568_n.png';
import { IoMenu } from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';
import { BsCashCoin } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigationInformation } from '@context/navigation-information.context';
import useToggle from '@hooks/toggle.hooks';

const Header: FC = () => {
  const { navbarStyleToggler, upperbarToggler } = useNavigationInformation();
  const burgerMenuToggler = useToggle();

  const handleResize = () => {
    if (window.innerWidth > 1027) {
      console.log(window.innerWidth);
      burgerMenuToggler.setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SC.Container
      $changeStyle={navbarStyleToggler.isToggled}
      $isUpperbarActive={upperbarToggler.isToggled}
      $isBurgerMenuOpen={burgerMenuToggler.isToggled}
    >
      <SC.UpperBar
        $changeStyle={navbarStyleToggler.isToggled}
        $isBurgerMenuOpen={burgerMenuToggler.isToggled}
      >
        <SC.Group>
          <SC.Cell>
            <FaPhoneAlt />
            0777 666 555
          </SC.Cell>
          <SC.Cell>
            <FaLocationDot />
            Street no. 1 Alley 52th
          </SC.Cell>
        </SC.Group>
        <SC.Group>
          <SC.Cell>
            <MdLanguage />
            <LanguageSelector />
          </SC.Cell>
          <SC.Cell>
            <BsCashCoin />
            <CurrencySelector />
          </SC.Cell>
        </SC.Group>
      </SC.UpperBar>
      <SC.Content>
        <SC.ContentRow>
          <SC.LogoLink to="/" $changeStyle={navbarStyleToggler.isToggled}>
            <img src={logo} />
            <h1>Master Education</h1>
          </SC.LogoLink>
          <SC.BurgerMenu
            $isOpen={burgerMenuToggler.isToggled}
            $changeStyle={navbarStyleToggler.isToggled}
            onClick={burgerMenuToggler.handleToggle}
          >
            <IoMenu />
          </SC.BurgerMenu>
        </SC.ContentRow>
        <SC.Dropdown $isOpen={burgerMenuToggler.isToggled}>
          <NavigationBar changeStyle={navbarStyleToggler.isToggled} />
        </SC.Dropdown>
      </SC.Content>
    </SC.Container>
  );
};

export default Header;
