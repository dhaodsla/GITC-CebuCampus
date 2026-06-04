import { CampInfo, ChecklistItemType } from './types';

export const campInfo: CampInfo = {
  appTitle: 'GITC 세부캠퍼스 출국 준비 가이드',
  subtitle: '출국 준비부터 필리핀 입국까지, 필요한 내용을 한눈에 확인하세요.',
  helperText: '학부모님이 가장 많이 확인하는 준비사항을 정리했어요.',
  departureDate: '202X년 01월 10일',
  airline: 'Cebu Air',
  route: '인천 → 세부',
  airportArrivalTime: '출발 3시간 전',
  meetingPlace: '추후 안내',
  accommodation: 'Onyx resort',
  emergencyContacts: [
    { name: '정선영', phone: '010-5393-7324' },
    { name: '최호용', phone: '010-9605-2772' }
  ],
  kakaoChannel: 'GITC College',
  email: 'cncgroup@hanmail.net',
  websites: [
    'www.gitc.edu.ph',
    'www.thecnc.co.kr'
  ],
  eTravelUrl: 'https://etravel.gov.ph/'
};

export const dDayChecklists: ChecklistItemType[] = [
  // 공통 - 출국 3일 전
  { id: 'd3-1', text: 'eTravel 등록하기', target: 'all', section: '출국 3일 전' },
  { id: 'd3-2', text: '여권 유효기간 6개월 이상 확인하기', target: 'all', section: '출국 3일 전' },
  { id: 'd3-3', text: '왕복항공권 핸드폰에 저장하기', target: 'all', section: '출국 3일 전' },
  { id: 'd3-4', text: 'eTravel QR코드 캡처 또는 이미지 저장하기', target: 'all', section: '출국 3일 전' },
  { id: 'd3-5', text: '증명사진 1매 준비하기', target: 'all', section: '출국 3일 전' },
  { id: 'd3-6', text: '개인 비상약 준비하기', target: 'all', section: '출국 3일 전' },

  // 공통 - 출국 전날
  { id: 'd1-1', text: '캐리어 무게 확인하기', target: 'all', section: '출국 전날' },
  { id: 'd1-2', text: '보조배터리는 기내가방에 넣기', target: 'all', section: '출국 전날' },
  { id: 'd1-3', text: '여권, 항공권, QR코드는 작은 가방에 따로 보관하기', target: 'all', section: '출국 전날' },
  { id: 'd1-4', text: '충전기와 돼지코 어댑터 챙기기', target: 'all', section: '출국 전날' },
  { id: 'd1-5', text: '수영복 또는 래쉬가드 챙기기', target: 'all', section: '출국 전날' },
  { id: 'd1-6', text: '수업용 필기도구 챙기기', target: 'all', section: '출국 전날' },

  // 공통 - 출국 당일
  { id: 'd0-1', text: '공항 출발 3시간 전 도착하기', target: 'all', section: '출국 당일' },
  { id: 'd0-2', text: '여권 확인하기', target: 'all', section: '출국 당일' },
  { id: 'd0-3', text: '항공권 확인하기', target: 'all', section: '출국 당일' },
  { id: 'd0-4', text: 'eTravel QR코드 확인하기', target: 'all', section: '출국 당일' },
  { id: 'd0-5', text: '위탁수하물과 기내수하물 무게 확인하기', target: 'all', section: '출국 당일' },
  { id: 'd0-6', text: '담당자 연락처 저장하기', target: 'all', section: '출국 당일' },

  // 주니어캠프 전용
  { id: 'dj-1', text: '학생 여권 보호자와 함께 최종 확인하기', target: 'junior', section: '주니어캠프 추가 체크사항' },
  { id: 'dj-2', text: '학생 개인 복용약 및 비상약 챙기기', target: 'junior', section: '주니어캠프 추가 체크사항' },
  { id: 'dj-3', text: '학생 용돈 또는 환전 금액 확인하기', target: 'junior', section: '주니어캠프 추가 체크사항' },
  { id: 'dj-4', text: '인솔자 연락처 저장하기', target: 'junior', section: '주니어캠프 추가 체크사항' },
  { id: 'dj-5', text: '공항 단체 집결 장소 확인하기', target: 'junior', section: '주니어캠프 추가 체크사항' },
  { id: 'dj-6', text: '보호자 안내사항 최종 확인하기', target: 'junior', section: '주니어캠프 추가 체크사항' },
  { id: 'dj-7', text: '부모 미동반 입국 관련 서류는 참가 형태에 따라 달라질 수 있으므로 담당자 안내 확인하기', target: 'junior', section: '주니어캠프 추가 체크사항' },

  // 가족캠프 전용
  { id: 'df-1', text: '가족 구성원별 eTravel 등록 확인하기', target: 'family', section: '가족캠프 추가 체크사항' },
  { id: 'df-2', text: '엄마와 아이만 입국하는 경우 영문 주민등록등본 준비하기', target: 'family', section: '가족캠프 추가 체크사항' },
  { id: 'df-3', text: '영문 주민등록등본에 엄마와 아이 관계가 명시되어 있는지 확인하기', target: 'family', section: '가족캠프 추가 체크사항' },
  { id: 'df-4', text: '가족별 여권과 항공권 확인하기', target: 'family', section: '가족캠프 추가 체크사항' },
  { id: 'df-5', text: '전자 세관신고에서 동반 가족 수 확인하기', target: 'family', section: '가족캠프 추가 체크사항' },
  { id: 'df-6', text: '보호자 개인 준비물과 아이 준비물 함께 확인하기', target: 'family', section: '가족캠프 추가 체크사항' },
];

