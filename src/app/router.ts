import Router from '@cerebral/router';

const router = Router({
  onlyHash: false,
  query: true,
  routes: [
    { path: '/', signal: 'homeRouted' },
    { path: '/search', signal: 'searchRouted' },
    { path: '/read', signal: 'read.routed' },
    { path: '/help', signal: 'helpRouted' },
    { path: '/history', signal: 'historyRouted' },
    { path: '/config', signal: 'configRouted' },
  ],
});

export default router;
