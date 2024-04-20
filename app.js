function redireccionar (id, url){
    document.getElementById(id).onclick = function(){
        window.open(url, '_blank');
    };
    return;
}

//Juego del numero secreto
redireccionar('repoJuegoSecreto', 'https://github.com/Ags-99/juego-numero-secreto');
redireccionar('demoJuegoSecreto', 'https://juego-numero-secreto-tau.vercel.app/');

//Encriptado de texto
redireccionar('repoEncriptadoTexto', 'https://github.com/Ags-99/Challenge01');
redireccionar('demoEncriptadoTexto', 'https://challenge01-jet.vercel.app/');

//AluraPlay
redireccionar('repoAluraPlay', 'https://github.com/Ags-99/AluraPlay');
redireccionar('demoAluraPlay', 'https://alura-play-red-pi.vercel.app/');


//validacion de formulario
document.querySelector('.send').addEventListener('click', function() {
    // Obtenemos los valores de los campos
    var nombre = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('msj').value;

    // Validamos que los campos no estén vacíos
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validamos el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    // Si todos los campos están completos y el correo electrónico tiene un formato válido, el formulario es válido
    alert('El formulario es válido. ¡Se enviará el mensaje!');
});


