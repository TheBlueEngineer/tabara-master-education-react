import CampPreview from '@pages/camp-preview-page/camp-preview.page';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './scroll-to-top.component';

const HomePage = lazy(() => import('@pages/home-page/home.page'));
const TeamPage = lazy(() => import('@pages/team-page/team.page'));
const CampsPage = lazy(() => import('@pages/camps-page/camps.page'));
const SignInPage = lazy(() => import('@pages/sign-in-page/sign-in.page'));
const SignUpPage = lazy(() => import('@pages/sign-up-page/sign-up.page'));
const ContactPage = lazy(() => import('@pages/contact-page/contact.page'));
const BookingPage = lazy(() => import('@pages/booking-page/booking.page'));
const DefaultLayout = lazy(() => import('@layouts/default.layout.tsx'));

const RoutesTree = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="camps">
              <Route index element={<CampsPage />} />
              <Route path=":campPreviewCode" element={<CampPreview />} />
              <Route path="booking" element={<BookingPage />} />
            </Route>
            <Route path="team" element={<TeamPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<SignInPage />} />
            <Route path="registration" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RoutesTree;
