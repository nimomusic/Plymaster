import React, { useState } from 'react';
import { Layers, Sliders, CheckCircle, Video, Download, Copy, Play } from 'lucide-react';

export const StudioSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(3);
  const [copiedDescription, setCopiedDescription] = useState(false);

  const sampleTimestampText = `00:00 01. Rainy Window - Lo-Fi Beats
03:52 02. Warm Coffee - Acoustic Guitar
07:44 03. Evening Glow - Rhodes Solo
12:15 04. Soft Drizzle - Ambient Chill
16:30 05. Cozy Corner - Lo-Fi Jazz

제작: 플리마스터 스튜디오 1-Click 플레이리스트`;

  const handleCopyDescription = () => {
    navigator.clipboard.writeText(sampleTimestampText);
    setCopiedDescription(true);
    setTimeout(() => setCopiedDescription(false), 2000);
  };

  return (
    <section id="studio" className="py-24 px-6 relative border-t border-white/[0.08] bg-[#090A0F]/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-3">
              <span>02 · FLEAMASTER STUDIO</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>1-CLICK PLAYLIST VIDEO MAKER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              프리미어 프로를 켤 필요가 없습니다. <br />
              <span className="text-cyan-400">배경과 음원만 넣으면 플레이리스트 영상 완성.</span>
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm sm:text-base leading-relaxed">
            영상 편집 프로그램에서 자막 맞추고 타임라인과 씨름하던 시간은 끝났습니다. 
            정해진 순서대로 클릭만 하면 유튜브 업로드용 4K 영상이 즉시 렌더링됩니다.
          </p>
        </div>

        {/* 3-Step Wizard Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Step 1 */}
          <div
            onClick={() => setActiveStep(1)}
            className={`cursor-pointer rounded-2xl p-7 border transition-all ${
              activeStep === 1
                ? 'bg-cyan-950/30 border-cyan-500 shadow-lg shadow-cyan-950/40'
                : 'bg-white/[0.04] border-white/[0.08] hover:border-cyan-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">STEP 01</span>
              <span className="text-xs text-slate-500 font-mono">10초 소요</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">원하는 템플릿 옵션 선택</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              화면 비율(16:9 유튜브 일반 / 9:16 쇼츠), 비주얼라이저 스타일(LP 회전판, 오디오 스펙트럼), 감성 타이틀 폰트만 순서대로 클릭합니다.
            </p>
          </div>

          {/* Step 2 */}
          <div
            onClick={() => setActiveStep(2)}
            className={`cursor-pointer rounded-2xl p-7 border transition-all ${
              activeStep === 2
                ? 'bg-cyan-950/30 border-cyan-500 shadow-lg shadow-cyan-950/40'
                : 'bg-white/[0.04] border-white/[0.08] hover:border-cyan-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">STEP 02</span>
              <span className="text-xs text-slate-500 font-mono">30초 소요</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">배경 에셋 & 음원 드롭</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              분위기 있는 배경 이미지/영상 파일과 팩토리에서 만든 곡 파일들을 드래그 앤 드롭하면, 스튜디오가 트랙 순서와 오디오 길이를 자동 정렬합니다.
            </p>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => setActiveStep(3)}
            className={`cursor-pointer rounded-2xl p-7 border transition-all ${
              activeStep === 3
                ? 'bg-cyan-950/30 border-cyan-500 shadow-lg shadow-cyan-950/40'
                : 'bg-white/[0.04] border-white/[0.08] hover:border-cyan-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">STEP 03</span>
              <span className="text-xs text-slate-500 font-mono">즉시 출력</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">원클릭 4K 영상 렌더링</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              화면 내 실시간 사운드 반응형 비주얼라이저, 트랙 전환 애니메이션, 그리고 유튜브 설명란에 붙여넣을 타임스탬프 텍스트까지 한 번에 자동 추출됩니다.
            </p>
          </div>
        </div>

        {/* Live Studio Workspace Output Frame */}
        <div className="rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-cyan-500/30 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">STUDIO RENDER ENGINE</span>
              <h3 className="text-xl font-bold text-white mt-1">
                완성된 4K 유튜브 플레이리스트 영상 화면
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                4K UHD 60FPS 렌더링 엔진 지원
              </span>
            </div>
          </div>

          {/* Visual Display */}
          <div className="p-6 sm:p-8">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src="/src/assets/images/studio_video_playlist_1793607824720.jpg"
                alt="플리마스터 스튜디오 플레이리스트 영상 제작 결과물"
                className="w-full h-auto object-cover max-h-[500px]"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-between p-6 pointer-events-none">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white">
                    <Video className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Auto-Generated Visualizer Active</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-cyan-300">PLAYLIST AUTOMATION COMPLETED</div>
                  <h4 className="text-lg sm:text-2xl font-bold text-white">
                    COZY RAINY CAFE EVENING · Lofi Jazz & Acoustic Playlist
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-slate-300 font-mono">
                    <span>트랙 수: 8곡</span>
                    <span>·</span>
                    <span>총 재생시간: 1:12:45</span>
                    <span>·</span>
                    <span>LP 회전 이펙트 & 파형 비주얼라이저 내장</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Automation Value-Add Strip */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Feature Box 1 */}
              <div className="rounded-xl bg-black/40 border border-white/10 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                    YOUTUBE TIMESTAMPS GENERATOR
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyDescription}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    {copiedDescription ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">타임스탬프 복사 완료</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>설명란 타임스탬프 복사</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3.5 rounded-lg bg-black/60 border border-white/[0.06] text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  {sampleTimestampText}
                </pre>
              </div>

              {/* Feature Box 2 */}
              <div className="rounded-xl bg-black/40 border border-white/10 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block mb-2">
                    ZERO COMPLEXITY COMPARISON
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    일반 영상 편집기에서 음원 8개를 올리고, 각 곡마다 자막 싱크 맞추고, 비주얼라이저 플러그인을 거는 데만 90분 이상 걸립니다. 
                    플리마스터 스튜디오는 이 모든 것을 <strong>배경과 음원 드롭 한 번</strong>으로 대신합니다.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs font-mono">
                  <div className="p-2.5 rounded bg-white/[0.04]">
                    <span className="text-slate-500 block">기존 프리미어 프로</span>
                    <span className="text-red-400 font-bold">평균 90분 소요</span>
                  </div>
                  <div className="p-2.5 rounded bg-cyan-950/40 border border-cyan-500/30">
                    <span className="text-cyan-300 block">플리마스터 스튜디오</span>
                    <span className="text-cyan-400 font-bold">평균 5분 완성</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
