const { createProxyMiddleware } = require("http-proxy-middleware");

const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

module.exports = function (app) {
  console.log(`${host}:${port}`);
  app.use(createProxyMiddleware("/api", { target: `${host}:${port}` }));
};
