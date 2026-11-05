import React from 'react';
import { Play, CheckCircle2, Sparkles, Cpu, Send, Video } from 'lucide-react';

interface FactoryDemoSectionProps {
  onOpenVideoModal: () => void;
}

export const FactoryDemoSection: React.FC<FactoryDemoSectionProps> = ({ onOpenVideoModal }) => {
  return (
    <section id="factory" className="py-20 px-6 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
              <span>PROGRAM 01</span>
              <span>·</span>
              <span>SUNO AI AUTOMATION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              플리마스터 팩토리 (Factory)
            </h2>
            <p className="mt-2 text-base sm:text-lg font-bold text-blue-600">
              테마 선택 한 번으로 작곡·작사부터 Suno 자동 입력까지 1초 컷
            </p>
          </div>
          <p className="text-slate-600 max-w-md text-xs sm:text-sm leading-relaxed">
            Suno AI 사이트를 열고 영어 프롬프트를 일일이 고민할 필요가 없습니다. 
            원하는 테마를 고르면 팩토리가 알아서 곡을 설계하고 수노에 직접 입력해 줍니다.
          </p>
        </div>

        {/* 2-Column Split: Key Steps + Demo Video Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3 Simple Steps */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h4 className="text-sm font-bold text-slate-900">원하는 테마 선택</h4>
              </div>
              <p className="text-xs text-slate-600 pl-9">
                대중들이 열광하는 장르 알고리즘 중 원하는 테마를 선택합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h4 className="text-sm font-bold text-slate-900">Suno 최적화 프롬프트·가사 자동 조립</h4>
              </div>
              <p className="text-xs text-slate-600 pl-9">
                수노가 가장 완성도 높게 작곡할 수 있는 악기 배치, BPM, 곡 구성(Verse, Chorus) 태그를 한 번에 빌드합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-blue-200 bg-blue-50/30 shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h4 className="text-sm font-bold text-blue-900">수노(Suno)에 직접 다이렉트 자동 입력!</h4>
              </div>
              <p className="text-xs text-slate-700 pl-9">
                복사·붙여넣기 할 필요 없이, 실행 버튼을 누르면 수노 프롬프트와 가사 입력창에 실시간으로 자동 기입됩니다.
              </p>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>영문 프롬프트 작성 불필요 · 실패 없는 음악 생성</span>
              </div>
            </div>
          </div>

          {/* Right: Prominent Demo Video Frame */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-3 sm:p-4">
              <div className="relative rounded-xl aspect-video bg-slate-900 overflow-hidden flex flex-col justify-between p-5 group cursor-pointer border border-slate-300 shadow-md"
                onClick={onOpenVideoModal}
              >
                {/* Real YouTube Video Thumbnail */}
                <img
                  src="https://img.youtube.com/vi/gbEG7X1hmBk/hqdefault.jpg"
                  alt="플리마스터 팩토리 실제 시연 영상 썸네일"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-blue-600 text-white shadow-xs">
                    FACTORY DEMO VIDEO
                  </span>
                  <span className="text-[11px] font-medium text-slate-300 bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                    유튜브 바로보기
                  </span>
                </div>

                {/* Center Big Play Button */}
                <div className="relative z-10 text-center my-auto">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 group-hover:bg-blue-500 group-hover:scale-110 active:scale-95 transition-all flex items-center justify-center mx-auto shadow-xl text-white ring-4 ring-white/20">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-3 drop-shadow-md">
                    플리마스터 팩토리 실제 구동 시연 영상
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 drop-shadow-xs">
                    클릭하여 테마 선택 및 Suno 자동 입력 과정을 1초 만에 확인하세요
                  </p>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 flex items-center justify-between text-xs text-slate-300 border-t border-white/10 pt-3">
                  <span>알고리즘 기반 프롬프트 생성 시연</span>
                  <span className="text-blue-300 font-semibold group-hover:underline flex items-center gap-1">
                    <span>영상 재생하기</span>
                    <Play className="w-3 h-3 fill-blue-300" />
                  </span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
