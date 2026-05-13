import React, { useState } from 'react';
import { Phone, Mail, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  // Rate limiting: Check submission count
  const checkRateLimit = () => {
    const today = new Date().toDateString();
    const storedData = localStorage.getItem('emailSubmissions');
    
    if (storedData) {
      const { date, count } = JSON.parse(storedData);
      
      // Reset count if it's a new day
      if (date !== today) {
        localStorage.setItem('emailSubmissions', JSON.stringify({ date: today, count: 0 }));
        return true;
      }
      
      // Check if limit exceeded
      if (count >= 10) {
        return false;
      }
    } else {
      // First submission
      localStorage.setItem('emailSubmissions', JSON.stringify({ date: today, count: 0 }));
    }
    
    return true;
  };

  const incrementSubmissionCount = () => {
    const today = new Date().toDateString();
    const storedData = localStorage.getItem('emailSubmissions');
    const { count } = JSON.parse(storedData);
    localStorage.setItem('emailSubmissions', JSON.stringify({ date: today, count: count + 1 }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check rate limit
    if (!checkRateLimit()) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Daily submission limit reached (10 per day). Please try again tomorrow.' 
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Template parameters
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'koshpal@koshpal.com' // Your email
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // Increment submission count
        incrementSubmissionCount();
        
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! We\'ll get back to you soon.' 
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        setCharCount(0);
      })
      .catch((error) => {
        setSubmitStatus({
          type: 'error', 
          message: 'Failed to send message. Please try again or email us directly.' 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm md:text-base">Let's Talk</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#101828] mb-4">
              Ready to <span className="text-[#17A2B8]">Transform</span>
              <br />
              Your Finances?
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get in touch with our team and discover how Koshpal can help you achieve financial wellness.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Form Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 relative overflow-hidden">
              {/* Gradient Border Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@company.com"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs and how we can help..."
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {charCount}/500 characters
                  </p>
                </div>

                {/* Status Message */}
                {submitStatus.message && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className={`w-5 h-5 transition-transform ${
                    isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'
                  }`} />
                </button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  We respect your privacy and will never share your information
                </p>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="bg-gradient-to-br from-[#334EAC] to-[#4A5FC1] rounded-3xl shadow-lg p-8 md:p-10 text-white relative overflow-hidden min-h-[600px] flex flex-col">
              {/* Contact Details */}
              <div className="space-y-6 mb-auto">
                {/* Phone */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-4 rounded-2xl group-hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(157, 176, 240, 0.4)' }}>
                    <Phone className="w-6 h-6 text-[#ffffff]" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#fff]">+91 9983444740</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-4 rounded-2xl group-hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(157, 176, 240, 0.4)' }}>
                    <Mail className="w-6 h-6 text-[#ffffff]" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#fff]">koshpal@koshpal.com</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className=" p-4 rounded-2xl group-hover:shadow-lg transition-all" style={{ backgroundColor: 'rgba(157, 176, 240, 0.4)' }}>
                    <Linkedin fill='#ffffff' className="w-6 h-6 text-[#ffffff]" />
                  </div>
                  <div>
                    <a href='https://www.linkedin.com/company/koshpal/' className="text-lg font-semibold text-[#fff]">Linkedin</a>
                  </div>
                </div>
              </div>

              {/* Decorative Illustration */}
              <div className="relative mt-8">
                <div className="flex items-center justify-center gap-6">
                  {/* Yellow Circle */}
                  <div className="w-20 h-20 bg-yellow-400 rounded-full shadow-lg"></div>
                  
                  {/* Blue Shield with Checkmark */}
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  {/* Yellow Folder */}
                  <div className="w-24 h-20 bg-yellow-500 rounded-2xl shadow-lg transform -rotate-12 relative">
                    <div className="absolute -top-2 left-4 w-12 h-3 bg-yellow-600 rounded-t-lg"></div>
                  </div>
                </div>

                {/* Bottom Elements */}
                <div className="flex items-center justify-center gap-8 mt-6">
                  {/* Pink Blob */}
                  <div className="w-20 h-20 bg-pink-300 rounded-full shadow-lg" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}></div>
                  
                  {/* Orange Bowl with Lock */}
                  <div className="relative">
                    <div className="w-32 h-20 bg-orange-500 rounded-t-full shadow-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small decorative stars */}
                <div className="absolute top-0 right-10 w-6 h-6 text-orange-400">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="absolute bottom-10 left-8 w-4 h-4 text-orange-400">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
