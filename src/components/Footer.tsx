import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-slate-900 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-white font-extrabold text-base">
            <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-black">
              P
            </div>
            <span>PlyMaster</span>
          </div>
          <p className="text-slate-400 text-center md:text-left">
            플리마스터 팩토리(AI 작곡) & 스튜디오(영상 제작) 올인원 솔루션
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.plymaster.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>공식 홈페이지</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
          <a
            href="https://pf.kakao.com/_fxhzxeX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FEE500] hover:underline flex items-center gap-1 font-semibold"
          >
            <MessageCircle className="w-3 h-3 fill-[#FEE500]" />
            <span>카카오톡 1:1 상담</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 font-mono text-center md:text-right">
          © {new Date().getFullYear()} PlyMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
