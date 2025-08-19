export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  note?: string;
  importantInstructions?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Participant {
  id: string;
  eventId: string;
  name: string;
  email: string;
  college: string;
  phone: string;
  status: 'registered' | 'confirmed' | 'cancelled';
  registeredAt: string;
}

export interface Announcement {
  id: string;
  eventId: string;
  title: string;
  message: string;
  createdAt: string;
}

export interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  note?: string;
  importantInstructions?: string;
}

export interface AnnouncementFormData {
  title: string;
  message: string;
}

export type ParticipantStatus =
  | 'all'
  | 'registered'
  | 'confirmed'
  | 'cancelled';
