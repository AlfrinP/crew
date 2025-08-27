'use server';

import { GetFilePreviewParams, StorageUploadResult } from '@/lib/types';
import { bucketStorage } from '@/utils/appwrite';
import { ID } from 'appwrite';

export async function uploadFile(
  file: File,
): Promise<StorageUploadResult | null> {
  try {
    const response = bucketStorage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
      ID.unique(),
      file,
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getFilePreviewFromStorage(
  params: GetFilePreviewParams,
): Promise<string | null> {
  try {
    const response = bucketStorage.getFilePreview(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
      params.fileId,
      params.width,
      params.height,
      params.gravity,
      params.quality,
      params.borderWidth,
      params.borderColor,
      params.borderRadius,
      params.opacity,
      params.rotation,
      params.background,
      params.output,
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
