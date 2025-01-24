
//validamos formulario con jquery validate
$(function(){
    $("#mis-datos").validate({
        rules:{
            nombre:{
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
            comuna:{
                required:true
            },
            descripcion:{
                required:true
            },
        },//rules
        messages:{
            nombre:{
                required:'Tiene que ingresar un nombre',
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
            comuna:{
                required: 'Tiene que seleccionar una comuna'
            },
            descripcion:{
                required:'Tiene que escribir una descrpción detallada de lo que necesita'
            },
        },//messages
     })
});//fin validate