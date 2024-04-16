
console.log("mensaje en js")
const txtNombre = document.getElementById("nombre");
const txtCorreoElectronico = document.getElementById("correo");
const txtNumeroTelefonico = document.getElementById("telefono");
const btnEnviar = document.getElementById("enviar");

let listaUsuarios = [];

btnEnviar.addEventListener("click", agregarUsuario);

const nombre = txtNombre.value;
const correo = txtCorreoElectronico.value;
const telefono = txtNumeroTelefonico.value;

console.log("hola ->"+nombre)

function validarDatos(){
    const nombre = txtNombre.value;
    const correo = txtCorreoElectronico.value;
    const telefono = txtNumeroTelefonico.value;

    if(nombre > 20){
        return "Nombre posee muchos caracteres";
    }else{
        return "Caracteres adecuados ";
    }
}



let personaX = {
    txtNombre
};


function agregarUsuario(){
    listaUsuarios.push[personaX]
    
    for (let index = 0; index < listaUsuarios.length; index++) {
        const element = listaUsuarios[index];
        console.log("PERSONA AGREGAS "+element);
        
    }
}

