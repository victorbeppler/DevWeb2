var events = require('events');
var eventEmitter = new events.EventEmitter();

// Aqui esta sendo criada a função1
var listener1 = function listener1() {
    console.log('listener1 executed.');
}

// Aqui esta sendo criada a função2
var listener2 = function listener2() {
    console.log('listener2 executed.');
}

// Aqui esta sendo vinculado o evento de conexão com a função listener
eventEmitter.addListener('connection', listener1);

// Aqui esta sendo vinculado o evento de conexão com a função listener
eventEmitter.on('connection', listener2);

//Aqui ele esta fazendo a contagem de conexoes da função listener
var eventListeners = require('events').EventEmitter.listenerCount
(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Ele ele esta emitindo uma coneção
eventEmitter.emit('connection');

// Removendo a conexão da função listener
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

// Ele ele esta emitindo uma coneção
eventEmitter.emit('connection');

//Aqui ele esta fazendo a contagem de conexoes da função listener
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

//Sinalizando que o programa esta finalizando
console.log("Program Ended.");
