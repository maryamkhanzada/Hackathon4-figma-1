import { createClient } from '@sanity/client';


const client = createClient({
  projectId: '4c9svhu8', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'skclreqZIrD1ipG2LIcaBZdIBpw43Ml2oXkjxSo4RVh0UEwgiih9wPDkBcwmPaQr7hy9lqj8yoddDezWa6ZC38IvWvyOxFedODcLWAQQZ2wIoUd2w9gMIwIMqLnQpRdjM8dEoA7PgKb8r7DXgw75oEbXNT2pbnTBaxH69RGycv71rtSBN3t3', // Replace with your Sanity API token
});


export default client;
