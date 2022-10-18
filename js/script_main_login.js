const usuarios = [{id:"admin", pass:1234}, {id:"empleado", pass:4321} ];


function login(){

    let usu = prompt("ingrese el usuario");

    let contra = prompt("ingrese la contrasenia");    
    
    if(validacion(usu,contra)){
        alert("Se logeo correctamente")
    }else{
        alert("No pudo logearse")
    }
    
}

function validacion(usu,contra){

    
    for (const usuario of usuarios ){
        
        if(usu == usuario.id && contra == usuario.pass){
            return true
        }
        
    }


}
    
document.addEventListener('DOMContentLoaded', function() {
    login();

});