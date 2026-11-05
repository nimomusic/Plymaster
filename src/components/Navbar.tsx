import React from 'react';
import { ExternalLink, MessageCircle, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Brand Logo matching the app screenshot */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              PlyMaster
            </span>
            <span className="text-[10px] text-slate-500 font-medium -mt-1">
              팩토리 & 스튜디오
            </span>
          </div>
        </a>

        {/* Clean, intuitive navigation links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-slate-600">
          <a href="#intro" className="hover:text-blue-600 transition-colors shrink-0">
            소개
          </a>
          <a href="#benefits" className="hover:text-blue-600 transition-colors shrink-0">
            핵심 혜택
          </a>
          <a href="#factory" className="hover:text-blue-600 transition-colors flex items-center gap-1.5 shrink-0">
            <span>팩토리</span>
            <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">
              AI 작곡
            </span>
          </a>
          <a href="#studio" className="hover:text-blue-600 transition-colors flex items-center gap-1.5 shrink-0">
            <span>스튜디오</span>
            <span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-bold">
              영상 제작
            </span>
          </a>
          <a href="#videos" className="hover:text-blue-600 transition-colors shrink-0">
            시연 영상
          </a>

          {/* Additional Tool 1: AI Music Playground */}
          <a
            href="https://www.plymaster.co.kr/?view=pop"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-50/80 hover:bg-blue-100 text-blue-700 hover:text-blue-800 transition-all flex items-center gap-1.5 border border-blue-200 shrink-0"
            title="무료로 즐기는 AI음악 스트리밍 - AI음악 놀이터"
          >
            <span>🎧 AI 음악 놀이터</span>
            <span className="text-[10px] bg-blue-600 text-white px-1 py-0.2 rounded font-bold">
              무료
            </span>
          </a>

          {/* Additional Tool 2: Free Wav to MP3 Converter */}
          <a
            href="https://wavtomp3-beta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50/80 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-800 transition-all flex items-center gap-1.5 border border-emerald-200 shrink-0"
            title="무료 Wav to MP3 변환기"
          >
            <span>✨ Wav to MP3</span>
            <span className="text-[10px] bg-emerald-600 text-white px-1 py-0.2 rounded font-bold">
              무료
            </span>
          </a>
        </nav>

        {/* External Conversion Links: Homepage & KakaoTalk */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* KakaoTalk Open Chat Button */}
          <a
            href="https://open.kakao.com/o/ggTf7cci"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 text-xs font-bold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#191919]" />
            <span>오픈 채팅방 입장</span>
          </a>

          {/* Purchase Link Button */}
          <a
            href="https://litt.ly/plymaster"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-blue-100" />
            <span>구매하기</span>
          </a>
        </div>
      </div>
    </header>
  );
};
