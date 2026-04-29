'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const languages = [
  { code: 'ru' as const, label: 'Русский' },
  { code: 'zh' as const, label: '中文' },
  { code: 'en' as const, label: 'English' },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/case', label: t('case') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const cycleLanguage = () => {
    const currentIndex = languages.findIndex(l => l.code === language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex].code);
  };

  const getCurrentLanguageLabel = () => {
    const lang = languages.find(l => l.code === language);
    return lang?.label || 'Русский';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Tesla Style */}
          <Link href="/" className="flex items-end space-x-1 group">
            <Image 
              src="/logo.webp" 
              alt="AutoUzbek" 
              width={120} 
              height={48} 
              className="h-10 w-auto brightness-0 invert group-hover:brightness-100 transition-all duration-300" 
            />
            <span className="text-[10px] font-bold text-white/70 pb-0.5 ml-1 tracking-wider group-hover:text-white transition-colors">
              UZ
            </span>
          </Link>

          {/* Desktop Navigation - Ultra Minimal */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-white/70 hover:text-white tracking-wide uppercase transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Language */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={cycleLanguage}
              className="flex items-center space-x-1 text-[13px] font-medium text-white/70 hover:text-white tracking-wide transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{getCurrentLanguageLabel()}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-xl z-40">
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[24px] font-medium text-white hover:text-[#e63946] tracking-wide uppercase transition-colors duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
