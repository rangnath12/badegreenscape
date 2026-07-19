import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  preFilledSubject?: string;
}

export default function ContactForm({ preFilledSubject = '' }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(preFilledSubject);
  const [message, setMessage] = useState('');

  // Validation States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync preFilledSubject when it changes
  useEffect(() => {
    if (preFilledSubject) {
      setSubject(`Enquiry regarding: ${preFilledSubject}`);
      setMessage(`Hi Bade Greenscape, I would like to enquire about the availability, height options, and soil mix requirements for your ${preFilledSubject} sapling. Please get back to me. Thank you!`);
    }
  }, [preFilledSubject]);

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = 'Full name is required';
    if (!email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tempErrors.email = 'Please enter a valid email format';
    }
    if (!phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(phone)) {
      tempErrors.phone = 'Please enter a valid 10-12 digit phone number';
    }
    if (!subject.trim()) tempErrors.subject = 'Subject is required';
    if (!message.trim()) tempErrors.message = 'Message content cannot be blank';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const serviceId = 'service_yjfwdgm';
      const templateId = 'template_7e803zf';
      const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || '';

      if (!publicKey) {
        throw new Error(
          'EmailJS Public Key is missing! Please configure VITE_EMAILJS_PUBLIC_KEY in your settings (or .env file) to deliver live emails.'
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          from_name: name,
          email,
          from_email: email,
          phone,
          subject,
          message,
          reply_to: email
        },
        publicKey
      );

      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setErrors({});
    } catch (err: any) {
      console.error("Form delivery error:", err);
      alert(err.message || "Something went wrong while sending your inquiry. Please verify your EmailJS keys or check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#f4f3ee] to-[#faf9f6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-700 bg-primary-100/50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-display mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Have questions about plant grafting, bulk corporate orders, or transport logistics? Fill out the form, and our botany experts will reply within 12 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Details & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-emerald-100/20 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-emerald-950 font-display">Bade Greenscape Headquarters</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="text-primary-600 bg-primary-50 p-2.5 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Physical Nursery Address</h4>
                    <p className="text-sm text-emerald-950 font-medium mt-1 leading-relaxed">
                      At, Dukdegaon Ta wadwani , Dist Beed , Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="text-primary-600 bg-primary-50 p-2.5 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Support Lines</h4>
                    <p className="text-sm text-emerald-950 font-medium mt-1">
                      +91 90223 51601
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="text-primary-600 bg-primary-50 p-2.5 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Handles</h4>
                    <p className="text-sm text-emerald-950 font-medium mt-1">
                      badegreenscape@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="text-primary-600 bg-primary-50 p-2.5 rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nursery Timings</h4>
                    <p className="text-sm text-emerald-950 font-medium mt-1">
                      Monday - Sunday: 8:00 AM - 7:00 PM (open all days)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm aspect-video relative group">
              <iframe
                id="contact-google-map"
                src="https://maps.google.com/maps?q=Dukdegaon%20Wadvani%20Beed%20Maharashtra%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Column 2: Inquiry Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-emerald-100/20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-emerald-600" />
            
            <h3 className="text-xl font-bold text-emerald-950 font-display mb-2">Send an Enquiry</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-8">
              Whether you are looking for a single fruiting Mango tree or 10,000 seedlings for land afforestation, let us know your requirements.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    placeholder="e.g. Priyesh Sen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 bg-slate-50 border ${
                      errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-primary-500'
                    } rounded-2xl text-sm transition-all outline-none font-medium text-emerald-950`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-medium flex items-center space-x-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-form-email"
                    type="email"
                    placeholder="[email protected]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 bg-slate-50 border ${
                      errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-primary-500'
                    } rounded-2xl text-sm transition-all outline-none font-medium text-emerald-950`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-medium flex items-center space-x-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-form-phone"
                    type="tel"
                    placeholder="e.g. +91 90223 51601"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-4 py-3 bg-slate-50 border ${
                      errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-primary-500'
                    } rounded-2xl text-sm transition-all outline-none font-medium text-emerald-950`}
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-red-500 font-medium flex items-center space-x-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-form-subject"
                    type="text"
                    placeholder="e.g. Bulk Mango Grafts Enquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`w-full px-4 py-3 bg-slate-50 border ${
                      errors.subject ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-primary-500'
                    } rounded-2xl text-sm transition-all outline-none font-medium text-emerald-950`}
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-red-500 font-medium flex items-center space-x-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                  Message Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-form-message"
                  rows={5}
                  placeholder="Tell us about your garden conditions, soil type, sunlight access, and quantity requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full p-4 bg-slate-50 border ${
                    errors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-primary-500'
                  } rounded-2xl text-sm transition-all outline-none font-medium text-emerald-950 resize-none`}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 font-medium flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </span>
                )}
              </div>

              {/* Success Alert Banner */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-green-50 border border-green-200 p-5 rounded-2xl flex items-start space-x-3 text-xs text-green-800"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm">🌱 Thank you! We&apos;ll get back to you soon 🌱</p>
                      <p className="text-[11px] text-green-700/80 mt-1 leading-relaxed">
                        Your inquiry form has been captured successfully. An automatic email notification has been triggered to badegreenscape@gmail.com. Our nursery horticulturists will review your local garden constraints and get back to you within 12 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                id="btn-contact-submit"
                type="submit"
                disabled={isSubmitting}
                className="w-full group bg-primary-700 hover:bg-primary-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2 disabled:bg-slate-400 active:scale-98"
              >
                <span>{isSubmitting ? 'Delivering Inquiry...' : 'Submit Inquiry'}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
