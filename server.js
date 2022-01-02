const JsonServer=require("json-server")
const server =JsonServer.create();
const router = JsonServer.router(".db.json");
const handler = JsonServer.default({
    static: "./build"
});
const port = process.env.PORT || 3005
server.use(handler);
server.use(JsonServer.rewriter({
    "/api/*": "/$1",
}));

server.use(router);
server.listen(port, () => {
    console.log("json server is runnigs");

});

