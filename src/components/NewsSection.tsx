'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/useLanguage';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Google Apps Script Web应用地址
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzG83YAkdbg_AKwCF_4w5QqaWWiJcX7yLIpVcrWc8ZMRF8Knzv104v-zStC_RsnfUE_1g/exec';

export default function NewsSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      setFormData({ name: '', phone: '', message: '' });
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

  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-[14px] text-[#e63946] uppercase tracking-[0.3em] mb-4 font-medium">
            {t('contact_title')}
          </h2>
          <h3 className="text-[40px] md:text-[56px] font-bold text-white leading-tight mb-6">
            {t('contact_subtitle')}
          </h3>
          <p className="text-[16px] text-white/40 max-w-xl mx-auto">
            专业的汽车出口服务，随时为您解答疑问
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {/* Telegram */}
          <a 
            href="https://t.me/uzauto_ray" 
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 border border-white/10 rounded-xl hover:border-[#e63946]/50 transition-all duration-300 hover:bg-white/[0.02] text-center"
          >
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#e63946]/10 transition-colors">
              <svg className="w-7 h-7 text-white/70 group-hover:text-[#e63946] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <h4 className="text-[16px] font-semibold text-white mb-1">{t('telegram')}</h4>
            <p className="text-[14px] text-white/40">@uzauto_ray</p>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/998888866685" 
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 border border-white/10 rounded-xl hover:border-[#25D366]/50 transition-all duration-300 hover:bg-white/[0.02] text-center"
          >
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#25D366]/10 transition-colors">
              <svg className="w-7 h-7 text-white/70 group-hover:text-[#25D366] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h4 className="text-[16px] font-semibold text-white mb-1">{t('whatsapp_label')}</h4>
            <p className="text-[14px] text-white/40">+998 888866685</p>
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/profile.php?id=61569233188997" 
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 border border-white/10 rounded-xl hover:border-[#1877F2]/50 transition-all duration-300 hover:bg-white/[0.02] text-center"
          >
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1877F2]/10 transition-colors">
              <svg className="w-7 h-7 text-white/70 group-hover:text-[#1877F2] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h4 className="text-[16px] font-semibold text-white mb-1">{t('facebook')}</h4>
            <p className="text-[14px] text-white/40">PortAuto</p>
          </a>
        </div>

        {/* Contact Form - Tesla Style */}
        <div className="max-w-2xl mx-auto">
          <div className="border border-white/10 rounded-2xl p-10 bg-white/[0.02]">
            <h4 className="text-[18px] font-semibold text-white mb-8 text-center uppercase tracking-wider">
              {t('leave_request')}
            </h4>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#e63946]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[20px] font-medium text-white mb-2">{t('success_message')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('your_phone')}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#e63946]/50 transition-colors"
                    required
                  />
                </div>
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('your_message')}
                  rows={4}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#e63946]/50 transition-colors resize-none"
                  required
                />
                
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-12 py-4 bg-[#e63946] text-white text-[14px] font-medium uppercase tracking-wider rounded hover:bg-[#c1121f] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
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
                </div>
              </form>
            )}
          </div>

          {/* View More Link */}
          <div className="text-center mt-8">
            <Link 
              href="/case"
              className="inline-flex items-center text-[14px] text-white/50 hover:text-white transition-colors uppercase tracking-wider"
            >
              {t('explore_catalog')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
