const express = require('express');
const http = require('http');
const app = express();
const port = 9000;
const server = http.createServer(app);
const io = require('socket.io')(server,{
    // cors: {
    //     origin: "*"
    // }
});

require('./Config/db').connectDb(); // Connect to Mongo Database

const testPage = require('./Sockets/ChatsSockets')(io);

app.use(express.json());

app.use('/api',require('./Routers/CreateChats/CreateChatRouters')(io))
app.use('/test',testPage);


server.listen( port , () => {
    console.log("Running");
});