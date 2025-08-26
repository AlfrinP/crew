'use server';
import { CreateEventDTO } from '@/lib/types';
import { Event } from '@/lib/types';
import { database } from '@/utils/appwrite';

export async function addEvents(data: CreateEventDTO): Promise<Event | null> {
  try {
    const response = await database.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_EVENTS_COLLECTION_ID!,
      'unique()',
      data,
    );

    const createdEventDetails: Event = {
      $id: response.$id,
      ...response.data,
      $createdAt: response.$createdAt,
      $updatedAt: response.$updatedAt,
    };

    return createdEventDetails;
  } catch (error) {
    console.error(error);
    return null;
  }
}
