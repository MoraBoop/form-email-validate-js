const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');



eventListener();


// eventos 
function eventListener() {
    document.addEventListener('DOMContentLoaded', incioApp);

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    formularioEnviar.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', borrarContentForm);
}

// funciones 
function incioApp() {
    btnEnviar.disabled = true;
}

function validarCampo() {
    //console.log("Dentro del input");

    validarLongitud(this);

    //validar email

    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error')
    

    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
        
    }
}


// cuando se envia el correo

function enviarEmail(e) {
    e.preventDefault();
    //console.log('mail enviado');

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    // que acabe el spinn
    const msjEnviado = document.createElement('img');
    msjEnviado.src = 'img/mail.gif';
    msjEnviado.style.display = 'block';

    // borrar spin  y  colocar img msj enviado

    setTimeout(()=>{
        spinner.style.display = 'none';
        document.querySelector('#loaders').appendChild(msjEnviado);

        setTimeout(()=>{
            msjEnviado.remove();
            formularioEnviar.reset();
        }, 3000);
    }, 3000);
}

function validarLongitud(campo) {
    // vemos que nos retorna el elemento
    // console.log(campo);

    // retornar la longitud
    console.log(campo.value.length)

    if (campo.value.length > 0 ) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error')
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error')
    }   

}

function validarEmail(elemento) {
    // console.log(elemento);
    const mensaje = elemento.value;
    if (mensaje.indexOf('@') !== -1) {
        elemento.style.borderBottomColor = 'green';
        elemento.classList.remove('error');
    } else {
        elemento.style.borderBottomColor = 'red';
        elemento.classList.add('error');
    }
}

function borrarContentForm(e) {
    e.preventDefault();
    formularioEnviar.reset();
}