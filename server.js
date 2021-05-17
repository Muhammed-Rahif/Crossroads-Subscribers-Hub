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

// All users
var allUsers = new Array();
function searchUser(id) {
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].id === id) {
      return allUsers[i];
    }
  }
}
function searchUserIndex(id) {
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].id === id) {
      return i;
    }
  }
}

// Socket.io
io.on("connection", (socket) => {
  console.log("A user connected !");
  socket.on("userConnected", (data) => {
    data.id = socket.id;
    allUsers.push(data);
    data.type = "static";
    data.reason = "connect";
    delete data.password;
    delete data.email;
    io.emit("userConnect", data);
  });

  socket.on("massage", (data) => {
    io.emit("message", data);
  });

  socket.on("disconnect", (reason) => {
    console.log("A user disconnected !");
    var data = allUsers.splice(searchUserIndex(socket.id), 1);
    data[0].type = "static";
    data[0].reason = "disconnect";
    io.emit("userDisconnect", data[0]);
  });
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
