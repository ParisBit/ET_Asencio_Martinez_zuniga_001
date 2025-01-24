
//validamos formulario con jquery validate
$(function(){
    $("#datos-usuario").validate({
        rules:{
            nombre:{
                required:true
            },
            apellido:{
                required:true
            },
            nomUser:{
                required:true
            },
            correo:{
                required:true,
                email:true
            },
            telefono:{
                required:true,
                number:true
            },
            fecha:{
                required:true
            },
            comuna:{
                required:true
            },
            pass1:{
                required:true
            },
            pass2:{
                required:true,
                equalTo:'#pass1'
            },
        },//rules
        messages:{
            nombre:{
                required:'Tiene que ingresar un nombre',
                minlength:'Caracteres insuficientes'
            },
            apellido:{
                required:'Tiene que ingresar un apellido',
                minlength:'Caracteres insuficientes'
            },
            nomUser:{
                required: 'Tiene que ingresar su nombre de usuario generado automáticamente',
                minlength:'Caracteres insuficientes'
            },
            correo:{
                required:'Tiene que ingresar un correo',
                email:'Formato de correo no válido'
            },
            telefono:{
                required:'Tiene que ingresar un teléfono',
                minlength:'Dígitos insuficientes',
                number:'Debe ingresar solo números'
            },
            fecha:{
                required:'Tiene que seleccionar un fecha',
                min:'Debe ingresar una fecha válida'
            },
            comuna:{
                required: 'Tiene que seleccionar una comuna'
            },
            pass1:{
                required:'Tiene que ingresar una contraseña',
                minlength:'Caracteres insuficientes, mínimo 8 caracteres'
            },
            pass2:{
                required:'Tiene que confirmar su contraseña',
                minlength:'Caracteres insuficientes, mínimo 8 caracteres',
                equalTo:'Las contraseñas no coinciden'
            },
        },//messages
     })
});//fin validate

function generarNombreUsuario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nombreUsuario = crearNombreUsuario(nombre, apellido);
    mostrarResultado(nombre, apellido, nombreUsuario);
}

function crearNombreUsuario(nombre, apellido) {
    // Toma los primeros 3 caracteres del nombre
    let nombreCortado = nombre.slice(0, 3);

    // Encuentra el índice del primer espacio en el apellido, si existe
    let primerEspacioApellido = apellido.indexOf(' ');

    // Si hay un espacio en el apellido, córtalo hasta ese espacio
    if (primerEspacioApellido !== -1) {
        apellido = apellido.substring(0, primerEspacioApellido);
    }

    // Combina el nombre y apellido formateados
    return nombreCortado.toLowerCase() + "." + apellido.toLowerCase();
}

function mostrarResultado(nombre, apellido, nombreUsuario) {
    let longitudNombreUsuario = nombreUsuario.length;
    let resultadoHTML = `
        <p><strong>Nombre de usuario: ${nombreUsuario}</strong></p>
    `;
    document.getElementById("resultado").innerHTML = resultadoHTML;
}