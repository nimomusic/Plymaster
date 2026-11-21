import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Play, Mail } from 'lucide-react';
import {
  LanguageCode,
  SiteTranslation,
  KAKAO_CHANNEL_CHAT_URL,
  CONTACT_EMAIL,
} from '../data/translations';

interface HeroSectionProps {
  onOpenVideoModal: (type: 'factory' | 'studio') => void;
  language: LanguageCode;
  t: SiteTranslation['hero'];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVideoModal,
  language,
  t,
}) => {
  const isKorean = language === 'ko';

  return (
    <section id="intro" className="relative pt-10 pb-16 px-6 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Top 1-line announcement clarifying the 2 programs */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>
              {t.bannerBefore}
              <strong>{t.bannerFactory}</strong>
              {t.bannerMiddle}
              <strong>{t.bannerStudio}</strong>
              {t.bannerAfter}
            </span>
          </div>
        </div>

        {/* Big, punchy main headline focusing on joy & benefits */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.2] text-balance">
            {t.headline1} <br />
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-8">
              {t.headline2}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto text-balance">
            {t.subtitlePart1}
            {t.subtitleFactory}
            {t.subtitlePart2}
            {t.subtitleStudio}
            {t.subtitlePart3}
            {t.subtitleLine2 && (
              <>
                <br />
                {t.subtitleLine2}
              </>
            )}
          </p>

          {/* Core Action Button: KakaoTalk (KR) or Email (Non-KR) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            {isKorean ? (
              <a
                href={KAKAO_CHANNEL_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-extrabold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] active:scale-95 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-[#191919]" />
                <span>{t.ctaButton}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="px-6 py-3.5 text-sm font-extrabold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] active:scale-95 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#191919]" />
                <span>{t.ctaButton}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* 2 Program Overview Cards (Clean & Simple) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Card 1: Factory */}
          <div className="bg-white rounded-2xl border border-blue-200/80 p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  {t.factoryCard.programTag}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {t.factoryCard.engineTag}
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-2">
                {t.factoryCard.title}{' '}
                <span className="text-base sm:text-lg font-bold text-slate-500">
                  {t.factoryCard.platform}
                </span>
              </h2>
              <p className="text-sm font-bold text-blue-600 mb-3">
                {t.factoryCard.quote}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {t.factoryCard.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">
                {t.factoryCard.timeLabel}
              </span>
              <button
                type="button"
                onClick={() => onOpenVideoModal('factory')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-blue-600" />
                <span>{t.factoryCard.videoBtn}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Studio */}
          <div className="bg-white rounded-2xl border border-emerald-200/80 p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {t.studioCard.programTag}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {t.studioCard.engineTag}
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-2">
                {t.studioCard.title}{' '}
                <span className="text-base sm:text-lg font-bold text-slate-500">
                  {t.studioCard.platform}
                </span>
              </h2>
              <p className="text-sm font-bold text-emerald-600 mb-3">
                {t.studioCard.quote}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {t.studioCard.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">
                {t.studioCard.timeLabel}
              </span>
              <button
                type="button"
                onClick={() => onOpenVideoModal('studio')}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 group cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-emerald-600" />
                <span>{t.studioCard.videoBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
