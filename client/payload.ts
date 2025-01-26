import { getPayload as getPayloadClient } from 'payload';
import config from '../payload.config';

let cached = null;

async function getPayload() {
  if (!cached) {
    cached = await getPayloadClient({ config });
  }
  return cached;
}

export { getPayload };
