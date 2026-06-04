import { ChecklistItemType } from '../types';
import { packingChecklists } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';
import ChecklistGroup from '../components/ChecklistGroup';
import { AlertTriangle } from 'lucide-react';

interface PackingViewProps {
  campType: 'junior' | 'family';
}

export default function PackingView({ campType }: PackingViewProps) {
  const storageKey = `packing_checklist_state_${campType}`;
  const [checkedState, setCheckedState] = useLocalStorage<Record<string, boolean>>(storageKey, {});
  
  const toggleCheck = (id: string) => {
    setCheckedState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = packingChecklists.filter(item => item.target === 'all' || item.target === campType);

  // Update item text based on campType per requirements
  const adaptedItems = filteredItems.map(item => {
    if (item.text === '영문 주민등록등본') {
      if (campType === 'family') {
        return { ...item, text: '영문 주민등록등본 (엄마와 아이만 입국하는 경우 반드시 준비해 주세요)' };
      } else if (campType === 'junior') {
        return { ...item, text: '영문 주민등록등본 (미성년자 단독 또는 보호자 미동반 입국 서류는 참가 형태에 따라 달라질 수 있으므로 담당자 안내를 확인해 주세요)' };
      }
    }
    return item;
  });

  const groups: Record<string, ChecklistItemType[]> = {};
  adaptedItems.forEach(item => {
    const section = item.section || '기타';
    if (!groups[section]) groups[section] = [];
    groups[section].push(item);
  });

  const order = ['필수 서류', '환전/결제', '의류', '수영 준비물', '세면도구', '생활용품', '개인 비상약', '수업 준비물'];

  // Calculate global progress
  const total = adaptedItems.length;
  const completed = adaptedItems.filter(i => checkedState[i.id]).length;
  const progressText = `${completed} / ${total}`;

  return (
    <div className="p-5 pb-8 animate-in fade-in duration-300">
      <div className="mb-6 px-1 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">준비물 체크리스트</h2>
          <p className="text-slate-500 font-medium text-[15px]">카테고리별로 준비물을 체크해보세요.</p>
        </div>
        <div className="bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-full text-sm">
          {progressText}
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl shadow-sm mb-8 flex gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <p className="text-[14px] font-bold text-amber-900 break-keep leading-relaxed">
          여권, 항공권, eTravel QR코드는 캐리어가 아닌 작은 가방에 따로 보관해 주세요.
        </p>
      </div>

      <div className="space-y-8">
        {order.map(section => {
          if (!groups[section] || groups[section].length === 0) return null;
          return (
            <ChecklistGroup 
              key={section}
              title={section}
              items={groups[section]}
              checkedState={checkedState}
              onToggle={toggleCheck}
              campType={campType}
            />
          );
        })}
      </div>
    </div>
  );
}
