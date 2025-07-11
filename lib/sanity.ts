import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'vz0niu98',
  dataset: 'production',
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to get the latest API version
  useCdn: true, // set to false for fresh data
});
