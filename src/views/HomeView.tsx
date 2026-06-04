import { CampType } from '../types';
import { campInfo } from '../data';
import { Plane, MapPin, CheckSquare, FileText, ChevronRight, User, Users, Calendar } from 'lucide-react';
import { TabType } from '../components/TopScrollNav';

interface HomeViewProps {
  campType: CampType;
  onNavigate: (tab: TabType) => void;
}

const calculateDDay = (dateString: string) => {
  const match = dateString.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);
  if (!match) return null;
  
  const [, year, month, day] = match;
  const target = new Date(Number(year), Number(month) - 1, Number(day));
  if (isNaN(target.getTime())) return null;

  const now = new Date();
  target.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  
  const diffTime = target.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export default function HomeView({ campType, onNavigate }: HomeViewProps) {
  const isJunior = campType === 'junior';
  const colorText = isJunior ? 'text-teal-600' : 'text-sky-600';
  const colorBg = isJunior ? 'bg-teal-500' : 'bg-sky-500';
  const colorBgSoft = isJunior ? 'bg-teal-50' : 'bg-sky-50';

  const dDay = calculateDDay(campInfo.departureDate);
  const dDayDisplay = dDay !== null 
    ? (dDay === 0 ? "D-Day" : dDay > 0 ? `D-${dDay}` : `D+${Math.abs(dDay)}`)
    : "출국일 추후 안내";

  return (
    <div className="p-5 pb-8 space-y-6">
      
      {/* Current Camp Banner */}
      <div className={`${colorBgSoft} rounded-2xl p-4 flex items-center justify-between border ${isJunior ? 'border-teal-100' : 'border-sky-100'}`}>
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-xl shadow-sm">
            {isJunior ? <User className={`${colorText} w-6 h-6`} /> : <Users className={`${colorText} w-6 h-6`} />}
          </div>
          <div>
            <p className={`text-xs font-bold opacity-70 mb-0.5 ${colorText}`}>현재 선택된 캠프</p>
            <h2 className="text-lg font-bold text-slate-800">{isJunior ? '주니어캠프' : '가족캠프'}</h2>
          </div>
        </div>
      </div>

      {/* D-Day Check Card */}
      <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative">
        {/* D-Day Badge Top Right */}
        <div className="absolute top-0 right-0 bg-gradient-to-bl from-teal-500 to-sky-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm shadow-sm flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>{dDayDisplay}</span>
        </div>

        <div className="p-6 pb-5 pt-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-xl text-slate-800">출국일 및 정보</h3>
            </div>
            <div className={`${colorBgSoft} text-slate-700 px-3 py-1 rounded-full text-xs font-bold`}>
              {campInfo.departureDate}
            </div>
          </div>
          
          <div className="space-y-4 text-[15px] font-medium text-slate-600">
            <div className="flex items-center gap-3">
              <Plane className="w-5 h-5 text-slate-400" />
              <span>{campInfo.airline} ({campInfo.route})</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-slate-400" />
              <span>미팅: {campInfo.meetingPlace}</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => onNavigate('airport')}
          className="w-full bg-slate-50 border-t border-slate-100 p-4 text-sm font-bold text-slate-600 flex justify-center items-center gap-1 hover:bg-slate-100 transition-colors"
        >
          공항 장소 및 서류 자세히 보기 <ChevronRight className="w-4 h-4" />
        </button>
      </section>

      {/* Quick Info */}
      <section className="space-y-3 pt-2">
        <h3 className="font-bold text-slate-800 px-1">오늘 꼭 확인할 준비사항 3가지</h3>
        
        <button onClick={() => onNavigate('airport')} className="w-full flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] transition-transform">
          <div className="flex items-center gap-4">
            <div className="bg-amber-50 p-2.5 rounded-xl text-amber-600 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="text-[15px] font-bold text-slate-800">여권 유효기간 확인</h4>
              <p className="text-sm text-slate-500 mt-0.5 font-medium">유효기간 6개월 이상 필수</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300" />
        </button>

        <button onClick={() => onNavigate('etravel')} className="w-full flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] transition-transform">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-50 p-2.5 rounded-xl text-indigo-600 shrink-0">
              <Plane className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="text-[15px] font-bold text-slate-800">eTravel 작성 가능일</h4>
              <p className="text-sm text-slate-500 mt-0.5 font-medium">출국 3일 전부터 작성 가능</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300" />
        </button>

        <button onClick={() => onNavigate('packing')} className="w-full flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] transition-transform">
          <div className="flex items-center gap-4">
            <div className="bg-rose-50 p-2.5 rounded-xl text-rose-600 shrink-0">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="text-[15px] font-bold text-slate-800">준비물 체크리스트 확인</h4>
              <p className="text-sm text-slate-500 mt-0.5 font-medium">빠진 것은 없는지 확인해보세요</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300" />
        </button>

      </section>

    </div>
  );
}

