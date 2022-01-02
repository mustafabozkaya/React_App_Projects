const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3005;

server.use(middlewares);
server.use(router);

server.listen(port);
server.use(router);
server.listen(port, () => {
  console.log("json server is runnigs");
});
