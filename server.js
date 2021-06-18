const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const path = require("path");
const bodyParser = require("body-parser");

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
