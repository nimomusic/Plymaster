import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KeyBenefitsSection } from './components/KeyBenefitsSection';
import { FactoryDemoSection } from './components/FactoryDemoSection';
import { StudioDemoSection } from './components/StudioDemoSection';
import { BottomCtaSection } from './components/BottomCtaSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { LanguageCode, TRANSLATIONS } from './data/translations';

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>('ko');
  const [videoModalType, setVideoModalType] = useState<'factory' | 'studio' | null>(null);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleOpenVideo = (type: 'factory' | 'studio') => {
    setVideoModalType(type);
  };

  const handleCloseVideo = () => {
    setVideoModalType(null);
  };

  const modalTitle =
    videoModalType === 'factory'
      ? t.videoModal.factoryTitle
      : videoModalType === 'studio'
        ? t.videoModal.studioTitle
        : '';

  const modalDescription =
    videoModalType === 'factory'
      ? t.videoModal.factoryDesc
      : videoModalType === 'studio'
        ? t.videoModal.studioDesc
        : '';

  const modalDefaultUrl =
    videoModalType === 'factory'
      ? 'https://youtu.be/gbEG7X1hmBk'
      : videoModalType === 'studio'
        ? 'https://youtu.be/dA_u1XKSd3I'
        : '';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 1. Clean Top Bar with G10 Language Selector */}
      <Navbar
        language={language}
        onSelectLanguage={setLanguage}
        t={t}
      />

      {/* 2. Main Content Flow */}
      <main className="flex-1">
        {/* Hero: 2-Program Announcement & Core Joy/Benefits */}
        <HeroSection
          onOpenVideoModal={handleOpenVideo}
          language={language}
          t={t.hero}
        />

        {/* Core Joy & Tangible Benefits */}
        <KeyBenefitsSection t={t.benefits} />

        {/* Program 1: PlyMaster Factory & Demo Video Frame */}
        <FactoryDemoSection
          onOpenVideoModal={() => handleOpenVideo('factory')}
          t={t.factoryDemo}
        />

        {/* Program 2: PlyMaster Studio & Real App Screenshot & Demo Video Frame */}
        <StudioDemoSection
          onOpenVideoModal={() => handleOpenVideo('studio')}
          t={t.studioDemo}
        />

        {/* Bottom High-Impact CTA: KakaoTalk (KR) or Email (Non-KR) */}
        <BottomCtaSection
          language={language}
          t={t.bottomCta}
        />
      </main>

      {/* 3. Footer */}
      <Footer
        language={language}
        t={t.footer}
      />

      {/* 4. Interactive Video Player Modal */}
      <VideoModal
        isOpen={videoModalType !== null}
        onClose={handleCloseVideo}
        title={modalTitle}
        description={modalDescription}
        defaultVideoUrl={modalDefaultUrl}
        language={language}
        t={t.videoModal}
      />
    </div>
  );
}
