import { FC } from 'react';
import NavigationBar from '../navbar/navbar.component';
import * as SC from './header.styles';
import useScrollDirection from 'src/hooks/scroll-direction';
import LanguageSelector from '@components/smart-components/language-selector/language-selector.component';
import ThemeSelector from '@components/smart-components/theme-selector/theme-selector.component';

const Header: FC = () => {
  const scrollDirection = useScrollDirection();
  const isHidden = scrollDirection === 'down';

  return (
    <SC.HeaderContainer $isHidden={isHidden}>
      <SC.Column>
        <ThemeSelector />
        <LanguageSelector />
      </SC.Column>
      <SC.Logo to="/">Logo</SC.Logo>
      <SC.SearchBar>The search bar</SC.SearchBar>
      <NavigationBar />
    </SC.HeaderContainer>
  );
};

export default Header;
