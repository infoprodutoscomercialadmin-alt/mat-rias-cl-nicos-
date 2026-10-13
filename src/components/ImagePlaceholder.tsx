import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImagePlaceholderProps {
  title: string;
  subtitle?: string;
  aspectRatio?: string; // e.g. "aspect-video", "aspect-[4/3]", "aspect-[9/16]"
  minHeight?: string; // e.g. "min-h-[280px]"
  className?: string;
  tag?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  title,
  subtitle = 'Inserir imagem aqui',
  aspectRatio = 'aspect-video',
  minHeight = 'min-h-[220px]',
  className = '',
  tag,
}) => {
  return (
    <div
      className={`relative w-full rounded-2xl border-2 border-dashed border-emerald-300/80 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 flex flex-col items-center justify-center p-6 text-center shadow-xs ${aspectRatio} ${minHeight} ${className}`}
    >
      {tag && (
        <span className="absolute top-3 left-3 bg-emerald-600/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          {tag}
        </span>
      )}

      <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-200/90 shadow-sm flex items-center justify-center text-emerald-600 mb-3">
        <ImageIcon className="w-7 h-7 stroke-[1.75]" />
      </div>

      <p className="font-semibold text-slate-800 text-sm md:text-base max-w-[85%] leading-snug">
        {title}
      </p>

      <span className="inline-block mt-1 text-xs text-emerald-700/80 font-medium bg-emerald-100/60 px-2.5 py-0.5 rounded-full">
        {subtitle}
      </span>
      
      <span className="text-[10px] text-slate-400 mt-2 font-mono uppercase tracking-widest">
        Espaço reservado para imagem
      </span>
    </div>
  );
};
