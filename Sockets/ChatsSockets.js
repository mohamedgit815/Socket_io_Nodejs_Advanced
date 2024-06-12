
const router = require('express').Router();
const chats = {};

function TestSocketRouter(io) {

    io.on('connection', (socket) => {
        
   

        const chatId = socket.request._query.chatId;
        console.log(chatId);

        if(!chats[chatId]) {
            chats[chatId] = [];
        }

        chats[chatId].push(socket);



    socket.on('msg', function(data) {
        const currentChatId = data.chatId;

        console.log(data);

        //if(!chats[currentChatId]) return;

        chats[chatId].forEach((socketIO) => {
            //if(socketIO === socket) return;

            socketIO.emit('msg', data);
        });


        //io.to(socket.id).emit('msg',data); 
        //console.log(socket.id);

    });


    
});

    return router;
}


module.exports = TestSocketRouter;

        //socket.broadcast.emit('msg',data);
        //socket.emit('msg',data);
        //socket.join('newRoom');