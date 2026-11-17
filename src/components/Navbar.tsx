import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, ShoppingBag, Globe, ChevronDown, ChevronUp, Check, Mail } from 'lucide-react';
import {
  G10_LANGUAGES,
  LanguageCode,
  SiteTranslation,
  KAKAO_OPEN_CHAT_URL,
  CONTACT_EMAIL,
} from '../data/translations';

interface NavbarProps {
  language: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  t: SiteTranslation;
}

export const Navbar: React.FC<NavbarProps> = ({ language, onSelectLanguage, t }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = G10_LANGUAGES.find((l) => l.code === language) || G10_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const isKorean = language === 'ko';

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-[1440px] mx-auto px-4 xl:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo matching the app screenshot */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
              PlyMaster
            </span>
            <span className="text-[10px] text-slate-500 font-medium -mt-1 whitespace-nowrap">
              {t.nav.brandSub}
            </span>
          </div>
        </a>

        {/* Clean, intuitive navigation links */}
        <nav className="hidden xl:flex items-center gap-4 text-[13px] font-semibold text-slate-600">
          <a href="#intro" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            {t.nav.intro}
          </a>
          <a href="#benefits" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            {t.nav.benefits}
          </a>
          <a
            href="https://pf-brown-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
          >
            <span>{t.nav.factory}</span>
            <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">
              {t.nav.factoryBadge}
            </span>
          </a>
          <a
            href="https://github.com/nimomusic/plymasterstudio/releases/download/plymaster/PlyMaster.Studio.Setup.exe"
            download="PlyMaster.Studio.Setup.exe"
            target="_blank"
            rel="noopener noreferrer"
            title={t.nav.studioDownloadTitle}
            className="hover:text-blue-600 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
          >
            <span>{t.nav.studio}</span>
            <span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-bold">
              {t.nav.studioBadge}
            </span>
          </a>
          <a
            href="https://github.com/nimomusic/plymasterstudio/releases/download/plymaster/sunolyric.zip"
            download="sunolyric.zip"
            target="_blank"
            rel="noopener noreferrer"
            title={t.nav.lyricsDownloaderTitle}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.lyricsDownloader}
          </a>

          {/* Additional Tool 1: AI Music Playground */}
          <a
            href="https://www.plymaster.co.kr/?view=pop"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-50/80 hover:bg-blue-100 text-blue-700 hover:text-blue-800 transition-all flex items-center gap-1.5 border border-blue-200 whitespace-nowrap shrink-0"
            title={t.nav.playgroundTitle}
          >
            <span>{t.nav.playground}</span>
            <span className="text-[10px] bg-blue-600 text-white px-1 py-0.2 rounded font-bold">
              {t.nav.freeBadge}
            </span>
          </a>

          {/* Additional Tool 2: Free Wav to MP3 Converter */}
          <a
            href="https://wavtomp3-beta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50/80 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-800 transition-all flex items-center gap-1.5 border border-emerald-200 whitespace-nowrap shrink-0"
            title={t.nav.wavToMp3Title}
          >
            <span>{t.nav.wavToMp3}</span>
            <span className="text-[10px] bg-emerald-600 text-white px-1 py-0.2 rounded font-bold">
              {t.nav.freeBadge}
            </span>
          </a>
        </nav>

        {/* Right Side: Contact + Purchase + G10 Language Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Contact Button: KakaoTalk for Korean, Email for Non-Korean */}
          {isKorean ? (
            <a
              href={KAKAO_OPEN_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-bold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#191919]" />
              <span>{t.nav.contactBtn}</span>
            </a>
          ) : (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              title={CONTACT_EMAIL}
              className="px-3 py-2 text-xs font-bold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-[#191919]" />
              <span>{t.nav.contactBtn}</span>
            </a>
          )}

          {/* Purchase Link Button */}
          <a
            href="https://litt.ly/plymaster"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-blue-100" />
            <span>{t.nav.buyBtn}</span>
          </a>

          {/* G10 Language Selector (matching uploaded reference UI) */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsLangOpen((prev) => !prev)}
              aria-expanded={isLangOpen}
              aria-haspopup="listbox"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 shadow-2xs transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span className="font-extrabold text-slate-900 tracking-tight">
                {currentLang.shortCode}
              </span>
              <span className="text-slate-700 font-medium">{currentLang.name}</span>
              {isLangOpen ? (
                <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>

            {isLangOpen && (
              <div
                role="listbox"
                aria-label={t.langSelectorTitle}
                className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50"
              >
                {/* Dropdown Header */}
                <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-white">
                  <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">
                    {t.langSelectorTitle}
                  </span>
                </div>

                {/* Scrollable G10 Language List */}
                <div className="max-h-80 overflow-y-auto py-1">
                  {G10_LANGUAGES.map((lang) => {
                    const isSelected = lang.code === language;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          onSelectLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50/70 text-blue-600'
                            : 'hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <span
                            className={`text-xs font-bold w-6 shrink-0 ${
                              isSelected ? 'text-blue-600' : 'text-slate-500'
                            }`}
                          >
                            {lang.shortCode}
                          </span>
                          <div className="min-w-0">
                            <div
                              className={`text-sm font-semibold leading-snug truncate ${
                                isSelected ? 'text-blue-600' : 'text-slate-800'
                              }`}
                            >
                              {lang.name}
                            </div>
                            <div className="text-[11px] text-slate-400 leading-tight truncate">
                              {lang.region}
                            </div>
                          </div>
                        </div>

                        {isSelected && (
                          <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
