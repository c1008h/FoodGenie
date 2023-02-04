const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  try {
  app.use(
    '/api',
    createProxyMiddleware({
      // 👇️ make sure to update your target
      // target: 'http://localhost:3006',
      target: 'https://foodgenie-ch.herokuapp.com/graphql',
      changeOrigin: true,
    }),
  )}
  catch(err) {
    console.log(err.message)
  }
};