//Referencias del HTML

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

//Socket del cliente 
const socket = io();


//Mensajes personalizados
//on es para escuchar un evento
socket.on('connect', () => {

    console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});


socket.on('disconnect', () => {

    //console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';

});

socket.on('enviar-mensaje', (payload)=>{
    console.log(payload);
});

//Al dar click en el boton, obtiene la infor de la caja de texto
btnEnviar.addEventListener('click', ()=>{

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '1314134',
        fecha: new Date().getTime()
    }

    //emit emite un evento al socket
    socket.emit('enviar-mensaje', payload, ( id )=>{
        console.log('Desde el server', id)
    });
    

});