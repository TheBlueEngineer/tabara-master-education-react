import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/home-page/home.page'));
const TeamPage = lazy(() => import('@pages/team-page/team.page'));
const CampsPage = lazy(() => import('@pages/camps-page/camps.page'));
const SignInPage = lazy(() => import('@pages/sign-in-page/sign-in.page'));
const SignUpPage = lazy(() => import('@pages/sign-up-page/sign-up.page'));
const ContactPage = lazy(() => import('@pages/contact-page/contact.page'));

const DefaultLayout = lazy(() => import('@layout/default.layout'));

const RoutesTree = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="camps" element={<CampsPage />} />
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
