var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var store = ['hello guys', 'this is previous message']
io.on('connection', function(socket){
    console.log('a client is connected')
    socket.on('userjoin', function(userId){
        console.log(userId, 'is connected');
        socket.emit('history', store)
    })
    socket.on('disconnect', function(){
        console.log('client disconnected');
    })
    socket.on('chat message', function(msg){
        console.log('message from client: ', msg)
        storeData(msg)
        console.log(store)
    })
})


server.listen(3000, '0.0.0.0', ()=> {
    console.log('Server is running on port 3000')
})


function storeData(msg) {
    store.push(msg)
}