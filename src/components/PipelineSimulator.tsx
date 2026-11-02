import React, { useState, useEffect } from 'react';
import { THEME_PRESETS, ThemeItem } from '../data/themes';
import { synth } from '../utils/audioSynth';
import { Play, Pause, Music, Video, Sparkles, Check, ArrowRight, Disc, Volume2, Copy } from 'lucide-react';

interface PipelineSimulatorProps {
  onOpenInquiry: () => void;
  isPlayingSound: boolean;
  setIsPlayingSound: (playing: boolean) => void;
}

export const PipelineSimulator: React.FC<PipelineSimulatorProps> = ({
  onOpenInquiry,
  isPlayingSound,
  setIsPlayingSound,
}) => {
  const [selectedThemeId, setSelectedThemeId] = useState<string>(THEME_PRESETS[0].id);
  const [activeTab, setActiveTab] = useState<'both' | 'factory' | 'studio'>('both');
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedTimestamps, setCopiedTimestamps] = useState(false);

  const currentTheme = THEME_PRESETS.find((t) => t.id === selectedThemeId) || THEME_PRESETS[0];

  // When theme changes, if sound was playing, switch chords
  useEffect(() => {
    if (isPlayingSound) {
      synth.playChords(currentTheme.audioChords);
    }
  }, [selectedThemeId, isPlayingSound, currentTheme]);

  const toggleAudio = () => {
    if (isPlayingSound) {
      synth.stop();
      setIsPlayingSound(false);
    } else {
      synth.playChords(currentTheme.audioChords);
      setIsPlayingSound(true);
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(currentTheme.factory.targetSunoPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyTimestamps = () => {
    navigator.clipboard.writeText(currentTheme.studio.youtubeDescription);
    setCopiedTimestamps(true);
    setTimeout(() => setCopiedTimestamps(false), 2000);
  };

  return (
    <section id="simulator" className="py-24 px-6 relative border-t border-white/[0.08] bg-[#07080C]">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-cyan-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            <span>INTERACTIVE PIPELINE SANDBOX</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>직접 체험해보는 실시간 시뮬레이터</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            테마를 선택하고, <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              팩토리와 스튜디오의 완성 결과
            </span>를 지금 확인하세요
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            원하는 테마를 고르면 팩토리가 생성할 Suno 프롬프트와 가사, 
            그리고 스튜디오가 완성할 플레이리스트 영상 화면이 실시간으로 렌더링됩니다.
          </p>
        </div>

        {/* Theme Picker Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {THEME_PRESETS.map((theme) => {
            const isSelected = theme.id === selectedThemeId;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => {
                  setSelectedThemeId(theme.id);
                  setCurrentTrackIndex(0);
                }}
                className={`text-left p-4 rounded-xl border transition-all relative overflow-hidden ${
                  isSelected
                    ? 'bg-white/[0.08] border-violet-500/80 shadow-lg shadow-violet-950/30 ring-1 ring-violet-500/50'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-violet-400 font-semibold">{theme.badge}</span>
                  <span className="text-[11px] font-mono text-slate-500">{theme.bpm} BPM</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1 truncate">{theme.name}</h4>
                <p className="text-xs text-slate-400 truncate">{theme.genre}</p>
              </button>
            );
          })}
        </div>

        {/* Sandbox Canvas */}
        <div className="rounded-2xl bg-black/60 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Top Control Bar */}
          <div className="p-4 sm:p-5 bg-white/[0.03] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-violet-400" />
              <div className="text-sm font-semibold text-white">
                선택된 테마: <span className="text-violet-300">{currentTheme.name}</span>
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline font-mono">
                ({currentTheme.genre} · {currentTheme.bpm} BPM)
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Audio Listen Button */}
              <button
                type="button"
                onClick={toggleAudio}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-2 ${
                  isPlayingSound
                    ? 'bg-violet-600 border-violet-500 text-white shadow-md shadow-violet-900/50'
                    : 'bg-white/[0.06] border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.1]'
                }`}
              >
                {isPlayingSound ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>사운드 일시정지</span>
                    <span className="flex items-center gap-0.5 ml-1">
                      <span className="w-1 h-3 bg-white rounded-full animate-pulse" />
                      <span className="w-1 h-4 bg-white rounded-full animate-pulse delay-75" />
                      <span className="w-1 h-2 bg-white rounded-full animate-pulse delay-150" />
                    </span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>테마 사운드 미리듣기</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Dual Split Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            {/* Left Wing: FACTORY ENGINE OUTPUT */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                      <Music className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-violet-400 uppercase font-semibold">STAGE 1</span>
                      <h4 className="text-base font-bold text-white">팩토리(Factory)의 Suno 자동화</h4>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">수노 연동 준비 완료</span>
                </div>

                {/* Algorithmic Prompt Output Box */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-mono uppercase text-slate-400">
                        Suno AI 입력용 스타일 프롬프트 (Style Prompt)
                      </label>
                      <button
                        type="button"
                        onClick={handleCopyPrompt}
                        className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                      >
                        {copiedPrompt ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <Check className="w-3 h-3" /> 복사됨
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Copy className="w-3 h-3" /> 복사
                          </span>
                        )}
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/70 border border-white/10 text-xs font-mono text-violet-200 leading-relaxed">
                      {currentTheme.factory.targetSunoPrompt}
                    </div>
                  </div>

                  {/* Generated Lyrics / Structure */}
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-400 block mb-1.5">
                      자동 작성된 가사 및 보컬 구조 (Lyrics / Sections)
                    </label>
                    <pre className="p-3.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-wrap max-h-40 overflow-y-auto">
                      {currentTheme.factory.lyricsStructure}
                    </pre>
                  </div>

                  {/* Instrument Tags */}
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-400 block mb-1.5">
                      알고리즘 반영 세션 악기
                    </label>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                      {currentTheme.factory.instrumentTags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-violet-300">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-violet-950/40 border border-violet-500/30 flex items-center justify-between text-xs text-violet-200">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>수노(Suno)에 프롬프트 & 가사가 자동 기입되었습니다.</span>
                </span>
                <span className="font-mono text-violet-400 font-bold shrink-0">100% AUTO</span>
              </div>
            </div>

            {/* Right Wing: STUDIO ENGINE OUTPUT */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white/[0.01]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">STAGE 2</span>
                      <h4 className="text-base font-bold text-white">스튜디오(Studio)의 원클릭 영상</h4>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{currentTheme.studio.aspectRatio}</span>
                </div>

                {/* Simulated Playlist Video Player Component */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-950 shadow-xl">
                  {/* Background Mock Visual */}
                  <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-indigo-950/40 to-black overflow-hidden flex flex-col justify-between p-4">
                    {/* Floating Vinyl Record Simulation */}
                    <div className="absolute right-4 top-4 flex items-center gap-3">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-tr from-black via-slate-800 to-black border border-white/20 shadow-lg flex items-center justify-center ${
                          isPlayingSound ? 'animate-[spin_4s_linear_infinite]' : ''
                        }`}
                      >
                        <Disc className="w-8 h-8 text-cyan-400 opacity-60" />
                      </div>
                    </div>

                    {/* Top Video Header */}
                    <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="truncate max-w-[200px] text-white font-medium">{currentTheme.studio.videoTitle}</span>
                    </div>

                    {/* Middle Sound Wave Animation */}
                    <div className="flex items-end gap-1 h-16 px-4">
                      {Array.from({ length: 32 }).map((_, i) => {
                        const heights = [30, 45, 70, 90, 60, 40, 80, 100, 50, 75, 85, 40, 65, 95, 55, 35];
                        const h = heights[i % heights.length];
                        return (
                          <div
                            key={i}
                            className={`flex-1 rounded-t-sm transition-all duration-300 ${
                              isPlayingSound
                                ? 'bg-gradient-to-t from-cyan-500 to-violet-400'
                                : 'bg-white/20'
                            }`}
                            style={{
                              height: isPlayingSound ? `${(h * ((i % 3) + 1)) % 100}%` : '20%',
                            }}
                          />
                        );
                      })}
                    </div>

                    {/* Bottom Video Player Metadata */}
                    <div className="bg-black/80 backdrop-blur-md rounded-lg p-3 border border-white/10 flex items-center justify-between gap-4">
                      <div className="truncate">
                        <span className="text-[10px] font-mono text-cyan-400 block">CURRENT PLAYING TRACK</span>
                        <p className="text-xs font-bold text-white truncate">
                          {currentTheme.studio.trackList[currentTrackIndex]?.title || currentTheme.name}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {currentTheme.studio.trackList[currentTrackIndex]?.artist}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={toggleAudio}
                          className="p-2 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md"
                        >
                          {isPlayingSound ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tracklist selection inside studio */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase text-slate-400">
                      플레이리스트 트랙 구성 ({currentTheme.studio.trackList.length}곡)
                    </label>
                    <button
                      type="button"
                      onClick={handleCopyTimestamps}
                      className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      {copiedTimestamps ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <Check className="w-3 h-3" /> 타임스탬프 복사됨
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Copy className="w-3 h-3" /> 유튜브 타임스탬프 복사
                        </span>
                      )}
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {currentTheme.studio.trackList.map((track, i) => (
                      <div
                        key={track.title}
                        onClick={() => setCurrentTrackIndex(i)}
                        className={`cursor-pointer px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                          currentTrackIndex === i
                            ? 'bg-cyan-950/60 border border-cyan-500/40 text-cyan-200'
                            : 'bg-white/[0.02] hover:bg-white/[0.06] text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-slate-500">0{i + 1}</span>
                          <span className="font-medium text-white">{track.title}</span>
                          <span className="text-slate-500 text-[11px] hidden sm:inline">· {track.artist}</span>
                        </div>
                        <span className="font-mono text-slate-400 text-[11px]">{track.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conversion trigger */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-slate-400">4K 영상 출력 준비 완료</span>
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg shadow-md transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>이 파이프라인으로 시작하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
