import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import NotFound from '../pages/error/NotFound';

// Public Layout and Pages
import RootLayout from '../layout/public/RootLayout';
// Views
import HomeView from '../pages/public/public_Home/HomeView';
import AboutView from '../pages/public/public_about/AboutView';
import ContactView from '../pages/public/public_contact/ContactView';
import PricingView from '../pages/public/public_pricing/PricingView';
import PlatformView from '../pages/public/public_platform/PlatformView';
import InnovationView from '../pages/public/public_innovation/InnovationView';

// Auth Layout and Pages
import AuthLayout from '../layout/auth/AuthLayout';
// Views
import RegisterView from '../pages/auth/RegisterView';
import LoginView from '../pages/auth/LoginView';
import ResetPasswordView from '../pages/auth/ResetPasswordView';
import SetPasswordView from '../pages/auth/SetPasswordView';

// Dashboard Layout and Pages
import DashLayout from '../layout/dash/DashLayout';
// Views
import DashboardView from '../pages/dash/dash_home/DashboardView';
import DashPricingView from '../pages/dash/dash_pricing/DashPricingView';
import AIChatView from '../pages/dash/dash_chats/AIChatView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        {/* Public related routes can be added here */}
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

      <Route path="dash" element={<DashLayout />}>
        {/* Dashboard related routes can be added here */}
        <Route index element={<DashboardView />} />
        <Route path="pricing" element={<DashPricingView />} />
        <Route path="ai-chat" element={<AIChatView />} />
        <Route path="settings" element={<div>Dashboard Settings</div>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
