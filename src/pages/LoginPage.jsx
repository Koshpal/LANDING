import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, CheckCircle, User, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.koshpal.com/api/v1';

const ROLES = [
  { id: 'EMPLOYEE', label: 'Employee', icon: User },
  { id: 'HR', label: 'HR Manager', icon: Users },
  { id: 'COACH', label: 'Financial Coach', icon: Briefcase },
];

const getPortalUrl = (role) => {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const envMap = {
    EMPLOYEE: import.meta.env.VITE_EMPLOYEE_PORTAL_URL,
    HR: import.meta.env.VITE_HR_PORTAL_URL,
    COACH: import.meta.env.VITE_COACH_PORTAL_URL,
  };
  const localhostMap = {
    EMPLOYEE: 'http://localhost:5174',
    HR: 'http://localhost:5175',
    COACH: 'http://localhost:5176',
  };
  const productionMap = {
    EMPLOYEE: 'https://employee.koshpal.com',
    HR: 'https://hr.koshpal.com',
    COACH: 'https://coach.koshpal.com',
  };
  if (envMap[role]) return envMap[role];
  return isLocalhost ? localhostMap[role] : productionMap[role];
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('EMPLOYEE');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${API_URL}/auth/me`, { withCredentials: true });
        if (res.data?.role) {
          const url = getPortalUrl(res.data.role);
          if (url) window.location.href = url;
        }
      } catch {
        // not authenticated
      }
    };
    checkAuth();
  }, []);

  const validateEmail = (val) => {
    if (!val) { setEmailError('Email is required'); return false; }
    if (!val.includes('@') || !val.split('@')[1]) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (val) => {
    if (!val) { setPasswordError('Password is required'); return false; }
    setPasswordError('');
    return true;
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const emailOk = validateEmail(email);
    const passOk = validatePassword(password);
    if (!emailOk || !passOk) { triggerShake(); return; }

    setLoading(true);
    try {
      const res = await axios.post(
        `${API_URL}/auth/login`,
        { email, password, role },
        { withCredentials: true }
      );
      const redirectUrl = res.data.redirectUrl || getPortalUrl(role);
      window.location.href = redirectUrl;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
      triggerShake();
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      {/* Left panel — blue gradient, hidden on mobile */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #334EAC 0%, #081F5C 100%)' }}
      >
        <div className="flex items-center gap-3 relative z-10">
          <img src="/logo.png" alt="Koshpal" className="h-10" />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '22px', color: '#fff' }}>Koshpal</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '38px', lineHeight: '1.25', color: '#fff', marginBottom: '16px' }}>
            Financial wellbeing,<br />built for your people
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.72)', maxWidth: '380px' }}>
            Privacy-first expense tracking and coaching sessions designed to boost productivity and financial clarity for your workforce.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {['Privacy First', 'Real-time Insights', 'Secure & Compliant'].map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '6px 14px', borderRadius: '99px',
                  background: 'rgba(255,255,255,0.12)',
                  color: '#fff', fontSize: '13px', fontWeight: 500,
                }}
              >
                <CheckCircle style={{ width: '14px', height: '14px' }} />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', position: 'relative', zIndex: 10 }}>
          © 2026 Koshpal. All rights reserved.
        </p>

        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
      </div>

      {/* Right panel — form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 sm:px-10" style={{ background: '#F9FAFB' }}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="w-full max-w-md"
        >
          {/* Mobile-only logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <img src="/logo.png" alt="Koshpal" className="h-8" />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '18px', color: '#101828' }}>Koshpal</span>
          </div>

          <div className="mb-8">
            <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '28px', color: '#101828', marginBottom: '6px' }}>Welcome back</h1>
            <p style={{ fontSize: '14px', color: '#667085' }}>Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* Role cards */}
            <div className="mb-6">
              <label style={{ fontWeight: 600, fontSize: '12px', letterSpacing: '0.05em', color: '#344054', display: 'block', marginBottom: '10px', textTransform: 'uppercase' }}>
                Sign in as
              </label>
              <div className="grid grid-cols-3 gap-3">
                {ROLES.map(({ id, label, icon: Icon }) => {
                  const selected = role === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setRole(id)}
                      style={{
                        position: 'relative',
                        padding: '14px 8px 12px',
                        borderRadius: '12px',
                        border: selected ? '2px solid #334EAC' : '2px solid #E4E7EC',
                        background: selected ? '#EEF2FF' : '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '7px',
                        transition: 'all 0.18s',
                        boxShadow: selected ? '0 0 0 3px rgba(51,78,172,0.1)' : 'none',
                      }}
                    >
                      {selected && (
                        <CheckCircle
                          style={{ position: 'absolute', top: '6px', right: '6px', width: '15px', height: '15px', color: '#334EAC' }}
                        />
                      )}
                      <Icon style={{ width: '22px', height: '22px', color: selected ? '#334EAC' : '#98A2B3' }} />
                      <span style={{ fontWeight: 600, fontSize: '11px', color: selected ? '#334EAC' : '#667085', textAlign: 'center', lineHeight: 1.3 }}>
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Error banner */}
            {error && (
              <motion.div
                animate={shake ? { x: [-6, 6, -5, 5, -3, 3, 0] } : { x: 0 }}
                transition={{ duration: 0.45 }}
                style={{
                  padding: '11px 14px', borderRadius: '10px', marginBottom: '16px',
                  background: '#FEF3F2', border: '1px solid #FDA29B',
                  fontSize: '13px', color: '#B42318', lineHeight: '1.5',
                }}
              >
                {error}
              </motion.div>
            )}

            {/* Email */}
            <div className="mb-4">
              <label style={{ fontWeight: 600, fontSize: '13px', color: '#344054', display: 'block', marginBottom: '6px' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: '#98A2B3', pointerEvents: 'none' }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }}
                  onBlur={(e) => {
                    const valid = validateEmail(email);
                    e.target.style.boxShadow = 'none';
                    e.target.style.borderColor = valid ? '#D0D5DD' : '#F04438';
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = emailError ? '#F04438' : '#334EAC';
                    e.target.style.boxShadow = '0 0 0 3px rgba(51,78,172,0.1)';
                  }}
                  placeholder="you@company.com"
                  required
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    paddingLeft: '38px', paddingRight: '14px', paddingTop: '10px', paddingBottom: '10px',
                    borderRadius: '10px', fontSize: '14px', color: '#101828',
                    background: '#fff',
                    border: `1.5px solid ${emailError ? '#F04438' : '#D0D5DD'}`,
                    outline: 'none', transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                />
              </div>
              {emailError && <p style={{ fontSize: '12px', color: '#F04438', marginTop: '4px' }}>{emailError}</p>}
            </div>

            {/* Password */}
            <div className="mb-5">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={{ fontWeight: 600, fontSize: '13px', color: '#344054' }}>Password</label>
                <Link to="/forgot-password" style={{ fontSize: '13px', color: '#334EAC', fontWeight: 600, textDecoration: 'none' }}>
                  Forgot password?
                </Link>
              </div>
              <div style={{ position: 'relative' }}>
                <Lock style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: '#98A2B3', pointerEvents: 'none' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); if (passwordError) setPasswordError(''); }}
                  onBlur={(e) => {
                    const valid = validatePassword(password);
                    e.target.style.boxShadow = 'none';
                    e.target.style.borderColor = valid ? '#D0D5DD' : '#F04438';
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = passwordError ? '#F04438' : '#334EAC';
                    e.target.style.boxShadow = '0 0 0 3px rgba(51,78,172,0.1)';
                  }}
                  placeholder="Enter your password"
                  required
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    paddingLeft: '38px', paddingRight: '42px', paddingTop: '10px', paddingBottom: '10px',
                    borderRadius: '10px', fontSize: '14px', color: '#101828',
                    background: '#fff',
                    border: `1.5px solid ${passwordError ? '#F04438' : '#D0D5DD'}`,
                    outline: 'none', transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#98A2B3', display: 'flex', alignItems: 'center' }}
                >
                  {showPassword ? <EyeOff style={{ width: '17px', height: '17px' }} /> : <Eye style={{ width: '17px', height: '17px' }} />}
                </button>
              </div>
              {passwordError && <p style={{ fontSize: '12px', color: '#F04438', marginTop: '4px' }}>{passwordError}</p>}
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2.5 cursor-pointer mb-6">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ width: '16px', height: '16px', accentColor: '#334EAC', cursor: 'pointer', flexShrink: 0 }}
              />
              <span style={{ fontSize: '14px', color: '#667085' }}>Remember me for 30 days</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '12px',
                borderRadius: '10px', border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                background: loading ? '#9BAFDB' : 'linear-gradient(90deg, #334EAC 0%, #17A2B8 100%)',
                color: '#fff', fontWeight: 700, fontSize: '15px',
                letterSpacing: '0.02em',
                transition: 'opacity 0.2s, box-shadow 0.2s',
                boxShadow: loading ? 'none' : '0 4px 14px rgba(51,78,172,0.28)',
              }}
              onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
