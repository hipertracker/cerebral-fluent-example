import HttpProvider from '@cerebral/http';

const http = HttpProvider({
  baseUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000' : '',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Accept': 'application/json',
  },
  // withCredentials: false,
});
