import { FC } from 'react';
import NavigationBar from '../navbar/navbar.component';
import * as SC from './header.styles';
import useScrollDirection from 'src/hooks/scroll-direction.hook';
import LanguageSelector from '@components/smart-components/language-selector/language-selector.component';

const Header: FC = () => {
  const scrollDirection = useScrollDirection();
  const isHidden = scrollDirection === 'down';

  return (
    <SC.HeaderContainer $isHidden={isHidden}>
      <SC.NavigationLink to="/">
        <img src="/src/assets/images/home/322412271_2318204071679802_4134667702766926568_n.png" />
        <h1>Tabara Master Education</h1>
      </SC.NavigationLink>
      <SC.Cell>
        <NavigationBar />
        <LanguageSelector />
      </SC.Cell>
    </SC.HeaderContainer>
  );
};

export default Header;
