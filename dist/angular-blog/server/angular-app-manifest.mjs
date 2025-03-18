
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/content/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 774, hash: 'bca5f660e0a168491bdb154efd5432a8bc3499400d592189d1e83b977161d70b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '6ee28a2cf7f4eb0f038eb6c92cbd6676673e10965af829f5387d93427709dce6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QVBTD5OU.css': {size: 249, hash: 'rB5uCwunvII', text: () => import('./assets-chunks/styles-QVBTD5OU_css.mjs').then(m => m.default)}
  },
};
