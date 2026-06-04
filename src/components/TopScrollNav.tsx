import { motion } from 'motion/react';
import { Home, CalendarCheck, Luggage, FileText, Briefcase, AlertTriangle, Phone } from 'lucide-react';

export type TabType = 'home' | 'dday' | 'packing' | 'etravel' | 'airport' | 'caution' | 'faq' | 'contact';

interface TopScrollNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  colorScheme: 'teal' | 'sky';
}

export default function TopScrollNav({ activeTab, onTabChange, colorScheme }: TopScrollNavProps) {
  const activeColorText = colorScheme === 'teal' ? 'text-teal-600' : 'text-sky-600';
  const activeColorBg = colorScheme === 'teal' ? 'bg-teal-600' : 'bg-sky-600';

  const tabs = [
    { id: 'home', label: '홈' },
    { id: 'dday', label: '출국 체크' },
    { id: 'packing', label: '준비물' },
    { id: 'etravel', label: 'eTravel' },
    { id: 'airport', label: '공항/서류' },
    { id: 'caution', label: '주의사항' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: '연락처' },
  ] as const;

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 w-full shadow-sm">
      <div className="max-w-3xl mx-auto flex overflow-x-auto hide-scrollbar touch-pan-x px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative whitespace-nowrap px-4 py-3.5 text-[15px] font-bold transition-colors ${
                isActive 
                  ? activeColorText 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className={`absolute bottom-0 left-0 right-0 h-[3px] ${activeColorBg}`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
