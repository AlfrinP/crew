import { ImageFormat, ImageGravity } from 'appwrite';
import z from 'zod';

export type Event = {
  $id: string;
  title: string;
  description: string;
  date: Date;
  note?: string;
  importantInstructions?: string;
  location: string;
  rules?: string;
  imageStorageId: string;
  $createdAt: string;
  $updatedAt: string;
};

export type CreateEventFormDTO = Omit<
  Event,
  '$id' | '$updatedAt' | '$createdAt' | 'imageStorageId' | 'date'
> & {
  image: File;
  time: string;
  date: string;
};

export type CreateEventDTO = Omit<Event, '$id' | '$updatedAt' | '$createdAt'>;

export type EventListDTO = Omit<
  Event,
  | '$updatedAt'
  | '$createdAt'
  | 'note'
  | 'importantInstructions'
  | 'location'
  | 'rules'
>;

export type StorageUploadResult = {
  $id: string;
  bucketId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  name: string;
  signature: string;
  mimeType: string;
  sizeOriginal: number;
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export type EventFormProps = {
  onSubmit: (data: CreateEventDTO) => Promise<void>;
  isSubmitting: boolean;
};

export type TiptapEditorProps = {
  onChange: (html: string) => void;
  initialContent?: string;
  placeholder?: string;
};

export type Participant = {
  id: string;
  eventId: string;
  name: string;
  email: string;
  college: string;
  phone: string;
  status: 'registered' | 'confirmed' | 'cancelled';
  registeredAt: string;
};

export type Announcement = {
  id: string;
  eventId: string;
  title: string;
  message: string;
  createdAt: string;
};

export type AnnouncementFormData = {
  title: string;
  message: string;
};

export type ParticipantStatus =
  | 'all'
  | 'registered'
  | 'confirmed'
  | 'cancelled';

export const addEventFormSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .min(3, 'Title must be at least 3 characters'),
  description: z
    .string()
    .min(1, 'Description is required')
    .min(10, 'Description must be at least 10 characters'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  location: z.string().min(1, 'Location is required'),
  rules: z.string().optional(),
  note: z.string().optional(),
  importantInstructions: z.string().optional(),
  image: z.instanceof(File).refine(
    (file) => file.size <= 1024 * 1024, // 1MB limit
    'Image size must be less than 1MB',
  ),
});

export type GetFilePreviewParams = {
  fileId: string;
  width?: number;
  height?: number;
  gravity?: ImageGravity;
  quality?: number;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  opacity?: number;
  rotation?: number;
  background?: string;
  output?: ImageFormat;
  token?: string;
};
