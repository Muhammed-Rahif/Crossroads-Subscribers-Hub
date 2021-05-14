const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require('path');
const PORT = process.env.PORT || 5000;
const io = require("socket.io")(server);
const routers = require("./routers");

// Custom Routers
app.use(routers);

// React Setup
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Sevrer listening
app.listen(PORT, () => {
  console.log(`Server started running on http://localhost:${PORT}`);
});