import { FC } from 'react';
import NavigationBar from '../navbar/navbar.component';
import * as SC from './header.styles';
import LanguageSelector from '@components/smart/shared/language-selector/language-selector.component';
import CurrencySelector from '@components/smart/shared/currency-selector/currency-selector.component';

import logo from 'assets/images/home/322412271_2318204071679802_4134667702766926568_n.png';
import useToggle from '@hooks/toggle.hooks';
import { IoMenu } from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';
import { BsCashCoin } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Header: FC = () => {
  const { isToggled, handleToggle } = useToggle();

  return (
    <SC.Container>
      <SC.UpperBar>
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
        <SC.NavigationLink to="/">
          <img src={logo} />
          <h1>Tabara Master Education</h1>
        </SC.NavigationLink>
        <SC.BurgerMenu $isOpen={isToggled} onClick={handleToggle}>
          <IoMenu />
        </SC.BurgerMenu>
        <SC.Dropdown $isOpen={isToggled}>
          <NavigationBar />
        </SC.Dropdown>
      </SC.Content>
    </SC.Container>
  );
};

export default Header;
