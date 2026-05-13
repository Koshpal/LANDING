import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.koshpal.com/api/v1';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (val) => {
    if (!val) { setEmailError('Email is required'); return false; }
    if (!val.includes('@') || !val.split('@')[1]) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!validateEmail(email)) return;

    setLoading(true);
    try {
      await axios.post(`${API_URL}/auth/forgot-password`, { email }, { withCredentials: true });
      setSubmitted(true);
    } catch (err) {
      // Show success state even on error to prevent email enumeration
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: 'linear-gradient(150deg, #334EAC 0%, #081F5C 100%)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%', maxWidth: '420px',
          background: '#fff', borderRadius: '20px',
          padding: '40px 36px',
          boxShadow: '0 24px 64px rgba(8,31,92,0.25)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-8">
          <img src="/logo.png" alt="Koshpal" style={{ height: '36px' }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '18px', color: '#101828' }}>Koshpal</span>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            style={{ textAlign: 'center', padding: '8px 0' }}
          >
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%',
              background: '#ECFDF3', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 20px',
            }}>
              <CheckCircle style={{ width: '28px', height: '28px', color: '#12B76A' }} />
            </div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '22px', color: '#101828', marginBottom: '10px' }}>
              Check your email
            </h2>
            <p style={{ fontSize: '14px', color: '#667085', lineHeight: '1.6', marginBottom: '28px' }}>
              If an account exists for <strong style={{ color: '#344054' }}>{email}</strong>, we've sent password reset instructions to that address.
            </p>
            <p style={{ fontSize: '13px', color: '#98A2B3', marginBottom: '24px' }}>
              Didn't receive it? Check your spam folder or{' '}
              <button
                onClick={() => { setSubmitted(false); setEmail(''); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#334EAC', fontWeight: 600, fontSize: '13px', padding: 0 }}
              >
                try again
              </button>
              .
            </p>
            <Link
              to="/login"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '14px', color: '#334EAC', fontWeight: 600, textDecoration: 'none',
              }}
            >
              <ArrowLeft style={{ width: '16px', height: '16px' }} />
              Back to Sign In
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="mb-7">
              <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '26px', color: '#101828', marginBottom: '8px' }}>
                Forgot password?
              </h1>
              <p style={{ fontSize: '14px', color: '#667085', lineHeight: '1.6' }}>
                No worries. Enter your email and we'll send you reset instructions.
              </p>
            </div>

            {error && (
              <div style={{
                padding: '11px 14px', borderRadius: '10px', marginBottom: '16px',
                background: '#FEF3F2', border: '1px solid #FDA29B',
                fontSize: '13px', color: '#B42318',
              }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-6">
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
                  transition: 'opacity 0.2s',
                  boxShadow: loading ? 'none' : '0 4px 14px rgba(51,78,172,0.28)',
                  marginBottom: '20px',
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = '0.9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                {loading ? 'Sending…' : 'Send Reset Instructions'}
              </button>

              <div style={{ textAlign: 'center' }}>
                <Link
                  to="/login"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '14px', color: '#667085', fontWeight: 500, textDecoration: 'none',
                  }}
                >
                  <ArrowLeft style={{ width: '15px', height: '15px' }} />
                  Back to Sign In
                </Link>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
