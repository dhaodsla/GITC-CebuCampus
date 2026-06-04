import { CampType } from '../types';
import { campInfo } from '../data';
import { BookOpen, MapPin, Plane, UserCheck } from 'lucide-react';

interface AirportDocViewProps {
  campType: CampType;
}

export default function AirportDocView({ campType }: AirportDocViewProps) {
  return (
    <div className="p-5 pb-8 animate-in fade-in duration-300 font-sans space-y-8">

      {/* 공항 미팅 안내 */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Plane className="w-6 h-6 text-slate-800" />
          <h2 className="text-2xl font-bold text-slate-800">공항 미팅 안내</h2>
        </div>

        <div className="bg-amber-50 p-4 rounded-xl mb-4 border border-amber-100">
          <p className="font-bold text-amber-900 text-center">공항은 여유 있게 출발 3시간 전 도착을 권장합니다.</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <div className="grid grid-cols-3 gap-2 border-b border-slate-50 pb-3">
            <span className="text-slate-400 font-bold text-[15px]">출국일</span>
            <span className="col-span-2 text-slate-800 font-bold text-[15px]">{campInfo.departureDate}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 border-b border-slate-50 pb-3">
            <span className="text-slate-400 font-bold text-[15px]">항공편</span>
            <span className="col-span-2 text-slate-800 font-bold text-[15px]">{campInfo.airline} ({campInfo.route})</span>
          </div>
          <div className="grid grid-cols-3 gap-2 border-b border-slate-50 pb-3">
            <span className="text-slate-400 font-bold text-[15px]">도착시간</span>
            <span className="col-span-2 text-slate-800 font-bold text-[15px] text-rose-600">{campInfo.airportArrivalTime}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 border-b border-slate-50 pb-3">
            <span className="text-slate-400 font-bold text-[15px]">미팅 장소</span>
            <span className="col-span-2 text-slate-800 font-bold text-[15px]">{campInfo.meetingPlace}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="text-slate-400 font-bold text-[15px]">담당자</span>
            <div className="col-span-2 space-y-1">
              {campInfo.emergencyContacts.map((contact, i) => (
                <div key={i} className="text-slate-800 font-bold text-[15px]">
                  {contact.name} <a href={`tel:${contact.phone}`} className="text-blue-600 underline active:opacity-75">{contact.phone}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* 필리핀 입국 필수 서류 */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-slate-800" />
          <h2 className="text-2xl font-bold text-slate-800">필리핀 입국 서류</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 space-y-3 mb-4">
          <h3 className="font-bold text-slate-800 text-[17px] mb-2">공통 필수 서류</h3>
          <ul className="list-disc pl-5 space-y-2 text-[15px] font-medium text-slate-600">
            <li>출발일 기준 <strong className="text-rose-600">유효기간 6개월 이상</strong> 남은 여권</li>
            <li>왕복전자항공권</li>
            <li>eTravel QR코드</li>
            <li>SSP 발급용 증명사진 1매</li>
          </ul>
        </div>

        {campType === 'family' && (
          <div className="bg-sky-50 p-5 rounded-2xl border border-sky-100 space-y-2">
            <h3 className="font-bold text-sky-900 text-[17px] flex items-center gap-2">
              <UserCheck className="w-5 h-5" /> 가족캠프 추가 서류
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-[15px] font-medium text-sky-800 mt-2">
              <li>엄마와 아이만 입국 시 <strong>영문 주민등록등본</strong>을 준비해 주세요.</li>
              <li>등본에는 <strong className="text-rose-600">아이와 엄마의 관계</strong>가 명시되어 있어야 합니다.</li>
            </ul>
          </div>
        )}

        {campType === 'junior' && (
          <div className="bg-teal-50 p-5 rounded-2xl border border-teal-100 space-y-2">
            <h3 className="font-bold text-teal-900 text-[17px] flex items-center gap-2">
              <UserCheck className="w-5 h-5" /> 주니어캠프 추가 안내
            </h3>
            <p className="text-[15px] font-medium text-teal-800 leading-relaxed">
              미성년자 단독 또는 보호자 미동반 입국 관련 서류는 참가 형태에 따라 달라질 수 있으므로 <strong className="text-rose-600">담당자 안내를 반드시 확인</strong>해 주세요.
            </p>
          </div>
        )}
      </section>

      <hr className="border-slate-100" />

      {/* 수하물 안내 */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-6 h-6 text-slate-800" />
          <h2 className="text-2xl font-bold text-slate-800">수하물 안내</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 space-y-3">
          <ul className="list-disc pl-5 space-y-3 text-[15px] font-medium text-slate-600">
            <li><strong>기내 수하물:</strong> 1개, 10kg 이하</li>
            <li><strong>위탁 수하물:</strong> 15kg 이하</li>
            <li className="text-amber-600">무게 초과 시 추가 요금이 발생할 수 있습니다.</li>
            <li><strong className="text-rose-600">보조배터리</strong>는 위탁수하물에 넣지 말고 <strong>기내가방</strong>에 넣어주세요.</li>
            <li><strong>액체류:</strong> 용기 1개당 100ml 이하, 1인당 1L 이하 지퍼백 1개 기준으로 기내 반입이 가능합니다. 초과 시 위탁수하물로 보내주세요.</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
