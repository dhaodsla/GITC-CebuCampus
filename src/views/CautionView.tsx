import { CampType } from '../types';
import { Clock, Wifi, Coffee, Ban, HeartPulse } from 'lucide-react';

interface CautionViewProps {
  campType: CampType;
}

export default function CautionView({ campType }: CautionViewProps) {
  const cautions = [
    {
      title: '시차',
      icon: <Clock className="w-6 h-6 text-indigo-500" />,
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      content: (
        <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-slate-600 font-medium">
          <li>세부는 한국보다 1시간 느립니다.</li>
          <li>현지 도착 후 시계를 1시간 늦게 맞춰 주세요. (예: 한국 밤 10시 = 세부 밤 9시)</li>
        </ul>
      )
    },
    {
      title: '인터넷',
      icon: <Wifi className="w-6 h-6 text-sky-500" />,
      bg: 'bg-sky-50',
      border: 'border-sky-100',
      content: (
        <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-slate-600 font-medium">
          <li>단기 일정은 한국에서 로밍을 해오시는 것도 편리합니다.</li>
          <li>장기 일정은 현지에서 유심카드 구입이 가능합니다.</li>
          <li>캠퍼스 및 숙소에서 Wi-Fi 사용이 가능합니다.</li>
        </ul>
      )
    },
    {
      title: '음식/물',
      icon: <Coffee className="w-6 h-6 text-amber-500" />,
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      content: (
        <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-slate-600 font-medium">
          <li>물은 반드시 <strong>생수 또는 정수기 물</strong>을 마셔 주세요. (수돗물 음용 금지)</li>
          <li>길거리 음식 등 외부 음식은 배탈의 원인이 될 수 있으므로 주의해 주세요.</li>
          <li>외출 후 손 씻기 등 개인위생에 신경 써 주세요.</li>
        </ul>
      )
    },
    {
      title: '금연',
      icon: <Ban className="w-6 h-6 text-rose-500" />,
      bg: 'bg-rose-50',
      border: 'border-rose-100',
      content: (
        <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-slate-600 font-medium">
          <li>필리핀은 모든 공공장소와 학교가 <strong className="text-rose-600">금연구역</strong>입니다.</li>
          <li>GITC 대학 캠퍼스 전체도 금연구역입니다.</li>
          <li>금연구역 위반 시 적발되면 <strong>벌금은 개인 부담</strong>입니다. 흡연은 지정된 장소에서만 가능합니다.</li>
        </ul>
      )
    },
    {
      title: '건강',
      icon: <HeartPulse className="w-6 h-6 text-teal-500" />,
      bg: 'bg-teal-50',
      border: 'border-teal-100',
      content: (
        <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-slate-600 font-medium">
          <li>개인 특성에 따른 비상약을 사전에 꼭 준비해 주세요.</li>
          <li>알러지 약, 소화제, 안약, 개인 복용약은 미리 챙겨 주시기 바랍니다.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="p-5 pb-8 animate-in fade-in duration-300 font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">현지 생활 주의사항</h2>
      </div>

      <div className="space-y-4">
        {cautions.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-xl ${item.bg} ${item.border} border`}>
                {item.icon}
              </div>
              <h3 className="text-[17px] font-bold text-slate-800">{item.title}</h3>
            </div>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
