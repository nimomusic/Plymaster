import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Play, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  onOpenVideoModal: (type: 'factory' | 'studio') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenVideoModal }) => {
  return (
    <section id="intro" className="relative pt-10 pb-16 px-6 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Top 1-line announcement clarifying the 2 programs */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>플리마스터는 <strong>팩토리(AI 작곡)</strong>와 <strong>스튜디오(영상 제작)</strong> 2가지로 구성되어 있습니다</span>
          </div>
        </div>

        {/* Big, punchy main headline focusing on joy & benefits */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.2] text-balance">
            클릭 몇 번으로 내 채널에 <br />
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-8">
              음악과 영상이 쏟아집니다
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto text-balance">
            복잡한 작곡 고민, 프리미어 프로 영상 편집 스트레스는 이제 그만! <br className="hidden sm:inline" />
            테마만 고르면 <strong>Suno 작곡(팩토리)</strong>부터 <strong>플레이리스트 영상(스튜디오)</strong>까지 단 5분 만에 끝납니다.
          </p>

          {/* Core Action Buttons: KakaoTalk & Homepage */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="https://pf.kakao.com/_fxhzxeX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-sm font-extrabold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] active:scale-95 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-[#191919]" />
              <span>카카오톡 1:1 상담 문의하기</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.plymaster.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 active:scale-95 rounded-xl shadow-xs transition-all flex items-center gap-2"
            >
              <span>공식 홈페이지 바로가기</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
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
                  PROGRAM 01
                </span>
                <span className="text-xs font-semibold text-slate-500">Suno AI 전용 작곡 엔진</span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-2">
                플리마스터 팩토리
              </h2>
              <p className="text-sm font-bold text-blue-600 mb-3">
                "테마만 선택하면 Suno 작곡·작사부터 자동 입력까지 끝!"
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                각 곡을 제작하는 테마별 황금 알고리즘이 내장되어 있어, 사용자가 테마를 누르고 실행하면 수노(Suno)에 최적화된 프롬프트와 가사를 자동으로 만들고 수노에 직접 입력까지 완료해 줍니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">소요 시간: 1분</span>
              <button
                type="button"
                onClick={() => onOpenVideoModal('factory')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group"
              >
                <Play className="w-3.5 h-3.5 fill-blue-600" />
                <span>팩토리 시연 영상 보기</span>
              </button>
            </div>
          </div>

          {/* Card 2: Studio */}
          <div className="bg-white rounded-2xl border border-emerald-200/80 p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  PROGRAM 02
                </span>
                <span className="text-xs font-semibold text-slate-500">원클릭 영상 제작 엔진</span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-2">
                플리마스터 스튜디오
              </h2>
              <p className="text-sm font-bold text-emerald-600 mb-3">
                "복잡한 편집 없이 옵션 고르고 파일만 넣으면 영상 완성!"
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                프리미어나 애프터이펙트를 켤 필요가 없습니다. 정해진 순서대로 옵션을 선택하고 배경 이미지 또는 영상과 음원 파일만 넣어주면 바로 고화질 플레이리스트 영상을 즉시 렌더링합니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">소요 시간: 5분</span>
              <button
                type="button"
                onClick={() => onOpenVideoModal('studio')}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 group"
              >
                <Play className="w-3.5 h-3.5 fill-emerald-600" />
                <span>스튜디오 시연 영상 보기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
