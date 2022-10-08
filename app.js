const EventEmitter = require('events') ;

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=> {
  console.log(`data recieved ${name} : ${id}`)
})
customEmitter.on('response', ()=> {
  console.log(`Some other listener`)
})

customEmitter.emit('response', 'john', 34)