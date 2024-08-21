
import { createProxyMiddleware } from 'http-proxy-middleware';
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://172.16.16.10:8060',
      changeOrigin: true,
    })
  );
};