import express from 'express'
import {createServer} from 'http'
import cors from 'cors'
import { Server } from 'socket.io'



const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5174",
        methods:["GET","POST"]
    }
})

io.on("connection",(socket)=>{

    console.log("New client connected");

    socket.on('message',(message)=>{
       console.log(message);
       io.emit("message",message);
    })
     
    socket.on("disconnect",()=>{
        console.log("Client disconnected");
        
    })
    
})

server.listen(5000,()=>{
console.log(`Server running on port 5000...`);

    
    
})