# Socket IO Flow

## Init an Express server

```js 
var app = require('express')(); 
```

## Init a Socket.io

```js
var io = require('socket.io'); 
```

## Socket.io need an http bridge to bind to the Express middleware
- Init http middleware that bind to the express server

```js
var http = require('http').Server(app)
```

- So we rewrite the io initialization into this

```js
var io = require('socket.io')(http);
```


