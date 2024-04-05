import HTTP from '@/services/http';

export function createKeywords(data) {
  return HTTP.post('/keywords', data);
}

export function getKeyword(id) {
  return HTTP.get(`/keywords/${id}`);
}
