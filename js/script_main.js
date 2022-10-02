
function  solicitarDatos(){

    let finalizador = false;
    while(!finalizador){

        let nom = prompt("Ingrese su nombre");

        let asunto = prompt("Ingrese el asunto");
        
        let email = prompt("Ingrese su email");

        let msg = prompt("Ingrese mensaje");
        
        
        if (validacion(nom, asunto, email, msg)){
            alert("Se envio el correo correctamente");
            finalizador=true;
        }
    }

}

function validacion(nom, asunto, email, msg){
    if(nom == "" || asunto == "" || email == "" || msg == "" ){
        alert("Error al completar los datos")
        return false;

    }else if(nom === null || asunto === "" || email === null || msg === null ){
        alert("Error al completar los datos")
        return false;

    }else{
        return true;

    }


}




document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();

});