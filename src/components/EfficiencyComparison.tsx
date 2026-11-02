import React from 'react';
import { Clock, TrendingUp, Zap, Sparkles, XCircle, CheckCircle } from 'lucide-react';

interface EfficiencyComparisonProps {
  onOpenInquiry: () => void;
}

export const EfficiencyComparison: React.FC<EfficiencyComparisonProps> = ({ onOpenInquiry }) => {
  return (
    <section id="efficiency" className="py-24 px-6 relative border-t border-white/[0.08] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-violet-400 uppercase tracking-widest mb-3">
            <span>PERFORMANCE & ROI</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>제작 효율성 비교</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            영상 1편당 220분의 중노동을 <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              단 15분으로 압축합니다
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            프롬프트 작성, 오디오 싱크, 자막 배치, 타임스탬프 기록까지. 
            크리에이터가 겪는 모든 비효율을 제거했습니다.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Legacy Manual Flow */}
          <div className="rounded-2xl bg-white/[0.02] border border-red-500/20 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-red-400 uppercase font-semibold">LEGACY WORKFLOW</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">기존 수작업 플레이리스트 제작</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block font-mono">총 소요 시간</span>
                  <span className="text-2xl font-extrabold text-red-400 font-mono">약 220분</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Suno 프롬프트 시행착오 (60분)</strong>
                    <p className="text-xs text-slate-400">장르별 영어 프롬프트 검색, 불완전한 가사 생성으로 인한 수십 번의 크레딧 낭비</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">음원 수동 다운로드 및 선별 (40분)</strong>
                    <p className="text-xs text-slate-400">파일 개별 저장, 볼륨 노멀라이징, 트랙 순서 재정렬의 번거로움</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">영상 편집 프로그램 작업 (90분)</strong>
                    <p className="text-xs text-slate-400">프리미어/파이널컷에서 배경 루프 배치, 트랙별 자막 생성, 비주얼라이저 싱크 작업</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">타임스탬프 계산 및 업로드 (30분)</strong>
                    <p className="text-xs text-slate-400">곡마다 시작 초단위 계산 후 유튜브 설명란 텍스트 수작업 타이핑</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] text-xs text-slate-400 font-mono">
              결과: 주 1~2개 업로드 한계 · 높은 제작 피로도
            </div>
          </div>

          {/* Fleamaster Pipeline Flow */}
          <div className="rounded-2xl bg-gradient-to-b from-violet-950/20 via-black/40 to-cyan-950/20 border border-violet-500/40 p-8 flex flex-col justify-between shadow-xl shadow-violet-950/30">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-violet-400 uppercase font-semibold">FLEAMASTER PIPELINE</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">플리마스터 올인원 솔루션</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block font-mono">총 소요 시간</span>
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-mono">
                    단 15분
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-violet-500/20">
                  <CheckCircle className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">팩토리 테마 선택 & Suno 자동 주입 (3분)</strong>
                    <p className="text-xs text-violet-200">검증된 알고리즘으로 프롬프트와 가사를 한 번에 조립해 수노에 즉시 입력</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-indigo-500/20">
                  <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">스튜디오 옵션 선택 & 에셋 드롭 (4분)</strong>
                    <p className="text-xs text-indigo-200">배경 이미지/영상과 음원을 순서대로 드롭하면 오디오와 화면을 자동 동기화</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-cyan-500/20">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">원클릭 4K 일괄 렌더링 (8분)</strong>
                    <p className="text-xs text-cyan-200">자막, 트랙명, 사운드 반응형 비주얼라이저가 포함된 고화질 영상 즉시 생성</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-cyan-500/20">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">유튜브 타임스탬프 원클릭 복사 (즉시)</strong>
                    <p className="text-xs text-cyan-200">설명란에 붙여넣을 챕터 타임코드가 100% 자동 정렬되어 클립보드 저장</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-cyan-300 font-mono">14.6배 제작 시간 단축 · 1일 1영상 가능</span>
              <button
                type="button"
                onClick={onOpenInquiry}
                className="text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>솔루션 신청</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Metrics Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
            <span className="text-xs font-mono text-slate-400 uppercase block mb-1">PRODUCED TIME SAVED</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-2">93.2%</div>
            <p className="text-xs text-slate-300">영상 1편 제작에 필요한 반복 단순노동 시간 절감</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
            <span className="text-xs font-mono text-slate-400 uppercase block mb-1">UPLOAD FREQUENCY</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono mb-2">3.5x</div>
            <p className="text-xs text-slate-300">주당 업로드 가능 콘텐츠 수 증가로 채널 알고리즘 선점</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
            <span className="text-xs font-mono text-slate-400 uppercase block mb-1">REQUIRED SOFTWARE</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-violet-400 font-mono mb-2">0개</div>
            <p className="text-xs text-slate-300">고가의 프리미어 프로·플러그인 월 구독 비용 절감</p>
          </div>
        </div>
      </div>
    </section>
  );
};
