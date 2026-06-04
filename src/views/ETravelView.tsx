import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CampType } from '../types';
import { campInfo } from '../data';
import { ChevronDown, AlertTriangle, ExternalLink } from 'lucide-react';

interface ETravelViewProps {
  campType: CampType;
}

export default function ETravelView({ campType }: ETravelViewProps) {
  const isJunior = campType === 'junior';
  const colorBg = isJunior ? 'bg-teal-600' : 'bg-sky-600';
  
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const toggleAccordion = (idx: number) => {
    setOpenAccordions(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const steps = [
    {
      title: 'STEP 1. eTravel 사이트 접속',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>{campInfo.eTravelUrl}</strong> 접속</li>
          <li>eTravel은 무료이며 앱 다운로드 없이 웹사이트에서 바로 작성 가능합니다.</li>
          <li>출국일 기준 <strong>3일 전</strong>부터 작성 가능합니다.</li>
        </ul>
      )
    },
    {
      title: 'STEP 2. 계정 만들기',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>이메일 주소 입력</strong></li>
          <li><strong>OTP 보안코드 입력</strong> (이메일로 온 코드 확인)</li>
          <li><strong>비밀번호 생성</strong></li>
          <li className="text-amber-700 font-medium bg-amber-50 rounded p-1">Daum, Hanmail 이메일은 OTP 수신이 안 될 수 있으므로 Gmail 또는 네이버 메일 사용을 권장합니다.</li>
        </ul>
      )
    },
    {
      title: 'STEP 3. 개인정보 입력',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>FOREIGN PASSPORT HOLDER</strong> 선택</li>
          <li>이름, 성, 성별, 생년월일, 전화번호(국가번호 없이 입력), 국적, 출생국가, 여권번호, 여권발급국가, 여권발급일 입력</li>
          <li>한국인은 Citizenship: <strong>South Korean</strong> 선택</li>
          <li>Country of Birth: <strong>South Korea</strong> 선택</li>
          <li>Middle Name과 Suffix는 입력하지 않아도 됩니다.</li>
        </ul>
      )
    },
    {
      title: 'STEP 4. 거주지 입력',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Country: <strong>South Korea</strong></li>
          <li>영문 주소 입력</li>
          <li>Address Line 2는 입력하지 않아도 됩니다.</li>
        </ul>
      )
    },
    {
      title: 'STEP 5. 입국신고서 등록',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>본인이 여행할 경우 <strong>FOR ME</strong> 선택</li>
          <li>가족을 대신 등록할 경우 <strong>FOR OTHER</strong> 선택</li>
          <li><strong>AIR</strong> 선택</li>
          <li><strong>ARRIVAL</strong> 선택</li>
          <li>Special Flight는 특별기나 전세기가 아니면 체크하지 않습니다.</li>
        </ul>
      )
    },
    {
      title: 'STEP 6. 여행 정보 입력',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Purpose of Travel: <strong>Holiday/Pleasure/Vacation</strong> 선택</li>
          <li>Traveller Type: <strong>Aircraft Passenger</strong> 선택</li>
          <li>항공사명과 항공편명 입력</li>
          <li>출발국가: <strong>South Korea</strong></li>
          <li>출발공항: <strong>Incheon</strong></li>
          <li>도착공항은 실제 도착 공항 선택 (예: Mactan-Cebu)</li>
          <li>도착일 입력</li>
        </ul>
      )
    },
    {
      title: 'STEP 7. 체류지 입력',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Hotel/Resort</strong> 선택</li>
          <li>숙소명: <strong>{campInfo.accommodation}</strong></li>
          <li>* 호텔명이 검색되지 않으면 Residence 선택 후 주소를 직접 입력 안내에 따라 입력합니다.</li>
        </ul>
      )
    },
    {
      title: 'STEP 8. 건강신고',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>최근 30일 방문국가가 있으면 입력합니다.</li>
          <li>전염성 질환자와 접촉 경험이 없으면 <strong>No</strong> 선택</li>
          <li>최근 30일 동안 아팠던 적이 없으면 <strong>No</strong> 선택</li>
        </ul>
      )
    },
    {
      title: 'STEP 9. 전자 세관신고',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>신고할 물품이 없으면 <strong>No</strong> 선택</li>
          <li>동반 가족 수 입력</li>
          <li>필리핀 방문 경험 (First Time 등) 입력</li>
          <li>위탁수하물 개수와 기내수하물 개수 입력</li>
          <li>전자서명 후 제출</li>
        </ul>
      )
    },
    {
      title: 'STEP 10. QR코드 저장',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>정상 등록 시 QR코드가 발급됩니다.</li>
          <li><strong>Download QRCode</strong>를 눌러 <strong>이미지로 저장</strong>합니다.</li>
          <li>체크인 및 필리핀 입국 시 제시할 수 있도록 핸드폰에 저장해 두세요.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="p-5 pb-8 animate-in fade-in duration-300 font-sans">
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">eTravel 작성 방법</h2>
        <p className="text-slate-500 font-medium text-[15px]">필리핀 입국을 위해 출국일 기준 3일 전부터 작성 가능합니다.</p>
      </div>

      <div className="bg-amber-50 p-4 rounded-2xl flex gap-3 shadow-sm border border-amber-100 mb-6">
        <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
        <p className="text-[15px] font-bold text-amber-900 leading-snug">
          eTravel은 무료입니다. 반드시 공식 사이트 {campInfo.eTravelUrl} 에서 작성해 주세요.
        </p>
      </div>

      <a 
        href={campInfo.eTravelUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 ${colorBg} text-white px-5 py-4 rounded-2xl shadow-md active:scale-[0.98] transition-transform mb-8 font-bold text-lg`}
      >
        <span>eTravel 공식 사이트 열기</span>
        <ExternalLink className="w-5 h-5" />
      </a>

      {campType === 'family' && (
        <div className="mb-6 p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-2">
          <h3 className="font-bold text-sky-900">가족캠프 작성 시 주의사항</h3>
          <ul className="list-disc pl-5 text-sky-800 text-sm space-y-1">
            <li>가족 구성원별 eTravel 등록이 필요합니다.</li>
            <li>보호자가 가족을 대신 등록할 경우 <strong>FOR OTHER</strong>를 선택해 주세요.</li>
            <li>전자 세관신고에서 <strong>동반 가족 수</strong>를 정확히 입력해 주세요.</li>
          </ul>
        </div>
      )}

      {campType === 'junior' && (
        <div className="mb-6 p-4 rounded-2xl bg-teal-50 border border-teal-100 space-y-2">
          <h3 className="font-bold text-teal-900">주니어캠프 작성 시 주의사항</h3>
          <ul className="list-disc pl-5 text-teal-800 text-sm space-y-1">
            <li>학생 단독 참가자의 eTravel 작성은 보호자 또는 담당자 안내에 따라 진행해 주세요.</li>
            <li>여권 정보와 항공편 정보가 정확히 입력되었는지 반드시 확인해 주세요.</li>
          </ul>
        </div>
      )}

      <div className="space-y-3">
        {steps.map((step, idx) => {
          const isOpen = openAccordions[idx];
          return (
            <div key={idx} className={`bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm ${isOpen ? 'ring-1 ring-slate-300' : ''}`}>
              <button
                onClick={() => toggleAccordion(idx)}
                className={`w-full px-5 py-4 flex justify-between items-center text-left transition-colors ${isOpen ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
              >
                <span className="font-bold text-[15px] text-slate-800">{step.title}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-slate-50"
                  >
                    <div className="px-5 pb-5 pt-1 text-[15px] font-medium text-slate-600 leading-relaxed border-t border-slate-100/60">
                      {step.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

