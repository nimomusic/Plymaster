import React from 'react';
import { MessageCircle, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export const BottomCtaSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 via-blue-50/60 to-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>START YOUR PLAYLIST CHANNEL</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance">
          지금 바로 플리마스터와 함께 <br />
          <span className="text-blue-600">유튜브 플레이리스트 제작</span>을 시작하세요
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          프로그램 설치, 사용법, 라이선스 문의 등 궁금하신 점이 있으시다면 언제든 편하게 연락해 주세요.
        </p>

        {/* Big Dual Conversion Buttons */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {/* KakaoTalk Open Chat Card Button */}
          <a
            href="http://pf.kakao.com/_fxhzxeX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-[#FEE500] hover:bg-[#FDD800] active:scale-98 shadow-md hover:shadow-lg transition-all text-left flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#191919] text-[#FEE500] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 fill-[#FEE500]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#191919]/70 block font-mono">
                  실시간 1:1 상담
                </span>
                <span className="text-base sm:text-lg font-black text-[#191919] group-hover:underline">
                  카카오톡 오픈채팅방
                </span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#191919] group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          {/* Official Homepage Card Button */}
          <a
            href="https://www.plymaster.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 active:scale-98 shadow-sm hover:shadow-md transition-all text-left flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-black text-xl">
                P
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 block font-mono">
                  공식 웹사이트
                </span>
                <span className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 group-hover:underline">
                  www.plymaster.co.kr
                </span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          오픈채팅방 운영 시간: 연중무휴 · 실시간 빠른 답변 지원
        </p>
      </div>
    </section>
  );
};
