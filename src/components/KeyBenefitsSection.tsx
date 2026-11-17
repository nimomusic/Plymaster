import React from 'react';
import { Smile, DollarSign, Clock, Flame } from 'lucide-react';
import { SiteTranslation } from '../data/translations';

interface KeyBenefitsSectionProps {
  t: SiteTranslation['benefits'];
}

export const KeyBenefitsSection: React.FC<KeyBenefitsSectionProps> = ({ t }) => {
  const icons = [Smile, DollarSign, Clock, Flame];
  const badgeColors = [
    'text-blue-700 bg-blue-50 border-blue-200',
    'text-emerald-700 bg-emerald-50 border-emerald-200',
    'text-amber-700 bg-amber-50 border-amber-200',
    'text-rose-700 bg-rose-50 border-rose-200',
  ];

  return (
    <section id="benefits" className="py-20 px-6 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
            {t.kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight text-balance">
            {t.title1} <br />
            <span className="text-blue-600">{t.title2}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            const badgeColor = badgeColors[index % badgeColors.length];
            return (
              <div
                key={index}
                className="rounded-2xl p-7 bg-slate-50/70 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${badgeColor}`}>
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
