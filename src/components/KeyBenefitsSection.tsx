import React from 'react';
import { Smile, DollarSign, Clock, Flame } from 'lucide-react';

export const KeyBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Smile,
      badge: 'JOY & FUN',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      title: '나도 오늘부터 인기 플레이리스트 유튜버',
      highlight: '음악·영상 지식 0%도 첫날 바로 영상 발행!',
      description:
        '작곡 툴도, 프리미어 프로도 필요 없습니다. 좋아하는 감성의 테마를 누르면 마법처럼 음악과 영상이 완성되는 짜릿한 즐거움을 경험하세요.',
    },
    {
      icon: DollarSign,
      badge: 'COST SAVINGS',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      title: 'Suno 프롬프트 실패로 날리던 크레딧 0원',
      highlight: '제작자가 일일이 검증한 사운드 알고리즘',
      description:
        '어떤 영문 프롬프트를 넣어야 할지 몰라 버리던 비싼 Suno 크레딧은 이제 그만! 장르별 황금 비율로 실패 없이 고품질 곡만 뽑아냅니다. 마음에 들지 않는 부분은 제작자에게 AS요청가능!',
    },
    {
      icon: Clock,
      badge: 'TIME FREEDOM',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
      title: '지긋지긋한 영상 편집 스트레스 해방',
      highlight: '자막 싱크, 타임스탬프 계산 시간 0초',
      description:
        '곡마다 시작 시간 초단위로 적고 설명란에 복사하던 노가다는 끝입니다. 스튜디오가 비주얼라이저와 유튜브 설명란 타임코드를 한 번에 자동 추출합니다.',
    },
    {
      icon: Flame,
      badge: 'FAST GROWTH',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200',
      title: '주 1회에서 매일 1편 업로드로 알고리즘 장악',
      highlight: '제작 소요시간 220분 → 단 5분으로 단축!',
      description:
        '속도가 곧 채널의 경쟁력입니다. 퇴근 후 가벼운 마음으로 클릭 몇 번이면 매일 새로운 플레이리스트를 업로드해 보다 쉽게 경쟁력을 확보 할 수 있습니다.',
    },
  ];

  return (
    <section id="benefits" className="py-20 px-6 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
            WHY PLYMASTER
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight text-balance">
            플리마스터를 사용했을 때 <br />
            <span className="text-blue-600">당신이 얻게 되는 확실한 즐거움과 이익</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            복잡한 기술 설명 대신, 당신의 크리에이터 라이프가 얼마나 쉽고 재미있어지는지 느껴보세요.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-7 bg-slate-50/70 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-2xs">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-blue-600 mb-3">
                    {item.highlight}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
