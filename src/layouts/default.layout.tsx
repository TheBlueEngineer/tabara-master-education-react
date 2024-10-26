import { Outlet } from 'react-router-dom';
import Header from './header/header.layout';
import Footer from './footer/footer.layout';
import NavbarBottom from './navbar-bottom/navbar-bottom.component';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <NavbarBottom />
    </>
  );
};

export default DefaultLayout;
