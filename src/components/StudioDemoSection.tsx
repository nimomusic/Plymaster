import React from 'react';
import { Play, CheckCircle2 } from 'lucide-react';
import { SiteTranslation } from '../data/translations';

interface StudioDemoSectionProps {
  onOpenVideoModal: () => void;
  t: SiteTranslation['studioDemo'];
}

export const StudioDemoSection: React.FC<StudioDemoSectionProps> = ({
  onOpenVideoModal,
  t,
}) => {
  return (
    <section id="studio" className="py-20 px-6 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
              <span>{t.programTag}</span>
              <span>·</span>
              <span>{t.engineTag}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t.title}
            </h2>
            <p className="mt-2 text-base sm:text-lg font-bold text-emerald-600">
              {t.tagline}
            </p>
          </div>
          <p className="text-slate-600 max-w-md text-xs sm:text-sm leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Real App Screenshot & 3 Steps Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Real Software UI Screenshot */}
          <div className="lg:col-span-7">
            <div className="bg-slate-100 rounded-2xl p-2.5 sm:p-3 border border-slate-200 shadow-lg">
              <div className="rounded-xl overflow-hidden border border-slate-300 bg-white">
                <img
                  src="/assets/aistudio/image_c9d2ff2e.png"
                  alt={t.screenshotCaption}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-3 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">{t.screenshotCaption}</span>
                <span className="font-mono text-emerald-600 font-bold">{t.screenshotBadge}</span>
              </div>
            </div>
          </div>

          {/* 3 Simple Operational Steps */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </span>
                <h4 className="text-sm font-bold text-slate-900">{t.steps[0].title}</h4>
              </div>
              <p className="text-xs text-slate-600 pl-9">
                {t.steps[0].desc}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <h4 className="text-sm font-bold text-slate-900">{t.steps[1].title}</h4>
              </div>
              <p className="text-xs text-slate-600 pl-9">
                {t.steps[1].desc}
              </p>
            </div>

            <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <h4 className="text-sm font-bold text-blue-900">{t.steps[2].title}</h4>
              </div>
              <p className="text-xs text-slate-700 pl-9">
                {t.steps[2].desc}
              </p>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.bottomCheck}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Frame for Studio */}
        <div id="videos" className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                {t.videoHeaderTag}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                {t.videoHeaderTitle}
              </h3>
            </div>
            <button
              type="button"
              onClick={onOpenVideoModal}
              className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{t.videoPlayBtn}</span>
            </button>
          </div>

          <div
            onClick={onOpenVideoModal}
            className="relative rounded-xl aspect-[21/9] sm:aspect-[24/9] bg-slate-900 overflow-hidden flex items-center justify-center group cursor-pointer border border-slate-300 shadow-md"
          >
            {/* Real YouTube Video Thumbnail */}
            <img
              src="https://img.youtube.com/vi/dA_u1XKSd3I/hqdefault.jpg"
              alt={t.videoOverlayTitle}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors" />

            <div className="relative z-10 text-center p-6">
              <div className="w-16 h-16 rounded-full bg-emerald-600 group-hover:bg-emerald-500 group-hover:scale-110 active:scale-95 transition-all flex items-center justify-center mx-auto shadow-xl text-white mb-3 ring-4 ring-white/20">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white drop-shadow-md">
                {t.videoOverlayTitle}
              </h4>
              <p className="text-xs text-slate-200 mt-1 drop-shadow-xs">
                {t.videoOverlayDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
