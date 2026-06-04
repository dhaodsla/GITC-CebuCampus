import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CampType } from '../types';
import { HelpCircle, ChevronDown, MessageCircleQuestion } from 'lucide-react';

interface FaqViewProps {
  campType: CampType;
}

const faqs = [
  {
    q: "eTravel은 언제 작성하나요?",
    a: "출국일 기준 3일 전부터 작성할 수 있습니다."
  },
  {
    q: "eTravel QR코드는 어떻게 보관하나요?",
    a: "작성 후 발급된 QR코드를 휴대폰에 이미지로 저장하거나 캡처해 주세요. 체크인 및 필리핀 입국 시 제시할 수 있어야 합니다."
  },
  {
    q: "여권 유효기간은 얼마나 남아야 하나요?",
    a: "출국일 기준 유효기간이 반드시 6개월 이상 남아 있어야 합니다."
  },
  {
    q: "공항에는 언제까지 도착해야 하나요?",
    a: "출발 3시간 전 도착을 권장합니다."
  },
  {
    q: "보조배터리는 어디에 넣어야 하나요?",
    a: "위탁수하물에 넣지 말고 반드시 기내가방에 넣어 주세요."
  },
  {
    q: "엄마와 아이만 입국하면 어떤 서류가 필요한가요?",
    a: "가족캠프의 경우 엄마와 아이만 입국 시 영문 주민등록등본을 준비해 주세요. 등본에는 엄마와 아이의 관계가 명시되어 있어야 합니다."
  },
  {
    q: "수건은 가져가야 하나요?",
    a: "기본 수건은 제공됩니다. 개인적으로 추가 수건이 필요한 경우에만 여분을 준비해 주세요."
  },
  {
    q: "트래블월렛은 꼭 필요한가요?",
    a: "필수는 아니지만 마트 등 카드 사용 가능한 곳에서 편리하게 사용할 수 있습니다."
  }
];

export default function FaqView({ campType }: FaqViewProps) {
  const isJunior = campType === 'junior';
  const colorBgSoft = isJunior ? 'bg-teal-50' : 'bg-sky-50';
  const colorText = isJunior ? 'text-teal-600' : 'text-sky-600';

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-5 pb-8 space-y-6">
      <div className={`${colorBgSoft} rounded-2xl p-4 flex items-center justify-between border ${isJunior ? 'border-teal-100' : 'border-sky-100'}`}>
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-xl shadow-sm">
            <MessageCircleQuestion className={`${colorText} w-6 h-6`} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">자주 묻는 질문</h2>
            <p className={`text-xs font-bold opacity-70 mt-0.5 ${colorText}`}>궁금한 점을 확인하세요</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm ${isOpen ? 'ring-1 ring-slate-300' : ''}`}>
              <button
                onClick={() => toggleAccordion(idx)}
                className={`w-full px-5 py-4 flex justify-between items-center text-left transition-colors ${isOpen ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
              >
                <div className="flex items-start gap-3 pr-4">
                  <span className={`font-bold text-[16px] leading-snug shrink-0 mt-[1px] ${colorText}`}>Q.</span>
                  <span className="font-bold text-[15px] text-slate-800 leading-snug">{faq.q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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
                    <div className="px-5 pb-5 pt-1 flex items-start gap-3">
                      <span className="font-bold text-[16px] leading-snug shrink-0 mt-[1px] text-slate-400">A.</span>
                      <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
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
