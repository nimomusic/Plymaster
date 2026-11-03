import React from 'react';
import { Play, CheckCircle2, Video, Sliders, FolderDown, FileText } from 'lucide-react';

interface StudioDemoSectionProps {
  onOpenVideoModal: () => void;
}

export const StudioDemoSection: React.FC<StudioDemoSectionProps> = ({ onOpenVideoModal }) => {
  return (
    <section id="studio" className="py-20 px-6 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
              <span>PROGRAM 02</span>
              <span>·</span>
              <span>1-CLICK VIDEO PLAYLIST MAKER</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              플리마스터 스튜디오 (Studio)
            </h2>
            <p className="mt-2 text-base sm:text-lg font-bold text-emerald-600">
              복잡한 편집 없이 옵션 선택 + 파일만 넣으면 영상 렌더링 끝
            </p>
          </div>
          <p className="text-slate-600 max-w-md text-xs sm:text-sm leading-relaxed">
            프리미어 프로 같은 전문 영상 편집 툴을 전혀 다룰 줄 몰라도 괜찮습니다. 
            정해진 순서대로 누르고 배경과 음원을 넣으면 유튜브 송출용 영상이 즉시 완성됩니다.
          </p>
        </div>

        {/* Real App Screenshot & 3 Steps Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Real Software UI Screenshot */}
          <div className="lg:col-span-7">
            <div className="bg-slate-100 rounded-2xl p-2.5 sm:p-3 border border-slate-200 shadow-lg">
              <div className="rounded-xl overflow-hidden border border-slate-300 bg-white">
                <img
                  src="/assets/aistudio/image_c9d2ff2e.png"
                  alt="PlyMaster Studio (PRO 버전) 실제 프로그램 구동 화면"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-3 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">실제 프로그램: PlyMaster Studio (PRO 버전)</span>
                <span className="font-mono text-emerald-600 font-bold">심플하고 직관적인 전용 UI</span>
              </div>
            </div>
          </div>

          {/* 3 Simple Operational Steps */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h4 className="text-sm font-bold text-slate-900">정해진 순서대로 옵션 선택</h4>
              </div>
              <p className="text-xs text-slate-600 pl-9">
                화면 비율(16:9 유튜브 일반), 음향 이퀄라이저 설정, 트랙 순서 등의 옵션을 순서대로 체크합니다.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h4 className="text-sm font-bold text-slate-900">배경 이미지/영상 & 음원 파일 넣기</h4>
              </div>
              <p className="text-xs text-slate-600 pl-9">
                원하는 분위기의 배경 파일과 팩토리에서 만든 곡 파일들을 폴더에 넣어주기만 하면 준비 완료!
              </p>
            </div>

            <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h4 className="text-sm font-bold text-blue-900">[영상 제작 시작] 파란 버튼 클릭!</h4>
              </div>
              <p className="text-xs text-slate-700 pl-9">
                클릭 즉시 고화질 영상 렌더링이 시작되며, <strong>유튜브 설명란에 바로 붙여넣을 타임스탬프 텍스트</strong>까지 자동으로 복사할 수 있게 추출됩니다.
              </p>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>영상 편집 지식 0% 지원 · 자막/타임스탬프 100% 자동 추출</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Frame for Studio */}
        <div id="videos" className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                STUDIO DEMO VIDEO
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                플리마스터 스튜디오 실제 영상 제작 시연
              </h3>
            </div>
            <button
              type="button"
              onClick={onOpenVideoModal}
              className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-2 self-start sm:self-auto"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>스튜디오 시연 영상 재생</span>
            </button>
          </div>

          <div
            onClick={onOpenVideoModal}
            className="relative rounded-xl aspect-[21/9] sm:aspect-[24/9] bg-slate-900 overflow-hidden flex items-center justify-center group cursor-pointer border border-slate-300 shadow-md"
          >
            {/* Real YouTube Video Thumbnail */}
            <img
              src="https://img.youtube.com/vi/dA_u1XKSd3I/hqdefault.jpg"
              alt="플리마스터 스튜디오 실제 시연 영상 썸네일"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors" />

            <div className="relative z-10 text-center p-6">
              <div className="w-16 h-16 rounded-full bg-emerald-600 group-hover:bg-emerald-500 group-hover:scale-110 active:scale-95 transition-all flex items-center justify-center mx-auto shadow-xl text-white mb-3 ring-4 ring-white/20">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white drop-shadow-md">
                플리마스터 스튜디오 실제 시연 영상 (유튜브 바로보기)
              </h4>
              <p className="text-xs text-slate-200 mt-1 drop-shadow-xs">
                옵션 선택부터 완성된 플레이리스트 영상 추출까지 1초 만에 확인하세요
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