export const packingChecklists: ChecklistItemType[] = [
  // 필수 서류
  { id: 'p-doc-1', text: '여권', target: 'all', section: '필수 서류' },
  { id: 'p-doc-2', text: '왕복항공권', target: 'all', section: '필수 서류' },
  { id: 'p-doc-3', text: 'eTravel QR코드', target: 'all', section: '필수 서류' },
  { id: 'p-doc-4', text: '증명사진 1매', target: 'all', section: '필수 서류' },
  { id: 'p-doc-5', text: '영문 주민등록등본', target: 'all', section: '필수 서류' },

  // 환전/결제
  { id: 'p-money-1', text: '달러 고액권', target: 'all', section: '환전/결제' },
  { id: 'p-money-2', text: '한국 5만원권', target: 'all', section: '환전/결제' },
  { id: 'p-money-3', text: '트래블월렛 카드', target: 'all', section: '환전/결제' },
  { id: 'p-money-4', text: '소액 현금', target: 'all', section: '환전/결제' },

  // 의류
  { id: 'p-cloth-1', text: '반팔', target: 'all', section: '의류' },
  { id: 'p-cloth-2', text: '반바지', target: 'all', section: '의류' },
  { id: 'p-cloth-3', text: '긴바지', target: 'all', section: '의류' },
  { id: 'p-cloth-4', text: '긴팔', target: 'all', section: '의류' },
  { id: 'p-cloth-5', text: '바람막이', target: 'all', section: '의류' },
  { id: 'p-cloth-6', text: '속옷', target: 'all', section: '의류' },
  { id: 'p-cloth-7', text: '양말 여분', target: 'all', section: '의류' },
  { id: 'p-cloth-8', text: '모자', target: 'all', section: '의류' },
  { id: 'p-cloth-9', text: '실내용 슬리퍼 또는 크록스', target: 'all', section: '의류' },

  // 수영 준비물
  { id: 'p-swim-1', text: '수영복 또는 래쉬가드', target: 'all', section: '수영 준비물' },
  { id: 'p-swim-2', text: '수경', target: 'all', section: '수영 준비물' },
  { id: 'p-swim-3', text: '개인 스노클 마스크', target: 'all', section: '수영 준비물' },
  { id: 'p-swim-4', text: '아쿠아슈즈 또는 아쿠아삭스', target: 'all', section: '수영 준비물' },

  // 세면도구
  { id: 'p-wash-1', text: '화장품', target: 'all', section: '세면도구' },
  { id: 'p-wash-2', text: '칫솔', target: 'all', section: '세면도구' },
  { id: 'p-wash-3', text: '치약', target: 'all', section: '세면도구' },
  { id: 'p-wash-4', text: '샴푸', target: 'all', section: '세면도구' },
  { id: 'p-wash-5', text: '선크림', target: 'all', section: '세면도구' },
  { id: 'p-wash-6', text: '샤워필터', target: 'all', section: '세면도구' },
  { id: 'p-wash-7', text: '개인 수건이 필요한 경우 여분', target: 'all', section: '세면도구' },

  // 생활용품
  { id: 'p-life-1', text: '충전기', target: 'all', section: '생활용품' },
  { id: 'p-life-2', text: '돼지코 어댑터', target: 'all', section: '생활용품' },
  { id: 'p-life-3', text: '개인컵 또는 텀블러', target: 'all', section: '생활용품' },
  { id: 'p-life-4', text: '빨래망', target: 'all', section: '생활용품' },

  // 개인 비상약
  { id: 'p-med-1', text: '알러지약', target: 'all', section: '개인 비상약' },
  { id: 'p-med-2', text: '안약', target: 'all', section: '개인 비상약' },
  { id: 'p-med-3', text: '소화제', target: 'all', section: '개인 비상약' },
  { id: 'p-med-4', text: '개인 복용약', target: 'all', section: '개인 비상약' },
  { id: 'p-med-5', text: '모기패치 또는 모기팔찌', target: 'all', section: '개인 비상약' },

  // 수업 준비물
  { id: 'p-study-1', text: '수업용 가방', target: 'all', section: '수업 준비물' },
  { id: 'p-study-2', text: '연필', target: 'all', section: '수업 준비물' },
  { id: 'p-study-3', text: '지우개', target: 'all', section: '수업 준비물' },
  { id: 'p-study-4', text: '펜', target: 'all', section: '수업 준비물' },
];
