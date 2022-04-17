const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const PORT = 3000;


server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
})


/*which comes from the event emitter interface that our socket server uses to register an event listener. 
listen to the connection event, which are server will receive any time user connects to it
And in our callback function, will receive a socket to communicate with the client or the user that just connected*/
let readyPlayerCount = 0
io.on('connection', (socket) => {
    console.log('a user coneccted', socket.id);

    socket.on('ready', () => {
        console.log('Player ready', socket.id);
        readyPlayerCount++;

        if (readyPlayerCount % 2 === 0) {
            io.emit('startGame', socket.id);
        }
    });

    socket.on('paddleMove', (paddleData) => {
        socket.broadcast.emit('paddleMove', paddleData);
    });

    socket.on('ballMove', (ballData) => {
        socket.broadcast.emit('ballMove', ballData);
    });
});
