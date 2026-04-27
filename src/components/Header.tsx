'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'ru' as const, label: 'Русский' },
  { code: 'zh' as const, label: '中文' },
  { code: 'en' as const, label: 'English' },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.webp" alt="AutoUzbek" width={120} height={40} className="h-10 w-auto" />
            <span className="text-2xl font-bold text-black">UZ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white hover:text-orange-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={cycleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{getCurrentLanguageLabel()}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/20 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-orange-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
      </div>
    </header>
  );
}
