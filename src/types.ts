export type CampType = 'junior' | 'family';

export interface EmergencyContact {
  name: string;
  phone: string;
}

export interface CampInfo {
  appTitle: string;
  subtitle: string;
  helperText: string;
  departureDate: string;
  airline: string;
  route: string;
  airportArrivalTime: string;
  meetingPlace: string;
  accommodation: string;
  emergencyContacts: EmergencyContact[];
  kakaoChannel: string;
  email: string;
  websites: string[];
  eTravelUrl: string;
}

export interface ChecklistItemType {
  id: string;
  text: string;
  target: 'all' | 'junior' | 'family';
  section?: string;
}

