import React, { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  ShoppingBag,
  Globe,
  ChevronDown,
  ChevronUp,
  Check,
  Mail,
  Menu,
  X,
  ExternalLink,
  Download,
} from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const currentLang = G10_LANGUAGES.find((l) => l.code === language) || G10_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLangOpen(false);
        setIsMobileMenuOpen(false);
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

  const closeAllMenus = () => {
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all"
    >
      {/* Top Row: Brand + Desktop Nav + Action Buttons (always fits mobile viewport without clipping) */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 xl:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={closeAllMenus}
          className="flex items-center gap-2 sm:gap-2.5 group shrink-0 min-w-0"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-base sm:text-lg shadow-sm shrink-0">
            P
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
              PlyMaster
            </span>
            <span className="hidden sm:block text-[10px] text-slate-500 font-medium -mt-1 whitespace-nowrap">
              {t.nav.brandSub}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (xl and above) */}
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

        {/* Right Side: Contact + Purchase + G10 Language Switcher + Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Contact Button: KakaoTalk for Korean, Email for Non-Korean */}
          {isKorean ? (
            <a
              href={KAKAO_OPEN_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              title={t.nav.contactBtn}
              className="px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#191919] shrink-0" />
              <span className="sm:hidden">{t.nav.contactBtnShort}</span>
              <span className="hidden sm:inline">{t.nav.contactBtn}</span>
            </a>
          ) : (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              title={`${t.nav.contactBtn} (${CONTACT_EMAIL})`}
              className="px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0"
            >
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#191919] shrink-0" />
              <span className="sm:hidden">{t.nav.contactBtnShort}</span>
              <span className="hidden sm:inline">{t.nav.contactBtn}</span>
            </a>
          )}

          {/* Purchase Link Button */}
          <a
            href="https://litt.ly/plymaster"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0"
          >
            <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-100 shrink-0" />
            <span>{t.nav.buyBtn}</span>
          </a>

          {/* G10 Language Selector */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => {
                setIsLangOpen((prev) => !prev);
                setIsMobileMenuOpen(false);
              }}
              aria-expanded={isLangOpen}
              aria-haspopup="listbox"
              aria-label={t.langSelectorTitle}
              className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-[11px] sm:text-xs font-semibold text-slate-800 shadow-2xs transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span className="font-extrabold text-slate-900 tracking-tight">
                {currentLang.shortCode}
              </span>
              <span className="hidden sm:inline text-slate-700 font-medium">{currentLang.name}</span>
              {isLangOpen ? (
                <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" />
              ) : (
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" />
              )}
            </button>

            {isLangOpen && (
              <div
                role="listbox"
                aria-label={t.langSelectorTitle}
                className="absolute right-0 mt-2 w-64 max-w-[calc(100vw-1.5rem)] rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50"
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

          {/* Mobile / Tablet Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              setIsLangOpen(false);
            }}
            aria-expanded={isMobileMenuOpen}
            aria-label={t.nav.menuLabel}
            className="xl:hidden p-1.5 sm:p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shrink-0 flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Horizontal Scrollable Menu Bar (always 1-tap accessible below header) */}
      <nav
        aria-label={t.nav.menuLabel}
        className="xl:hidden border-t border-slate-100 bg-slate-50/90"
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 h-9 flex items-center gap-4 overflow-x-auto no-scrollbar text-xs font-semibold text-slate-600">
          <a
            href="#intro"
            onClick={closeAllMenus}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            {t.nav.intro}
          </a>
          <a
            href="#benefits"
            onClick={closeAllMenus}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            {t.nav.benefits}
          </a>
          <a
            href="https://pf-brown-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 py-1"
          >
            <span>{t.nav.factory}</span>
            <span className="text-[10px] text-blue-600 font-bold">· {t.nav.factoryBadge}</span>
          </a>
          <a
            href="https://github.com/nimomusic/plymasterstudio/releases/download/plymaster/PlyMaster.Studio.Setup.exe"
            download="PlyMaster.Studio.Setup.exe"
            target="_blank"
            rel="noopener noreferrer"
            title={t.nav.studioDownloadTitle}
            className="hover:text-emerald-600 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 py-1"
          >
            <span>{t.nav.studio}</span>
            <span className="text-[10px] text-emerald-600 font-bold">· {t.nav.studioBadge}</span>
          </a>
          <a
            href="https://github.com/nimomusic/plymasterstudio/releases/download/plymaster/sunolyric.zip"
            download="sunolyric.zip"
            target="_blank"
            rel="noopener noreferrer"
            title={t.nav.lyricsDownloaderTitle}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            {t.nav.lyricsDownloader}
          </a>
          <a
            href="https://www.plymaster.co.kr/?view=pop"
            target="_blank"
            rel="noopener noreferrer"
            title={t.nav.playgroundTitle}
            className="text-blue-700 hover:text-blue-800 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 py-1"
          >
            <span>{t.nav.playground}</span>
            <span className="text-[10px] font-bold">({t.nav.freeBadge})</span>
          </a>
          <a
            href="https://wavtomp3-beta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            title={t.nav.wavToMp3Title}
            className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 py-1 pr-2"
          >
            <span>{t.nav.wavToMp3}</span>
            <span className="text-[10px] font-bold">({t.nav.freeBadge})</span>
          </a>
        </div>
      </nav>

      {/* Mobile / Tablet Hamburger Full Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white shadow-xl max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="px-4 py-3 space-y-1.5">
            <a
              href="#intro"
              onClick={closeAllMenus}
              className="flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              <span>{t.nav.intro}</span>
            </a>
            <a
              href="#benefits"
              onClick={closeAllMenus}
              className="flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              <span>{t.nav.benefits}</span>
            </a>
            <a
              href="https://pf-brown-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAllMenus}
              className="flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50/70 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>{t.nav.factory}</span>
                <span className="text-[11px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold">
                  {t.nav.factoryBadge}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
            </a>
            <a
              href="https://github.com/nimomusic/plymasterstudio/releases/download/plymaster/PlyMaster.Studio.Setup.exe"
              download="PlyMaster.Studio.Setup.exe"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAllMenus}
              className="flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold text-slate-800 hover:bg-emerald-50/70 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>{t.nav.studio}</span>
                <span className="text-[11px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold">
                  {t.nav.studioBadge}
                </span>
              </div>
              <Download className="w-4 h-4 text-emerald-600 shrink-0" />
            </a>
            <a
              href="https://github.com/nimomusic/plymasterstudio/releases/download/plymaster/sunolyric.zip"
              download="sunolyric.zip"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAllMenus}
              className="flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>{t.nav.lyricsDownloader}</span>
              <Download className="w-4 h-4 text-slate-400 shrink-0" />
            </a>

            <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href="https://www.plymaster.co.kr/?view=pop"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeAllMenus}
                className="flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-xl bg-blue-50/80 border border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors"
              >
                <span>{t.nav.playground}</span>
                <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-bold">
                  {t.nav.freeBadge}
                </span>
              </a>
              <a
                href="https://wavtomp3-beta.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeAllMenus}
                className="flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors"
              >
                <span>{t.nav.wavToMp3}</span>
                <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold">
                  {t.nav.freeBadge}
                </span>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
              {isKorean ? (
                <a
                  href={KAKAO_OPEN_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeAllMenus}
                  className="flex-1 px-4 py-3 min-h-[44px] rounded-xl bg-[#FEE500] hover:bg-[#FDD800] text-xs font-bold text-[#191919] flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-[#191919] shrink-0" />
                  <span>{t.nav.contactBtn}</span>
                </a>
              ) : (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={closeAllMenus}
                  className="flex-1 px-4 py-3 min-h-[44px] rounded-xl bg-[#FEE500] hover:bg-[#FDD800] text-xs font-bold text-[#191919] flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#191919] shrink-0" />
                  <span className="truncate">{t.nav.contactBtn} ({CONTACT_EMAIL})</span>
                </a>
              )}
              <a
                href="https://litt.ly/plymaster"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeAllMenus}
                className="flex-1 px-4 py-3 min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-blue-100 shrink-0" />
                <span>{t.nav.buyBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
