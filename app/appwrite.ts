import { Client, Account } from 'appwrite';

export const client = new Client();

client
  .setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(NEXT_PUBLIC_APPWRITE_PROJECT);

export const account = new Account(client);
export { ID } from 'appwrite';
