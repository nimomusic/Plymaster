import React, { useState } from 'react';
import { X, Play, ExternalLink, Link2, Check } from 'lucide-react';

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
  const [videoUrl, setVideoUrl] = useState(defaultVideoUrl);
  const [inputUrl, setInputUrl] = useState(defaultVideoUrl);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  // Helper to extract YouTube video ID if provided
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    try {
      if (url.includes('youtube.com/watch?v=')) {
        const id = url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${id}?autoplay=1`;
      } else if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube.com/embed/${id}?autoplay=1`;
      } else if (url.includes('youtube.com/embed/')) {
        return url;
      }
      return url;
    } catch {
      return url;
    }
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setVideoUrl(inputUrl);
    setIsEditing(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block font-mono">
              DEMO VIDEO
            </span>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8 max-w-md">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 fill-blue-500 text-blue-500 ml-1" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">시연 영상 준비 중입니다</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                현재 제작 완료된 유튜브 또는 데모 영상 링크를 아래에서 등록하시면 즉시 방문자에게 실제 시연 영상이 재생됩니다.
              </p>
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <Link2 className="w-3.5 h-3.5" />
                <span>유튜브 시연 영상 링크 등록하기</span>
              </button>
            </div>
          )}
        </div>

        {/* Footer & Link Customization Bar */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-100 space-y-3">
          <p className="text-xs text-slate-600 leading-relaxed">{description}</p>

          {isEditing ? (
            <form onSubmit={handleSaveUrl} className="pt-2 flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                required
                placeholder="https://www.youtube.com/watch?v=..."
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
                >
                  적용하기
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  취소
                </button>
              </div>
            </form>
          ) : (
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                {isSaved && (
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> 링크가 저장되었습니다
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
                >
                  <Link2 className="w-3 h-3" />
                  <span>{videoUrl ? '시연 영상 링크 변경' : '영상 링크 직접 입력'}</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="http://pf.kakao.com/_fxhzxeX/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 font-semibold flex items-center gap-1"
                >
                  <span>카카오톡으로 문의하기</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
