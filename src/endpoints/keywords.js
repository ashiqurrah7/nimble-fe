import HTTP from '@/services/http';

export function createKeywords(data) {
  return HTTP.post('/keywords', data);
}
