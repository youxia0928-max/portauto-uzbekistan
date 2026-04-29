'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/useLanguage';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

// Google Apps Script Web应用地址
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzG83YAkdbg_AKwCF_4w5QqaWWiJcX7yLIpVcrWc8ZMRF8Knzv104v-zStC_RsnfUE_1g/exec';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('提交失败:', error);
      alert('提交失败，请稍后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('phone_label'),
      value: '+998 888866685',
      href: 'tel:+998888866685',
    },
    {
      icon: Mail,
      label: t('email_label'),
      value: 'info@autouzbek.uz',
      href: 'mailto:info@autouzbek.uz',
    },
    {
      icon: MapPin,
      label: t('address'),
      value: t('address_value'),
      href: null,
    },
    {
      icon: Clock,
      label: t('working_hours'),
      value: t('working_hours_value'),
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white mb-6 leading-tight tracking-tight">
            {t('contact_title')}
          </h1>
          <p className="text-[18px] md:text-[20px] text-white/50 max-w-2xl">
            {t('contact_subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-[14px] text-[#e63946] uppercase tracking-[0.3em] mb-8 font-medium">
                {t('contact')}
              </h2>
              
              {/* Contact Cards */}
              <div className="space-y-4 mb-12">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-6 border border-white/10 rounded-xl hover:border-white/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-5">
                      <info.icon className="w-5 h-5 text-white/50" />
                    </div>
                    <div>
                      <div className="text-[12px] text-white/30 uppercase tracking-wider mb-1">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-[16px] text-white/80 hover:text-white transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-[16px] text-white/80">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-[12px] text-white/30 uppercase tracking-wider mb-6">
                  {t('follow_us')}
                </h3>
                <div className="flex gap-3">
                  <a href="https://t.me/uzauto_ray" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center hover:border-[#e63946] hover:bg-[#e63946]/10 transition-all duration-300 group">
                    <svg className="w-5 h-5 text-white/50 group-hover:text-[#e63946] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/998888866685" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 group">
                    <svg className="w-5 h-5 text-white/50 group-hover:text-[#25D366] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61569233188997" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all duration-300 group">
                    <svg className="w-5 h-5 text-white/50 group-hover:text-[#1877F2] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/uzevdriver" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center hover:border-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-300 group">
                    <svg className="w-5 h-5 text-white/50 group-hover:text-[#E4405F] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@portauto.uz" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 group">
                    <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@portautouz" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center hover:border-[#FF0000] hover:bg-[#FF0000]/10 transition-all duration-300 group">
                    <svg className="w-5 h-5 text-white/50 group-hover:text-[#FF0000] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - Tesla Style */}
            <div>
              <div className="border border-white/10 rounded-2xl p-10 bg-white/[0.02]">
                <h3 className="text-[18px] font-semibold text-white mb-8 uppercase tracking-wider">
                  {t('leave_request')}
                </h3>
                
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-[#e63946]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[20px] font-medium text-white mb-3">{t('success_message')}</p>
  
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('your_name')}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#e63946]/50 transition-colors"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('your_email')}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#e63946]/50 transition-colors"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('your_phone')}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#e63946]/50 transition-colors"
                      required
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('your_message')}
                      rows={5}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#e63946]/50 transition-colors resize-none"
                      required
                    />
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-10 py-4 bg-[#e63946] text-white text-[14px] font-medium uppercase tracking-wider rounded hover:bg-[#c1121f] transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          {t('submit')}...
                        </>
                      ) : (
                        <>
                          {t('submit')}
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
