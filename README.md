HEADER 
      SOCKETS:- WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection.

      WebSocket is bidirectional, a full-duplex protocol that is used in the same scenario of client-server communication, unlike HTTP it starts from ws:// or wss://.It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server). After closing the connection by either of the client and server, the connection is terminated from both ends. 

Sockets VS Polling(http)
     sockets open a channel between the web browser and a web server that allows real time communication and transfer of data between them.By keeping  channel over here or  connection, open sockets allow a two way ongoing conversation to happen

     When using sockets,we can send a message from the client to the server using Emmit function so The key difference to is that the server can, in return decide when to notify the client of a new message by also emmitting a message from the direction of the server to the client.The server can now decide exactly when to send a message back to the client without having to rely on the client making a request and asking for some information.

     in http protocal cthe chat clients would be responsible for periodically fetching messages from the server.
     But rather than doing all of this unnecessary pulling of the messages collection with sockets, our front end clients only send or emit messages that we want to add to  messages in front-end, The server is then responsible for keeping all of the clients all of our front ends up to date by emmtting any new messages back to them.
     This means that the client now doesn't have to guess when a new message like what's up has been sent by another client that's connected to the same server.It means the server can send us these messages as they come in real time, and it means that we don't have to send thousands of get requests for in any update to our data.

SUB WebSockets web socket is a protocol, a way of sending messages over the internet just like HTTP and like with the HTTP protocol.We can have different implementations of how to get data from the server in different npm libraries, (HTTP using 'axios, node-fetch' Libraries)

just like with the HTTP web sockets can have different implementations in npm libraries.
      ->The most common one in Node.js is the 'WS Library' (websocket),which provides the core functionality to use web sockets in Node.js on the server side. but it does not work in the browser 
      ->higher level convenient library that works on both the front end and the back end is 'socket.io'
      one of the most popular node packages, and it makes it extremely easy to use web sockets on both the front end and on the back end

SUB socket.io :- we can use Socket.Io for our client side, as well as our server side code using the same library.
when we start up our chat application on the client side,the Socket Io library will attempt to establish a web socket connection between the server and the client.And if the client is one of the less than 3% of browsers that don't support web sockets, socket.io sticks to a form of pulling similar to what we saw earlier.
This way, you're guaranteed to have your application run on all devices.

(widely used when working with real time applications in Node.js)

socket.io composed of two parts
       ->Server Library: which will integrate with the Node.js HTTP server.
       ->JavaScript client side library: that loads on the browser side.

like with HTTP requests on the client side.Will only ever send messages to that server.

However, on the server side, sockets allow us to send messages to any one of the many clients that are connected So say we had another client that connected to our server that joined the chat room.The server would be responsible for sending any updates, any new messages to that new client, whether it be the original Hello message or a message from any other client.So our server needs to be connected to and sending messages to multiple clients at the same time.With sockets, the server can decide when to send messages to the client.

in socket API It means that her server will need the support, some additional functionality over the client. For example, by keeping track of the multiple clients that are connected to it.And by having the ability to send messages back and forth between these clients individually or to 'broadcaste' messages to all of them at once.For example, when the server receives a new message, it needs to notify all of the clients of that new message by broadcasting it.

Socket.io success is the excellent high level API that it provides for both the server and the client in the server API. It uses the 'node event emitter' pattern around which nodes core APIs are built.
