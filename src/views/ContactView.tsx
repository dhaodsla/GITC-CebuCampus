import { CampType } from '../types';
import { campInfo } from '../data';
import { Phone, Mail, Globe, MessageCircle } from 'lucide-react';

interface ContactViewProps {
  campType: CampType;
}

export default function ContactView({ campType }: ContactViewProps) {
  return (
    <div className="p-5 pb-24 animate-in fade-in duration-300 font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">비상 연락처</h2>
        <p className="text-slate-500 font-medium text-[15px]">긴급 상황 시 아래 연락처로 문의해 주세요.</p>
      </div>

      <div className="space-y-4 mb-8">
        {campInfo.emergencyContacts.map((contact, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 flex items-center justify-between">
            <div>
              <p className="font-bold text-lg text-slate-800">{contact.name}</p>
              <p className="text-slate-500 font-medium mt-0.5">{contact.phone}</p>
            </div>
            <a 
              href={`tel:${contact.phone}`}
              className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-[15px] flex items-center gap-2 active:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4" /> 전화하기
            </a>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-slate-800 mb-4">{campInfo.kakaoChannel}</h3>
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        
        <div className="p-4 border-b border-slate-50 flex items-center gap-3">
          <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 mb-0.5">Kakao Channel</p>
            <p className="text-[15px] font-bold text-slate-800">{campInfo.kakaoChannel}</p>
          </div>
        </div>

        <div className="p-4 border-b border-slate-50 flex items-center gap-3">
          <div className="bg-slate-50 p-2 rounded-lg text-slate-500">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 mb-0.5">E-mail</p>
            <a href={`mailto:${campInfo.email}`} className="text-[15px] font-bold text-slate-800 underline block">{campInfo.email}</a>
          </div>
        </div>

        <div className="p-4 flex items-start gap-3">
          <div className="bg-slate-50 p-2 rounded-lg text-slate-500 mt-1">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 mb-0.5">Websites</p>
            <div className="space-y-1">
              {campInfo.websites.map((web, i) => (
                <a key={i} href={`https://${web}`} target="_blank" rel="noreferrer" className="text-[15px] font-bold text-slate-800 underline block">
                  {web}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Main Call Button (Always visible at the bottom of the page in Contact) */}
      <a 
        href={`tel:${campInfo.emergencyContacts[0].phone}`}
        className="mt-8 flex w-full items-center justify-center gap-2 bg-slate-800 text-white p-4 rounded-2xl font-bold shadow-md active:scale-[0.98] transition-transform text-lg"
      >
        <Phone className="w-5 h-5" />
        담당자에게 전화하기
      </a>
      
    </div>
  );
}
