import React, { useState } from 'react';
import { Sparkles, Terminal, Cpu, ArrowUpRight, Check, Copy } from 'lucide-react';

export const FactorySection: React.FC = () => {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isInjecting, setIsInjecting] = useState(false);
  const [injectSuccess, setInjectSuccess] = useState(false);

  const presets = [
    {
      title: '비 오는 성수동 카페',
      genre: 'Lo-Fi Jazz Ambient',
      bpm: '78 BPM',
      prompt: 'Warm lo-fi jazz piano, vintage Rhodes chords, subtle vinyl crackle, gentle rain ambient texture, relaxed swung drums, cozy cafe atmosphere, 78 bpm, instrumental chillhop',
      structure: '[Intro: Rain sound] -> [Verse 1: Rhodes & Bass] -> [Chorus: Soft Piano Lead] -> [Outro: Fade]',
      target: 'Suno AI v3.5 / v4 Prompt Field',
    },
    {
      title: '심야 올림픽대로 드라이브',
      genre: 'City Pop / Synthwave',
      bpm: '112 BPM',
      prompt: '80s Japanese city pop synth bass, sparkling DX7 electric piano, nostalgic brass stabs, analog drum machine, neon highway night drive vibes, 112 bpm, groovy rhythm',
      structure: '[Intro: Neon Synth] -> [Verse: Slap Bass] -> [Chorus: High Melody] -> [Outro: Saxophone Solo]',
      target: 'Suno AI v3.5 / v4 Prompt Field',
    },
    {
      title: '새벽 코딩 & 딥 포커스',
      genre: 'Deep Alpha Chillhop',
      bpm: '82 BPM',
      prompt: 'Minimalist chillhop beats, muted acoustic guitar loops, warm sub bass, organic vinyl textures, deep focus alpha waves, study music, seamless loopable, 82 bpm',
      structure: '[Section A: Sub Bass & Vinyl] -> [Section B: Acoustic Guitar Loop] -> [Section C: Head-nod Beats]',
      target: 'Suno AI v3.5 / v4 Prompt Field',
    },
  ];

  const currentPreset = presets[selectedPresetIndex];

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(currentPreset.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateInject = () => {
    setIsInjecting(true);
    setInjectSuccess(false);
    setTimeout(() => {
      setIsInjecting(false);
      setInjectSuccess(true);
      setTimeout(() => setInjectSuccess(false), 3000);
    }, 1200);
  };

  return (
    <section id="factory" className="py-24 px-6 relative border-t border-white/[0.08] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-violet-400 uppercase tracking-widest mb-3">
              <span>01 · FLEAMASTER FACTORY</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>AI MUSIC GENERATION ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              Suno 프롬프트 고민은 끝났습니다. <br />
              <span className="text-violet-400">테마 선택 한 번으로 작곡부터 수노 자동 입력까지.</span>
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm sm:text-base leading-relaxed">
            유튜브 수백만 조회수 채널의 사운드 문법을 알고리즘화했습니다. 
            원하는 감성을 고르면 가장 완성도 높은 곡이 수노(Suno)에서 즉시 생성됩니다.
          </p>
        </div>

        {/* 3 Key Capabilities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-7 hover:border-violet-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">테마별 내장 알고리즘</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              카페, 드라이브, 독서, 힐링 등 장르별 최적의 악기 구성, BPM, 코드 진행 패턴이 프로그램 내부에 정밀하게 프로그래밍되어 있습니다.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-7 hover:border-violet-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">수노 최적화 프롬프트 & 가사</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              수노가 오류 없이 고품질 사운드를 출력하도록 [Verse/Chorus 태그]와 악기 배치를 자동 조립하여 시행착오 없는 결과물을 보장합니다.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-7 hover:border-violet-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">수노 다이렉트 자동 입력</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              복사-붙여넣기의 번거로움 없이 프로그램에서 실행 버튼을 누르면 수노(Suno)의 프롬프트와 가사 입력창에 실시간으로 자동 기입됩니다.
            </p>
          </div>
        </div>

        {/* Live Interactive Engine Preview */}
        <div className="rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-violet-500/30 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-violet-400 tracking-wider">LIVE ENGINE PREVIEW</span>
              <h3 className="text-xl font-bold text-white mt-1">팩토리의 테마 알고리즘 동작 화면</h3>
            </div>
            
            {/* Theme switcher tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/10 overflow-x-auto">
              {presets.map((preset, index) => (
                <button
                  key={preset.title}
                  type="button"
                  onClick={() => {
                    setSelectedPresetIndex(index);
                    setInjectSuccess(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    selectedPresetIndex === index
                      ? 'bg-violet-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {preset.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Hardware Workstation Media */}
            <div className="lg:col-span-5 relative bg-black/60 p-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <img
                  src="/src/assets/images/factory_suno_music_1793607824015.jpg"
                  alt="플리마스터 팩토리 AI 음악 워크스테이션 콘솔"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-xs font-mono text-violet-300">
                    <span>ALGORITHM: </span>
                    <span className="text-white font-bold">{currentPreset.genre}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>템포: {currentPreset.bpm}</span>
                <span>연동 대상: Suno AI Studio</span>
              </div>
            </div>

            {/* Code / Prompt Live View */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase text-slate-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-violet-400" />
                      생성된 Suno AI 스타일 프롬프트 (Style Prompt)
                    </label>
                    <button
                      type="button"
                      onClick={handleCopyPrompt}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">복사 완료</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>프롬프트 복사</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs sm:text-sm font-mono text-violet-200 leading-relaxed">
                    {currentPreset.prompt}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-slate-400 flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    자동 조립된 악기 세션 및 곡 구조 (Structure)
                  </label>
                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs font-mono text-slate-300">
                    {currentPreset.structure}
                  </div>
                </div>
              </div>

              {/* Action Simulation Box */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  {injectSuccess ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Check className="w-4 h-4" />
                      Suno AI 플랫폼 프롬프트 필드에 성공적으로 자동 기입되었습니다!
                    </span>
                  ) : isInjecting ? (
                    <span className="text-violet-300 font-mono animate-pulse">
                      Suno AI 플랫폼과 연동 중... 프롬프트 주입 중...
                    </span>
                  ) : (
                    <span>프로그램 실행 시 수노 창에 0.1초 만에 자동 기입됩니다.</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSimulateInject}
                  disabled={isInjecting}
                  className="px-4 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 disabled:opacity-50 rounded-lg shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span>수노(Suno) 자동 입력 시뮬레이션</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
