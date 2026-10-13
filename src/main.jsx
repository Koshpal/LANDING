import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/b2b/CustomCursor'
import './index.css'

// Route-level code splitting — keeps the initial bundle to the homepage + shell.
const ContactPage = lazy(() => import('./pages/ContactPage'))
const DemoPage = lazy(() => import('./pages/DemoPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const VideoWatchPage = lazy(() => import('./pages/VideoWatch'))

const EmployeeFinancialWellness = lazy(() => import('./pages/EmployeeFinancialWellness'))
const Platform = lazy(() => import('./pages/Platform'))
const ForHr = lazy(() => import('./pages/ForHr'))
const BusinessImpact = lazy(() => import('./pages/BusinessImpact'))
const FinancialCoaching = lazy(() => import('./pages/FinancialCoaching'))
const FinancialEducation = lazy(() => import('./pages/FinancialEducation'))
const Security = lazy(() => import('./pages/Security'))
const Pricing = lazy(() => import('./pages/Pricing'))
const About = lazy(() => import('./pages/About'))
const Customers = lazy(() => import('./pages/Customers'))

const FinancialWellness = lazy(() => import('./pages/FinancialWellness'))
const Resources = lazy(() => import('./pages/Resources'))
const ResourcesReports = lazy(() => import('./pages/ResourcesReports'))
const ResourcesGuides = lazy(() => import('./pages/ResourcesGuides'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Calculator = lazy(() => import('./pages/Calculator'))

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="b2b-topbar" />
      <ScrollToTop />
      <CustomCursor />
      <Suspense fallback={<div className="min-h-screen bg-[#fff]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-employees" element={<EmployeeFinancialWellness />} />
          <Route path="/employee-financial-wellness" element={<Navigate to="/for-employees" replace />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/for-hr" element={<ForHr />} />
          <Route path="/solutions/hr" element={<Navigate to="/for-hr" replace />} />
          <Route path="/business-impact" element={<BusinessImpact />} />
          <Route path="/financial-coaching" element={<FinancialCoaching />} />
          <Route path="/financial-education" element={<FinancialEducation />} />
          <Route path="/privacy-trust" element={<Security />} />
          <Route path="/security" element={<Navigate to="/privacy-trust" replace />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/financial-wellness" element={<FinancialWellness />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/reports" element={<ResourcesReports />} />
          <Route path="/resources/guides" element={<ResourcesGuides />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/calculator" element={<Calculator />} />
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
    </BrowserRouter>
  </React.StrictMode>
)
