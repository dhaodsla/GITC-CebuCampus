import { useState } from 'react';
import { motion } from 'motion/react';
import { CampType } from '../types';
import { campInfo } from '../data';
import { User, Users, Plane, Book, CheckSquare, FileText, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';

interface CampSelectorProps {
  onSelect: (camp: CampType) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut", duration: 0.4 } }
};

export default function CampSelector({ onSelect }: CampSelectorProps) {
  const [selectedCamp, setSelectedCamp] = useState<CampType | null>(null);

  const handleSelect = (camp: CampType) => {
    setSelectedCamp(camp);
    setTimeout(() => {
      onSelect(camp);
    }, 400); // Wait for animation
  };

  return (
    <div className="min-h-[100dvh] bg-slate-50 flex flex-col relative font-sans">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-teal-50 pt-16 pb-12 px-6 shadow-sm border-b border-white">
        {/* Subtle background icons */}
        <Plane className="absolute top-10 right-4 w-32 h-32 text-sky-200/30 -rotate-12" />
        <Book className="absolute bottom-4 left-4 w-20 h-20 text-teal-200/30 -rotate-12" />
        <CheckSquare className="absolute top-20 left-16 w-12 h-12 text-blue-200/20 rotate-12" />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 max-w-md mx-auto text-center mt-2"
        >
          <div className="inline-block px-3 py-1 bg-white/70 backdrop-blur-sm border border-white rounded-full text-slate-500 font-bold text-xs tracking-tight mb-4 shadow-sm">
            ✈️ 필리핀 어학연수
          </div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight leading-tight mb-3">
            {campInfo.appTitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br className="sm:hidden" />
              </span>
            )) || "GITC 세부캠퍼스\n출국 준비 가이드"}
          </h1>
          <p className="text-slate-600 font-medium text-[15px] sm:text-base break-keep mb-3">
            {campInfo.subtitle}
          </p>
          <p className="text-slate-500 text-xs sm:text-sm break-keep">
            {campInfo.helperText}
          </p>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex-1 max-w-md mx-auto w-full px-5 py-8 space-y-10"
      >
        
        {/* Camp Cards */}
        <div className="space-y-4">
          <motion.h2 variants={itemVariants} className="text-sm font-bold text-slate-400 pl-2">참여하는 캠프 유형을 선택해주세요</motion.h2>
          
          {/* 주니어캠프 카드 */}
          <motion.button
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect('junior')}
            disabled={selectedCamp !== null}
            className={`group relative w-full bg-white border-2 rounded-[2rem] p-6 text-left transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden
              ${selectedCamp === 'junior' ? 'border-teal-400 bg-teal-50/30 ring-4 ring-teal-50' : 'border-transparent border-slate-100 hover:border-teal-300'}
              ${selectedCamp === 'family' ? 'opacity-50 grayscale-[50%]' : ''}`}
          >
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
              <User className="w-48 h-48" />
            </div>
            
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="bg-teal-50 w-12 h-12 rounded-2xl flex items-center justify-center border border-teal-100 shrink-0">
                <User className="w-6 h-6 text-teal-600" />
              </div>
              {selectedCamp === 'junior' ? (
                <CheckCircle2 className="w-7 h-7 text-teal-500 animate-in zoom-in duration-300 mt-1 fill-teal-50" />
              ) : (
                <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-teal-500 transition-colors mt-1" />
              )}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">주니어캠프</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-5 break-keep font-medium">
                학생 단독 참가 및 인솔 단체를 위한 출국 준비 안내
              </p>
              
              <div className="inline-flex items-center text-teal-700 text-xs font-bold bg-teal-50 px-3 py-1.5 rounded-full ring-1 ring-teal-100">
                학생만 참가하는 경우
              </div>
            </div>
          </motion.button>

          {/* 가족캠프 카드 */}
          <motion.button
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect('family')}
            disabled={selectedCamp !== null}
            className={`group relative w-full bg-white border-2 rounded-[2rem] p-6 text-left transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] active:scale-[0.98] overflow-hidden
              ${selectedCamp === 'family' ? 'border-sky-400 bg-sky-50/30 ring-4 ring-sky-50' : 'border-transparent border-slate-100 hover:border-sky-300'}
              ${selectedCamp === 'junior' ? 'opacity-50 scale-95 grayscale-[50%]' : ''}`}
          >
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
              <Users className="w-48 h-48" />
            </div>
            
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="bg-sky-50 w-12 h-12 rounded-2xl flex items-center justify-center border border-sky-100 shrink-0">
                <Users className="w-6 h-6 text-sky-600" />
              </div>
              {selectedCamp === 'family' ? (
                <CheckCircle2 className="w-7 h-7 text-sky-500 animate-in zoom-in duration-300 mt-1 fill-sky-50" />
              ) : (
                <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-sky-500 transition-colors mt-1" />
              )}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-sky-700 transition-colors">가족캠프</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-5 break-keep font-medium">
                보호자와 아이가 함께하는 가족 참가자를 위한 출국 준비 안내
              </p>
              
              <div className="inline-flex items-center text-sky-700 text-xs font-bold bg-sky-50 px-3 py-1.5 rounded-full ring-1 ring-sky-100">
                보호자 동반 참가
              </div>
            </div>
          </motion.button>
        </div>

        {/* Quick Info */}
        <motion.div variants={itemVariants} className="space-y-3 pb-8">
          <h2 className="text-sm font-bold text-slate-400 pl-2">빠른 안내</h2>
          <div className="space-y-3">
            
            <div className="flex items-center gap-4 bg-white p-4 justify-start rounded-2xl border border-slate-100 shadow-sm transition-transform hover:scale-[1.01]">
              <div className="bg-amber-50 p-3 rounded-xl text-amber-600 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-slate-800">eTravel 등록</h4>
                <p className="text-sm text-slate-500 mt-0.5 font-medium">출국 3일 전부터 작성 가능</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 justify-start rounded-2xl border border-slate-100 shadow-sm transition-transform hover:scale-[1.01]">
              <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 shrink-0">
                <Book className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-slate-800">여권 유효기간</h4>
                <p className="text-sm text-slate-500 mt-0.5 font-medium">여권 유효기간 6개월 이상 필수</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 justify-start rounded-2xl border border-slate-100 shadow-sm transition-transform hover:scale-[1.01]">
              <div className="bg-rose-50 p-3 rounded-xl text-rose-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-slate-800">공항 도착</h4>
                <p className="text-sm text-slate-500 mt-0.5 font-medium">출발 3시간 전 도착 권장 (안전 우선)</p>
              </div>
            </div>

          </div>
        </motion.div>
        
      </motion.div>
    </div>
  );
}