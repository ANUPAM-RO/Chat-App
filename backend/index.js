const express = require("express");
const mongoose = require("mongoose");
const app = express();
const http = require("http");
const authRoute = require("./routes/UserRoute");
const cors = require("cors");
const { Server, Socket } = require("socket.io");
app.use(express.json());
mongoose.connect(
  "mongodb://localhost:27017/chat",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongodb connected Sucessfully");
    }
  }
);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with id: ${socket.id} joined room: ${data}`);
    });
    socket.on("send_message", (data) => {
        console.log(data);
        socket.to(data.room).emit("receive_message", data);
    })
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

app.use(cors());

app.use("/auth", authRoute);
app.listen(8000, () => {
  console.log("Backend server is running ");
});
server.listen(9000, () => {
  console.log("SERVER RUNNING");
});
