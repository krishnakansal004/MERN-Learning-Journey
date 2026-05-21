Socket.io

io => server
socket => user

on =>event listen
emit=>event fire karna'


# Day 05 - Socket.IO

## Topic Covered
Socket.IO basics and real-time communication in Node.js.

## What I Learned

Today I learned how Socket.IO helps in building real-time features where the server and client can communicate instantly without refreshing the page.

## Concepts Practiced

- What is Socket.IO
- Difference between normal HTTP request and real-time communication
- Setting up Socket.IO with Express server
- Listening to socket events
- Emitting events from client to server
- Sending response/events from server to client
- Understanding socket connection and disconnection

## Why Socket.IO is Useful

Socket.IO is useful when we need real-time updates in an application, such as:

- Chat applications
- Live notifications
- Online/offline user status
- Real-time dashboards
- Collaborative apps
- Live order tracking

## Basic Server Setup

```js
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Message received:", data);

    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});