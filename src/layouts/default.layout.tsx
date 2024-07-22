import { Outlet } from 'react-router-dom';
import Header from './header/header.layout';
import Footer from './footer/footer.layout';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
