import { CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'motion/react';
import { CampType, ChecklistItemType } from '../types';

interface ChecklistGroupProps {
  title: string;
  items: ChecklistItemType[];
  checkedState: Record<string, boolean>;
  onToggle: (id: string) => void;
  campType: CampType;
}

export default function ChecklistGroup({ title, items, checkedState, onToggle, campType }: ChecklistGroupProps) {
  const isJunior = campType === 'junior';
  const colorBgOn = isJunior ? 'bg-teal-500' : 'bg-sky-500';
  const colorBorderOn = isJunior ? 'border-teal-400' : 'border-sky-400';
  const colorBgSubOn = isJunior ? 'bg-teal-50/50' : 'bg-sky-50/50';

  const total = items.length;
  if(total === 0) return null;
  const completed = items.filter(i => checkedState[i.id]).length;
  const progress = Math.round((completed / total) * 100) || 0;

  return (
    <section className="mb-6">
      <div className="flex justify-between items-end mb-3 px-1">
        <h3 className="text-[17px] font-bold text-slate-800">{title}</h3>
        <span className="text-sm font-bold text-slate-400">
          {completed}/{total}
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="h-2 w-full bg-slate-100 rounded-full mb-3 overflow-hidden">
        <motion.div 
          className={`h-full ${colorBgOn}`} 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
      </div>

      <div className="space-y-2.5">
        {items.map((item) => {
          const isChecked = checkedState[item.id] || false;
          return (
            <label 
              key={item.id} 
              className={`flex gap-3.5 items-start p-4 rounded-2xl border-2 cursor-pointer transition-all active:scale-[0.98] select-none
                ${isChecked ? `${colorBorderOn} ${colorBgSubOn} shadow-sm opacity-60` : 'border-slate-100 bg-white shadow-sm hover:border-slate-200'}`}
            >
              <div className="shrink-0 mt-0.5 relative w-6 h-6">
                <motion.div
                  initial={false}
                  animate={{ scale: isChecked ? 0 : 1, opacity: isChecked ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Circle className="w-6 h-6 text-slate-200" strokeWidth={2.5} />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ scale: isChecked ? 1 : 0.5, opacity: isChecked ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute inset-0"
                >
                  <CheckCircle2 className={`w-6 h-6 ${isJunior ? 'text-teal-500' : 'text-sky-500'}`} />
                </motion.div>
              </div>
              <div className="flex-1 mt-px">
                <p className={`text-[15px] font-bold break-keep transition-all duration-300 leading-snug
                  ${isChecked ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
                  {item.text}
                </p>
                {/* Additional conditional emphasizing details can go here if needed per component */}
                {item.text.includes('담당자 안내 확인하기') && !isChecked && (
                  <p className="text-xs text-amber-600 bg-amber-50 rounded mt-2 px-2 py-1 font-medium inline-block">
                    ★ 필수 확인 요망
                  </p>
                )}
              </div>
              {/* Add an invisible input to cleanly maintain html label accessibility */}
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={isChecked} 
                onChange={() => onToggle(item.id)} 
              />
            </label>
          );
        })}
      </div>
    </section>
  );
}
