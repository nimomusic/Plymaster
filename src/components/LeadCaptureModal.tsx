import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    solution: 'all',
    channelUrl: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('성함 또는 채널명을 입력해 주세요.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('올바른 이메일 주소를 입력해 주세요.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      solution: 'all',
      channelUrl: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0E1017] border border-white/10 p-6 sm:p-8 shadow-2xl text-slate-100">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">신청이 성공적으로 접수되었습니다!</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              입력해주신 이메일(<strong className="text-white">{formData.email}</strong>)로 
              플리마스터 얼리억세스 체험 가이드와 특별 혜택을 24시간 이내에 보내드리겠습니다.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors"
            >
              확인 및 닫기
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase text-violet-400 font-semibold tracking-wider">
                FLEAMASTER EARLY ACCESS
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">플리마스터 무료 체험 신청</h3>
              <p className="text-xs text-slate-400 mt-1">
                신청하신 분께 팩토리 & 스튜디오 7일 무료 라이선스를 지원해 드립니다.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-xs text-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  성함 또는 채널명 <span className="text-violet-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 홍길동 (뮤직카페TV)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  이메일 주소 <span className="text-violet-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  도입 희망 솔루션
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, solution: 'factory' })}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-colors truncate ${
                      formData.solution === 'factory'
                        ? 'bg-violet-600/30 border-violet-500 text-white'
                        : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    팩토리 (음악)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, solution: 'studio' })}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-colors truncate ${
                      formData.solution === 'studio'
                        ? 'bg-cyan-600/30 border-cyan-500 text-white'
                        : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    스튜디오 (영상)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, solution: 'all' })}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-colors truncate ${
                      formData.solution === 'all'
                        ? 'bg-gradient-to-r from-violet-600/40 to-cyan-600/40 border-violet-400 text-white font-semibold'
                        : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    올인원 (전체)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  운영 중인 채널 링크 (선택)
                </label>
                <input
                  type="text"
                  placeholder="https://youtube.com/@mychannel"
                  value={formData.channelUrl}
                  onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  궁금한 점이나 남기실 말씀 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="예: 주 3회 업로드 목표인데 맞춤 세팅이 가능한가요?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>접수 처리 중...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>무료 체험 신청서 제출하기</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
