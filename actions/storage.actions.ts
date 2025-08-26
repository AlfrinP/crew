'use server';

import { StorageUploadResult } from '@/lib/types';
import { bucketStorage } from '@/utils/appwrite';
import { ID } from 'appwrite';

export async function uploadFile(
  file: File,
): Promise<StorageUploadResult | null> {
  try {
    const promise = bucketStorage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
      ID.unique(),
      file,
    );

    return promise;
  } catch (error) {
    console.error(error);
    return null;
  }
}
