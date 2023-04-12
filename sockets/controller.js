

const socketController = (socket) => {
        
    console.log('Cliente conectado', socket.id);

    //Mensaje cuando se deconecta el cliente
    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado');
    });

    //Listener de eventos de parte del cliente
    socket.on('enviar-mensaje', ( payload, callback )=>{
        
        const id = 123456789;
        callback(id);
        
        //Enviar mensaje a todos los clientes conectados
        socket.broadcast.emit('enviar-mensaje', payload);                
    });
}


module.exports = {

    socketController

}


