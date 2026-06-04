import { ChecklistItemType } from '../types';
import { dDayChecklists } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';
import ChecklistGroup from '../components/ChecklistGroup';

interface ChecklistViewProps {
  campType: 'junior' | 'family';
}

export default function ChecklistView({ campType }: ChecklistViewProps) {
  const storageKey = `dday_checklist_state_${campType}`;
  const [checkedState, setCheckedState] = useLocalStorage<Record<string, boolean>>(storageKey, {});
  
  const toggleCheck = (id: string) => {
    setCheckedState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = dDayChecklists.filter(item => item.target === 'all' || item.target === campType);

  // 그룹화
  const groups: Record<string, ChecklistItemType[]> = {};
  filteredItems.forEach(item => {
    const section = item.section || '기타';
    if (!groups[section]) groups[section] = [];
    groups[section].push(item);
  });

  // 순서 지정
  const order = ['출국 3일 전', '출국 전날', '출국 당일', '주니어캠프 추가 체크사항', '가족캠프 추가 체크사항'];
  
  return (
    <div className="p-5 pb-8 animate-in fade-in duration-300">
      <div className="mb-6 px-1">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">출국 D-Day 체크리스트</h2>
        <p className="text-slate-500 font-medium text-[15px]">출국 전 꼭 확인해야 할 항목입니다.</p>
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
