const chats = {};


function createChatSockets(io) {
    
    return io.on('connection', (socket) => {
        console.log("Helooooooooooooooooooooo");

        // const chatId = socket.request._query.chatId;

        // if(!chats[chatId]) {
        //     chats[chatId] = [];
        // }

       // chats[chatId].push(socket);


        socket.on("createMsg",(data) => {
            io.emit("createMsg",data);
        });


    });

}

module.exports = createChatSockets;