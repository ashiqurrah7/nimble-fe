import HTTPNoAuth from '@/services/http-no-auth';

export function createUserAccount(data) {
  return HTTPNoAuth.post('/users', data);
}

export function createSession(data) {
  return HTTPNoAuth.post('/login', data);
}
