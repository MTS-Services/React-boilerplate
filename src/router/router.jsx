import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import RootLayout from '../layout/public/RootLayout';
import HomeView from '../pages/public/public_Home/HomeView';
import AboutView from '../pages/public/public_about/AboutView';
import ContactView from '../pages/public/public_contact/ContactView';

import NotFound from '../pages/error/NotFound';
import PlatformView from '../pages/public/public_platform/PlatformView';
import InnovationView from '../pages/public/public_innovation/InnovationView';
import PricingView from '../pages/public/public_pricing/PricingView';

import AuthLayout from '../layout/auth/AuthLayout';
import RegisterView from '../pages/auth/RegisterView';
import LoginView from '../pages/auth/LoginView';
import ResetPasswordView from '../pages/auth/ResetPasswordView';
import SetPasswordView from '../pages/auth/SetPasswordView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomeView />} />
        <Route path="about" element={<AboutView />} />
        <Route path="platform" element={<PlatformView />} />
        <Route path="ai-innovation" element={<InnovationView />} />
        <Route path="pricing" element={<PricingView />} />
        <Route path="contact" element={<ContactView />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        {/* Auth related routes can be added here */}
        <Route path="login" element={<LoginView />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="reset-password" element={<ResetPasswordView />} />
        <Route path="set-password" element={<SetPasswordView />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
