import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KeyBenefitsSection } from './components/KeyBenefitsSection';
import { FactoryDemoSection } from './components/FactoryDemoSection';
import { StudioDemoSection } from './components/StudioDemoSection';
import { BottomCtaSection } from './components/BottomCtaSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [videoModalConfig, setVideoModalConfig] = useState<{
    isOpen: boolean;
    type: 'factory' | 'studio';
    title: string;
    description: string;
    defaultUrl: string;
  }>({
    isOpen: false,
    type: 'factory',
    title: '',
    description: '',
    defaultUrl: '',
  });

  const handleOpenVideo = (type: 'factory' | 'studio') => {
    if (type === 'factory') {
      setVideoModalConfig({
        isOpen: true,
        type: 'factory',
        title: '플리마스터 팩토리 (Suno AI 작곡 자동화) 시연 영상',
        description:
          '테마 선택 시 내장 알고리즘이 Suno 전용 프롬프트와 가사를 생성하고, Suno 웹 플랫폼에 직접 자동 입력까지 완료되는 실제 시연 영상입니다.',
        defaultUrl: '', // Ready for the creator to paste their YouTube/Loom video link
      });
    } else {
      setVideoModalConfig({
        isOpen: true,
        type: 'studio',
        title: '플리마스터 스튜디오 (원클릭 플레이리스트 영상 제작) 시연 영상',
        description:
          '옵션을 정해진 순서대로 누르고 배경과 음원을 드롭한 뒤 [영상 제작 시작] 버튼을 누르면 완성된 영상과 타임스탬프가 생성되는 시연 영상입니다.',
        defaultUrl: 'https://youtu.be/kDuYI1ateL0?si=qTAIx_6mLj_FeVlY', // Ready for the creator to paste their YouTube/Loom video link
      });
    }
  };

  const handleCloseVideo = () => {
    setVideoModalConfig((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 1. Clean Top Bar with direct external links */}
      <Navbar />

      {/* 2. Main Content Flow */}
      <main className="flex-1">
        {/* Hero: 2-Program Announcement & Core Joy/Benefits */}
        <HeroSection onOpenVideoModal={handleOpenVideo} />

        {/* Core Joy & Tangible Benefits */}
        <KeyBenefitsSection />

        {/* Program 1: Fleamaster Factory & Demo Video Frame */}
        <FactoryDemoSection onOpenVideoModal={() => handleOpenVideo('factory')} />

        {/* Program 2: Fleamaster Studio & Real App Screenshot & Demo Video Frame */}
        <StudioDemoSection onOpenVideoModal={() => handleOpenVideo('studio')} />

        {/* Bottom High-Impact CTA: KakaoTalk & Homepage */}
        <BottomCtaSection />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Interactive Video Player & Link Customizer Modal */}
      <VideoModal
        isOpen={videoModalConfig.isOpen}
        onClose={handleCloseVideo}
        title={videoModalConfig.title}
        description={videoModalConfig.description}
        defaultVideoUrl={videoModalConfig.defaultUrl}
      />
    </div>
  );
}
