import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'

// Route-level code splitting — keeps the initial bundle to the homepage + shell.
const ContactPage = lazy(() => import('./pages/ContactPage'))
const DemoPage = lazy(() => import('./pages/DemoPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const VideoWatchPage = lazy(() => import('./pages/VideoWatch'))

const EmployeeFinancialWellness = lazy(() => import('./pages/EmployeesPage'))
const ForHr = lazy(() => import('./pages/ForCompanies'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Vision = lazy(() => import('./pages/Vision'))
const CoachWithUs = lazy(() => import('./pages/CoachWithUs'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const appPage = (name) => lazy(() => import('./pages/AppPages').then((m) => ({ default: m[name] })))
const MobileApp = appPage('MobileApp')
const SpendingInsights = appPage('SpendingInsights')
const DuesReminders = appPage('DuesReminders')
const BudgetsGoals = appPage('BudgetsGoals')
const DashboardOverview = appPage('DashboardOverview')
const DashboardSessions = appPage('DashboardSessions')
const DashboardInsights = appPage('DashboardInsights')
const Story = lazy(() => import('./pages/Story'))
const Privacy = lazy(() => import('./pages/Privacy'))

const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))


/** The whole site below the router, shared by the browser entry and the build-time prerender. */
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="b2b-topbar" />
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-[#fff]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-employees" element={<EmployeeFinancialWellness />} />
          <Route path="/employee-financial-wellness" element={<Navigate to="/for-employees" replace />} />
          <Route path="/platform" element={<Navigate to="/platform/mobile-app" replace />} />
          <Route path="/for-hr" element={<ForHr />} />
          <Route path="/solutions/hr" element={<Navigate to="/for-hr" replace />} />
          <Route path="/business-impact" element={<Navigate to="/for-hr" replace />} />
          <Route path="/financial-coaching" element={<Navigate to="/platform/book-a-session" replace />} />
          <Route path="/financial-education" element={<Navigate to="/platform/mobile-app" replace />} />
          <Route path="/privacy-trust" element={<Privacy />} />
          <Route path="/security" element={<Navigate to="/privacy-trust" replace />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<Story />} />
          <Route path="/our-story" element={<Navigate to="/about" replace />} />
          <Route path="/customers" element={<Navigate to="/about" replace />} />
          <Route path="/our-vision" element={<Vision />} />
          <Route path="/coach-with-us" element={<CoachWithUs />} />
          <Route path="/advise" element={<Navigate to="/coach-with-us" replace />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/platform/mobile-app" element={<MobileApp />} />
          <Route path="/platform/spending-insights" element={<SpendingInsights />} />
          <Route path="/platform/dues-reminders" element={<DuesReminders />} />
          <Route path="/platform/budgets-goals" element={<BudgetsGoals />} />
          <Route path="/platform/dashboard" element={<DashboardOverview />} />
          <Route path="/platform/book-a-session" element={<DashboardSessions />} />
          <Route path="/platform/dashboard-insights" element={<DashboardInsights />} />
          <Route path="/financial-wellness" element={<Navigate to="/for-employees" replace />} />
          <Route path="/resources" element={<Navigate to="/blog" replace />} />
          <Route path="/resources/reports" element={<Navigate to="/blog" replace />} />
          <Route path="/resources/guides" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/video" element={<VideoWatchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Analytics />
    </>
  )
}
