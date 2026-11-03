import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Check, User, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/b2b/Seo';
import Tag from '../components/site/Tag';
import PillButton from '../components/site/PillButton';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://localhost:3000/api/v1';

const ROLES = [
  { id: 'EMPLOYEE', label: 'Employee', icon: User },
  { id: 'HR', label: 'HR', icon: Users },
  { id: 'COACH', label: 'Coach', icon: Briefcase },
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())) {
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

  const field = (bad) =>
    `w-full rounded-full border bg-[#f0f0f0] px-[26px] py-[15px] font-figtree text-[17px] text-[#0b0b0c] outline-none placeholder:text-[#8a8a8a] focus:border-[#3b3fbc] focus:bg-white focus:ring-2 focus:ring-[#3b3fbc]/20 ${bad ? 'border-[#d92d20]' : 'border-transparent'}`;

  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c] lg:grid lg:grid-cols-2">
      <Seo path="/login" title="Log in | Koshpal" description="Log in to your Koshpal employee, HR or coach portal." noindex />

      {/* Left panel: the site's blue gradient, hidden on mobile */}
      <aside
        className="relative m-5 hidden flex-col justify-between overflow-hidden rounded-[30px] p-12 text-white lg:flex"
        style={{ backgroundImage: 'radial-gradient(55% 20% at 50% 0%, #228eff 0%, rgba(34,142,255,0) 100%), linear-gradient(180deg,#156fe6 0%,#005bdd 9%,#024fc5 23%,#0043ab 41%,#003a92 58%,#02327e 76%,#012765 93%,#002458 100%)' }}
      >
        <Tag tone="light" className="self-start">Welcome back</Tag>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <h2 className="font-figtree text-[clamp(40px,4.4vw,64px)] font-normal leading-[1.05] tracking-[-0.02em]">
            Financial wellbeing, <span className="text-[#c8f169]">built for your people</span>
          </h2>
          <p className="mt-6 max-w-[440px] font-stack text-[19px] leading-[1.35] text-white/90">
            Log in to your employee, HR or coach portal to pick up where you left off.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {['Certified financial experts', 'No commissions, no products', 'Private by design'].map((t) => (
              <li key={t} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-stack text-[15px]">
                <Check aria-hidden="true" className="size-4 text-[#c8f169]" strokeWidth={2.6} />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
        <p className="font-stack text-[14px] text-white/60">© 2026 Koshpal. All rights reserved.</p>
      </aside>

      {/* Right panel: form */}
      <main id="main" className="flex items-center justify-center px-5 py-10 sm:px-10 lg:py-12">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-[480px]">
          <Link to="/" aria-label="Koshpal home" className="relative mb-10 block h-[34px] w-[138px]">
            <span className="absolute" style={{ top: '-60.67%', right: '-16.37%', bottom: '-68.22%', left: '-15.49%' }}>
              <img src="/img/home/logo.svg" alt="Koshpal" className="block size-full max-w-none" />
            </span>
          </Link>

          <h1 className="font-figtree text-[clamp(34px,3.4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em]">Welcome back</h1>
          <p className="mt-3 font-stack text-[18px] text-[#4b4b4b]">Log in to access your dashboard.</p>

          <form onSubmit={handleSubmit} noValidate className="mt-8">
            <fieldset className="mb-6">
              <legend className="mb-3 font-figtree text-[16px] font-medium">Log in as</legend>
              <div className="grid grid-cols-3 gap-2 rounded-full bg-[#f0f0f0] p-1.5">
                {ROLES.map(({ id, label, icon: Icon }) => {
                  const selected = role === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setRole(id)}
                      className={`flex flex-col items-center gap-1 rounded-full px-2 py-2.5 font-stack text-[13px] leading-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3b3fbc] sm:flex-row sm:justify-center sm:gap-2 sm:text-[15px] ${selected ? 'bg-[#3b3fbc] text-white shadow-[0_4px_10px_rgba(59,63,188,0.35)]' : 'text-[#2a2a2a] hover:bg-white'}`}
                    >
                      <Icon aria-hidden="true" className="size-4 shrink-0" />
                      {label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {error && (
              <motion.div
                role="alert"
                animate={shake ? { x: [-6, 6, -5, 5, -3, 3, 0] } : { x: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-5 rounded-[20px] bg-[#fde8e6] px-5 py-3 font-figtree text-[15px] text-[#8a1c14]"
              >
                {error}
              </motion.div>
            )}

            <div className="mb-5">
              <label htmlFor="login-email" className="mb-2.5 block font-figtree text-[16px] font-medium">Email address</label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }}
                onBlur={() => email && validateEmail(email)}
                placeholder="you@company.com"
                aria-invalid={!!emailError}
                aria-describedby={emailError ? 'login-email-err' : undefined}
                className={field(emailError)}
              />
              {emailError && <p id="login-email-err" className="mt-2 pl-[26px] font-figtree text-[14px] text-[#b21d15]">{emailError}</p>}
            </div>

            <div className="mb-7">
              <div className="mb-2.5 flex items-center justify-between">
                <label htmlFor="login-password" className="font-figtree text-[16px] font-medium">Password</label>
                <Link to="/forgot-password" className="font-figtree text-[15px] font-medium text-[#3b3fbc] underline-offset-4 hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); if (passwordError) setPasswordError(''); }}
                  placeholder="Enter your password"
                  aria-invalid={!!passwordError}
                  aria-describedby={passwordError ? 'login-password-err' : undefined}
                  className={`${field(passwordError)} pr-14`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center rounded-full p-1.5 text-[#555] hover:text-[#0b0b0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3b3fbc]"
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
              {passwordError && <p id="login-password-err" className="mt-2 pl-[26px] font-figtree text-[14px] text-[#b21d15]">{passwordError}</p>}
            </div>

            <PillButton type="submit" tone="lime" size="sm" disabled={loading} className="!text-[18px] disabled:opacity-70">
              {loading ? 'Logging in…' : 'Log in'}
            </PillButton>
          </form>

          <p className="mt-10 font-stack text-[16px] text-[#4b4b4b]">
            New to Koshpal? <Link to="/demo" className="font-medium text-[#3b3fbc] underline underline-offset-4">Book a demo</Link>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
