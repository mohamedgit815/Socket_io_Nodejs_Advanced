
const router = require('express').Router();
const controller = require('./CreateChatController');
const socketsIO = require('../../Sockets/CreateChatsSockets');
const chats = {};


router.route('/').get(controller.getChats).post(controller.createChat);


function createChatRouter(io) {
    socketsIO(io);
    // io.on('connection', (socket) => {});
    return router;
}


module.exports = createChatRouter;