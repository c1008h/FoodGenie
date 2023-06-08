const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  try {
  app.use(
    '/api',
    createProxyMiddleware({
      // 👇️ make sure to update your target
      target: 'http://localhost:3006' || 'https://foodgenie-ch.herokuapp.com' || 'https://main--frabjous-wisp-5d28b3.netlify.app/',
      changeOrigin: true,
    }),
  )}
  catch(err) {
    console.log(err.message)
  }
};