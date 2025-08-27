'use server';
import { CreateEventDTO, EventListDTO } from '@/lib/types';
import { Event } from '@/lib/types';
import { database } from '@/utils/appwrite';
import { Query } from 'appwrite';

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

export async function getAllEvents({
  eventsPerPage,
  currentPage,
}: {
  eventsPerPage: number;
  currentPage: number;
}): Promise<EventListDTO[] | null> {
  try {
    const response = await database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_EVENTS_COLLECTION_ID!,
      [
        Query.orderDesc('date'),
        Query.select(['title', 'imageStorageId', 'description', 'date']),
        Query.limit(eventsPerPage),
        Query.offset((currentPage - 1) * eventsPerPage),
      ],
    );

    const EventsList: EventListDTO[] = response.documents.map((doc) => ({
      title: doc.title,
      description: doc.description,
      date: doc.date,
      imageStorageId: doc.imageStorageId,
    }));

    return EventsList;
  } catch (error) {
    console.error(error);
    return null;
  }
}
