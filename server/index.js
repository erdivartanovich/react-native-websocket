var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('a client is connected')
    socket.on('disconnect', function(){
        console.log('client disconnected');
    })
    socket.on('chat message', function(msg){
        console.log('message from client: ', msg)
    })
})

server.listen(3000, '0.0.0.0', ()=> {
    console.log('Server is running on port 3000')
})
