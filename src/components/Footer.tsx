'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';
import { Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Auto</span>
                <span className="text-xl font-bold text-orange-500">Uzbek</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              {t('about_subtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">导航</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-slate-400 hover:text-white text-sm transition-colors">
                  {t('catalog')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-slate-400 text-sm">+998 71 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-slate-400 text-sm">info@autouzbek.uz</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-slate-400 text-sm">{t('address_value')}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-white mb-4">社交媒体</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 AutoUzbek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
