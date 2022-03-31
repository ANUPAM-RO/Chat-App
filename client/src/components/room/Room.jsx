import React from 'react'
import "./room.css"
import { useState } from 'react';
import io from "socket.io-client";
import Chat from '../chat/Chat';
import Sidebar from '../sidebar/Sidebar';
const socket = io.connect("http://localhost:9000");
const Room = () => {
     const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
    }
  };
    return (
        <>
            <Sidebar name = "Chatly"/>
      <div className='room-container'>
           <h3>Join A Chat</h3>
      <input
        type="text"
        placeholder="John.."
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        placeholder="Room ID..."
        onChange={(event) => setRoom(event.target.value)}
        />
      <button
        onClick={joinRoom}
        >Join a Room</button>
           <Chat socket={socket} username={username} room={room}/>
    </div>
        </>
  )
}

export default Room