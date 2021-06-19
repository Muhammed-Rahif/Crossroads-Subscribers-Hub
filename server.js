const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db/db");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// Session
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/CrossroadsSubscribersHub",
    }),
    secret: "Crossroads Subscribers Hub",
    cookie: { maxAge: 15 * 24 * 60 * 60 * 1000 },
  })
);

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB connection
db.connect();

// Routers
const routers = require("./routers/routers");

app.use("/api", routers);

// Front end setup
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Server started running on http://localhost:${PORT}`);
});
