'use client';

import { useLanguage } from '@/lib/useLanguage';

export default function TelegramButton() {
  const { t } = useLanguage();
  
  return (
    <a
      href="https://t.me/uzauto_ray"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Telegram"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -translate-x-2 group-hover:translate-x-0">
        <div className="bg-white text-black text-[12px] px-4 py-2 rounded font-medium whitespace-nowrap">
          {t('telegram')}
        </div>
      </div>
      
      {/* Button - Tesla Style */}
      <div className="w-14 h-14 bg-[#e63946] hover:bg-[#c1121f] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#e63946]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl">
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 text-white fill-current"
        >
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      </div>
    </a>
  );
}
