import { FC, useEffect } from 'react';
import NavigationBar from '../navbar/navbar.component';
import * as SC from './header.styles';

import { useNavigationInformation } from '@context/navigation-information.context';
import useToggle from '@hooks/toggle.hooks';

const Header: FC = () => {
  const {} = useNavigationInformation();
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
  }, []);

  return (
    <SC.Container>
      <NavigationBar />
    </SC.Container>
  );
};

export default Header;
