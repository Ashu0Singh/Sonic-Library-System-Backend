let io;
const dotenv = require('dotenv');

module.exports= {
    init: httpServer => {
        io= require('socket.io')(httpServer,{
            cors: {
                origin: process.env.ORIGIN_URI,
            }});
        return io;
    },
    getIO: () => {
        if(!io) {
            throw new Error("Socket.io is not initialized!");
        }
        return io;
    }
};
