import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, Mail } from 'lucide-react';
import {
  LanguageCode,
  SiteTranslation,
  KAKAO_CHANNEL_CHAT_URL,
  CONTACT_EMAIL,
} from '../data/translations';

interface BottomCtaSectionProps {
  language: LanguageCode;
  t: SiteTranslation['bottomCta'];
}

export const BottomCtaSection: React.FC<BottomCtaSectionProps> = ({ language, t }) => {
  const isKorean = language === 'ko';

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 via-blue-50/60 to-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>{t.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance">
          {t.title1} <br />
          <span className="text-blue-600">{t.titleHighlight}</span>
          {t.title2}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        {/* Conversion Button: KakaoTalk (KR) or Email (Non-KR) */}
        <div className="mt-10 max-w-md mx-auto">
          {isKorean ? (
            <a
              href={KAKAO_CHANNEL_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-[#FEE500] hover:bg-[#FDD800] active:scale-98 shadow-md hover:shadow-lg transition-all text-left flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#191919] text-[#FEE500] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-[#FEE500]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#191919]/70 block font-mono">
                    {t.cardSub}
                  </span>
                  <span className="text-base sm:text-lg font-black text-[#191919] group-hover:underline">
                    {t.cardTitle}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#191919] group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          ) : (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="p-5 sm:p-6 rounded-2xl bg-[#FEE500] hover:bg-[#FDD800] active:scale-98 shadow-md hover:shadow-lg transition-all text-left flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#191919] text-[#FEE500] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-[#191919]/70 block font-mono">
                    {t.cardSub}
                  </span>
                  <span className="text-sm sm:text-base font-black text-[#191919] group-hover:underline block truncate">
                    {t.cardTitle}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#191919] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
            </a>
          )}
        </div>

        <p className="mt-8 text-xs text-slate-400">
          {t.note}
        </p>
      </div>
    </section>
  );
};
