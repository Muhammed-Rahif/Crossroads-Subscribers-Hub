const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const routers = require("./routers");

// Cors config
app.use(cors());

// Custom Routers
app.use(routers);

// Socket.io
io.on("connection", (socket) => {
  console.log("A user connected !");
  socket.emit("hi", { name: "Rahif" });
});

// React Setup
app.use(express.static(path.join(__dirname, "client/build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Sevrer listening
server.listen(PORT, () => {
  console.log(`Server started running on http://localhost:${PORT}`);
});
