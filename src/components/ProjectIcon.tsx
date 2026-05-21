import React from 'react';
import { 
  GraduationCap, 
  Newspaper, 
  BarChart3, 
  Component, 
  Cpu, 
  ShieldCheck, 
  ShoppingBag,
  Stethoscope
} from 'lucide-react';

interface ProjectIconProps {
  type: string;
  className?: string;
}

export function ProjectIcon({ type, className }: ProjectIconProps) {
  const iconProps = {
    className: "w-8 h-8 md:w-10 md:h-10 text-gray-900 stroke-[1.5]",
  };

  const wrapIcon = (child: React.ReactNode, bgColor: string) => (
    <div className={`relative p-4 rounded-2xl ${bgColor} flex items-center justify-center overflow-hidden group`}>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {child}
    </div>
  );

  switch (type) {
    case 'education':
      return wrapIcon(<GraduationCap {...iconProps} />, "bg-amber-100/50");
    case 'news':
      return wrapIcon(<Newspaper {...iconProps} />, "bg-blue-100/50");
    case 'analytics':
      return wrapIcon(<BarChart3 {...iconProps} />, "bg-rose-100/50");
    case 'design-system':
      return wrapIcon(<Component {...iconProps} />, "bg-slate-100/50");
    case 'ai':
      return wrapIcon(<Cpu {...iconProps} />, "bg-pink-100/50");
    case 'onboarding':
      return wrapIcon(<ShieldCheck {...iconProps} />, "bg-violet-100/50");
    case 'checkout':
      return wrapIcon(<ShoppingBag {...iconProps} />, "bg-amber-50/50");
    case 'healthcare':
      return wrapIcon(<Stethoscope {...iconProps} />, "bg-emerald-100/50");
    default:
      return null;
  }
}
