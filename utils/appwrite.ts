// import { Client, Account, Databases, Storage } from 'appwrite';
import {
  Account,
  Databases,
  Client as ServerClient,
  Storage,
} from 'node-appwrite';

// export const appWriteClient = new Client();

export const serverClient = new ServerClient();

serverClient
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY!);

// appWriteClient
//   .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//   .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
// .setDevKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY!);

export const account = new Account(serverClient);
export const database = new Databases(serverClient);
export const bucketStorage = new Storage(serverClient);
// export { ID } from 'appwrite';
