document.addEventListener('DOMContentLoaded', () => {
  

  btn_Contacto.onclick = function(e){
  e.preventDefault();
  var nom = document.getElementById("nombre").value;
  var asunto = document.getElementById("asunto").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("mensaje").value;

  if (validacion(nom, asunto, email, msg)){
      Toastify({
        text:"Se envio correctamente",
        duration: 2000,
        gravity:"bottom",
        position:"right",
        className: 'notificacion my-toast'
      }).showToast()
      
    }

    function validacion(nom, asunto, email, msg){
      if(nom == " " || asunto == " " || email == " " || msg == " " ){
          Toastify({
            text:"Error al enviar",
            duration: 2000,
            gravity:"bottom",
            position:"right",
            className: 'notificacion my-toast'
          }).showToast();
          return false;
      }else if(nom == "" || asunto == "" || email == "" || msg == "" ){
        Toastify({
          text:"Error al enviar",
          duration: 2000,
          gravity:"bottom",
          position:"right",
          className: 'notificacion my-toast'
        }).showToast();
        return false;
      }else if(nom === null || asunto === null || email === null || msg === null ){
          Toastify({
            text:"Error al enviar",
            duration: 2000,
            gravity:"bottom",
            position:"right",
            className: 'notificacion my-toast'
          }).showToast();
          return false;
  
      }else{
         return true;
  
      }
  
  
  }
  }



  

});