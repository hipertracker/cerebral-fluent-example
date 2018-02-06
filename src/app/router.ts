import Router from '@cerebral/router';

const router = Router({
  onlyHash: false,
  query: true,
  routes: [
    { path: '/', signal: 'homeRouted' },
    { path: '/search', signal: 'searchRouted' },

    /*    
    Error: Cerebral - Signal with name "read" is not correctly defined. 
    Please check that the signal is either a sequence, an array or a function.
    */
    { path: '/read', signal: 'read.routed' },

    { path: '/help', signal: 'helpRouted' },
    { path: '/history', signal: 'historyRouted' },
    { path: '/config', signal: 'configRouted' },
  ],
});

export default router;
