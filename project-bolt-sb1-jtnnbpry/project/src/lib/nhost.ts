import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
  subdomain: 'devalulfpjlevqriuori', // Your Nhost subdomain
  region: 'eu-central-1', // Default region for most Nhost projects (adjust if needed)
});

export { nhost };
