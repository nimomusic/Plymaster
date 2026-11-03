import React from 'react';
import { X, Play, ExternalLink, MessageCircle } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  defaultVideoUrl?: string;
  description: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  defaultVideoUrl = '',
  description,
}) => {
  if (!isOpen) return null;

  // Helper to extract clean YouTube embed URL
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    try {
      if (url.includes('youtube.com/watch?v=')) {
        const id = url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      } else if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0]?.split('&')[0];
        return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      } else if (url.includes('youtube.com/embed/')) {
        return url;
      }
      return url;
    } catch {
      return url;
    }
  };

  const embedUrl = getEmbedUrl(defaultVideoUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block font-mono">
              DEMO VIDEO
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8 max-w-md">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 fill-blue-500 text-blue-500 ml-1" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">시연 영상 준비 중입니다</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                현재 팩토리 전용 시연 영상이 준비 중입니다. 
                궁금하신 점은 아래 카카오톡 상담을 통해 실시간으로 안내받으실 수 있습니다.
              </p>
              <a
                href="https://pf.kakao.com/_fxhzxeX/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#191919]" />
                <span>카카오톡으로 문의하기</span>
              </a>
            </div>
          )}
        </div>

        {/* Clean Footer (No editing controls - strictly visitor-facing) */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-600 leading-relaxed flex-1">{description}</p>

          <div className="flex items-center gap-2.5 shrink-0">
            {defaultVideoUrl && (
              <a
                href={defaultVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>유튜브에서 보기</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <a
              href="https://pf.kakao.com/_fxhzxeX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-bold text-[#191919] bg-[#FEE500] hover:bg-[#FDD800] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#191919]" />
              <span>카카오톡 문의</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
