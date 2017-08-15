var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    const response = {
        data: {
            title: 'Hello',
            content: 'Hello world'
        }
    }
    res.send(response)
})

io.on('connection', function(socket){
    console.log('a client is connected')
    socket.on('disconnect', function(){
        console.log('client disconnected');
    })
})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})
