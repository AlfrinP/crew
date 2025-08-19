import { Event, Participant, Announcement } from './types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Symposium 2024',
    description:
      'Join us for an exciting day of technology talks, workshops, and networking with industry leaders. Discover the latest trends in AI, web development, and cybersecurity.',
    date: '2024-03-15',
    time: '09:00',
    note: 'Please bring your laptops for hands-on workshops',
    importantInstructions:
      'Registration closes 48 hours before the event. No walk-ins will be accommodated.',
    image: '/images/sample-tech-event.jpg',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Cultural Fest - Spectrum',
    description:
      'Experience the vibrant cultural diversity of our college through dance, music, art exhibitions, and food stalls representing different regions.',
    date: '2024-03-22',
    time: '16:00',
    note: 'Traditional attire is encouraged but not mandatory',
    importantInstructions:
      'Food stalls will be open until supplies last. Entry is free for all students.',
    image: '/images/sample-tech-event.jpg',
    createdAt: '2024-01-20T14:30:00Z',
    updatedAt: '2024-01-20T14:30:00Z',
  },
  {
    id: '3',
    title: 'Hackathon 48',
    description:
      'A 48-hour intensive coding competition where teams build innovative solutions to real-world problems. Prizes worth $10,000 up for grabs!',
    date: '2024-04-05',
    time: '18:00',
    note: 'Teams of 2-4 members. Food and refreshments will be provided throughout the event',
    importantInstructions:
      'Bring your own laptops and chargers. Internet will be provided. Sleeping bags recommended.',
    image: '/images/sample-tech-event.jpg',
    createdAt: '2024-02-01T09:15:00Z',
    updatedAt: '2024-02-01T09:15:00Z',
  },
  {
    id: '4',
    title: 'Career Fair 2024',
    description:
      'Meet with top recruiters from leading companies across various industries. Perfect opportunity for internships and full-time positions.',
    date: '2024-04-12',
    time: '10:00',
    note: 'Dress professionally and bring multiple copies of your resume',
    importantInstructions:
      'Pre-registration required. Slots are limited and will be allocated on first-come-first-serve basis.',
    image: '/images/sample-tech-event.jpg',
    createdAt: '2024-02-05T11:00:00Z',
    updatedAt: '2024-02-05T11:00:00Z',
  },
  {
    id: '5',
    title: 'Science Exhibition',
    description:
      'Showcase of innovative projects by students from various departments. From robotics to biotechnology, witness the future of science.',
    date: '2024-04-20',
    time: '11:00',
    note: 'Interactive demonstrations will be available throughout the day',
    importantInstructions:
      'Open to all students and faculty. External visitors need prior approval.',
    image: '/images/sample-tech-event.jpg',
    createdAt: '2024-02-10T16:45:00Z',
    updatedAt: '2024-02-10T16:45:00Z',
  },
  {
    id: '6',
    title: 'Alumni Meetup',
    description:
      'Connect with successful alumni from various batches. Learn about career paths, industry insights, and networking opportunities.',
    date: '2024-05-01',
    time: '14:00',
    note: 'Refreshments and networking session included',
    importantInstructions: 'RSVP required. Limited to 200 attendees.',
    image: '/images/sample-tech-event.jpg',
    createdAt: '2024-02-15T13:20:00Z',
    updatedAt: '2024-02-15T13:20:00Z',
  },
];

// Mock participants data
export const mockParticipants: Participant[] = [
  {
    id: 'p1',
    eventId: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@email.com',
    college: 'Computer Science Engineering',
    phone: '+1 (555) 123-4567',
    status: 'confirmed',
    registeredAt: '2024-01-16T10:30:00Z',
  },
  {
    id: 'p2',
    eventId: '1',
    name: 'Bob Smith',
    email: 'bob.smith@email.com',
    college: 'Information Technology',
    phone: '+1 (555) 234-5678',
    status: 'registered',
    registeredAt: '2024-01-17T14:15:00Z',
  },
  {
    id: 'p3',
    eventId: '1',
    name: 'Charlie Brown',
    email: 'charlie.brown@email.com',
    college: 'Electronics Engineering',
    phone: '+1 (555) 345-6789',
    status: 'confirmed',
    registeredAt: '2024-01-18T09:45:00Z',
  },
  {
    id: 'p4',
    eventId: '1',
    name: 'Diana Wilson',
    email: 'diana.wilson@email.com',
    college: 'Computer Science Engineering',
    phone: '+1 (555) 456-7890',
    status: 'cancelled',
    registeredAt: '2024-01-19T16:20:00Z',
  },
  {
    id: 'p5',
    eventId: '1',
    name: 'Ethan Davis',
    email: 'ethan.davis@email.com',
    college: 'Mechanical Engineering',
    phone: '+1 (555) 567-8901',
    status: 'registered',
    registeredAt: '2024-01-20T11:00:00Z',
  },
  {
    id: 'p6',
    eventId: '2',
    name: 'Fiona Martinez',
    email: 'fiona.martinez@email.com',
    college: 'Arts and Design',
    phone: '+1 (555) 678-9012',
    status: 'confirmed',
    registeredAt: '2024-01-21T13:30:00Z',
  },
  {
    id: 'p7',
    eventId: '2',
    name: 'George Thompson',
    email: 'george.thompson@email.com',
    college: 'Music and Performing Arts',
    phone: '+1 (555) 789-0123',
    status: 'confirmed',
    registeredAt: '2024-01-22T15:45:00Z',
  },
  {
    id: 'p8',
    eventId: '3',
    name: 'Hannah Lee',
    email: 'hannah.lee@email.com',
    college: 'Computer Science Engineering',
    phone: '+1 (555) 890-1234',
    status: 'registered',
    registeredAt: '2024-02-02T08:20:00Z',
  },
];

// Mock announcements data
export const mockAnnouncements: Announcement[] = [
  {
    id: 'a1',
    eventId: '1',
    title: 'Workshop Schedule Released',
    message:
      'The detailed schedule for all workshops has been published. Please check your email for the complete agenda and room assignments.',
    createdAt: '2024-02-01T10:00:00Z',
  },
  {
    id: 'a2',
    eventId: '1',
    title: 'Parking Information',
    message:
      'Limited parking will be available on campus. We recommend using public transportation or carpooling. Additional parking spots are available at the nearby community center.',
    createdAt: '2024-02-05T14:30:00Z',
  },
  {
    id: 'a3',
    eventId: '2',
    title: 'Cultural Performance Applications',
    message:
      'Applications for cultural performances are now open! Submit your entries by March 10th. Solo and group performances are welcome.',
    createdAt: '2024-02-10T12:15:00Z',
  },
  {
    id: 'a4',
    eventId: '3',
    title: 'Hackathon Theme Revealed',
    message:
      'This year\'s theme is "Sustainable Technology Solutions". Focus on creating innovative solutions that address environmental challenges.',
    createdAt: '2024-03-01T16:00:00Z',
  },
  {
    id: 'a5',
    eventId: '3',
    title: 'Mentor Registration Open',
    message:
      'Industry experts and senior students can now register as mentors. Help guide the next generation of innovators!',
    createdAt: '2024-03-15T09:30:00Z',
  },
];

// Helper functions
export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find((event) => event.id === id);
};

export const getParticipantsByEventId = (eventId: string): Participant[] => {
  return mockParticipants.filter(
    (participant) => participant.eventId === eventId,
  );
};

export const getAnnouncementsByEventId = (eventId: string): Announcement[] => {
  return mockAnnouncements.filter(
    (announcement) => announcement.eventId === eventId,
  );
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (timeString: string): string => {
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};
