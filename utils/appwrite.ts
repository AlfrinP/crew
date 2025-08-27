import { Client, Account, Databases, Storage } from 'appwrite';

export const appWriteClient = new Client();

appWriteClient
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(appWriteClient);
export const database = new Databases(appWriteClient);
export const bucketStorage = new Storage(appWriteClient);

export { ID } from 'appwrite';
