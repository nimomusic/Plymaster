import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';

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
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#intro" className="hover:text-blue-600 transition-colors">
            소개
          </a>
          <a href="#benefits" className="hover:text-blue-600 transition-colors">
            핵심 혜택
          </a>
          <a href="#factory" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
            <span>팩토리</span>
            <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">
              AI 작곡
            </span>
          </a>
          <a href="#studio" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
            <span>스튜디오</span>
            <span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-bold">
              영상 제작
            </span>
          </a>
          <a href="#videos" className="hover:text-blue-600 transition-colors">
            시연 영상
          </a>
        </nav>

        {/* External Conversion Links: Homepage & KakaoTalk */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* KakaoTalk Channel Chat Button */}
          <a
            href="https://pf.kakao.com/_fxhzxeX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 text-xs font-bold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#191919]" />
            <span>카카오톡 상담</span>
          </a>

          {/* Official Homepage Link */}
          <a
            href="https://www.plymaster.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200/80 active:scale-95 rounded-lg border border-slate-200 transition-all items-center gap-1.5"
          >
            <span>공식 홈페이지</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </header>
  );
};
