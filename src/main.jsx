import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import DemoPage from './pages/DemoPage'
import NotFound from './pages/NotFound'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/b2b/CustomCursor'
import './index.css'
import VideoWatchPage from './pages/VideoWatch'

// B2B interior pages (Phase 1)
import EmployeeFinancialWellness from './pages/EmployeeFinancialWellness'
import Platform from './pages/Platform'
import ForHr from './pages/ForHr'
import BusinessImpact from './pages/BusinessImpact'
import FinancialCoaching from './pages/FinancialCoaching'
import FinancialEducation from './pages/FinancialEducation'
import Security from './pages/Security'
import About from './pages/About'
import Customers from './pages/Customers'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-financial-wellness" element={<EmployeeFinancialWellness />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/for-hr" element={<ForHr />} />
        <Route path="/solutions/hr" element={<ForHr />} />
        <Route path="/business-impact" element={<BusinessImpact />} />
        <Route path="/financial-coaching" element={<FinancialCoaching />} />
        <Route path="/financial-education" element={<FinancialEducation />} />
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<About />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/video" element={<VideoWatchPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
)
