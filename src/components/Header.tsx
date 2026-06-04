import { CampType } from '../types';
import { CampInfo } from '../types';
import { LogOut, ArrowRightLeft } from 'lucide-react';

interface HeaderProps {
  campType: CampType;
  onChangeCamp: () => void;
  appTitle: string;
}

export default function Header({ campType, onChangeCamp, appTitle }: HeaderProps) {
  const isJunior = campType === 'junior';
  
  return (
    <header className={`px-4 py-3 ${isJunior ? 'bg-teal-500' : 'bg-sky-500'} text-white shadow-sm transition-colors duration-300 relative z-50`}>
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h1 className="font-bold text-base sm:text-lg">{appTitle.split('\n')[0]}</h1>
        </div>
        <button
          onClick={onChangeCamp}
          className="flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors active:scale-95"
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span className="font-medium">캠프 변경</span>
        </button>
      </div>
    </header>
  );
}

