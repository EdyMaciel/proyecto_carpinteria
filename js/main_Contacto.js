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
console.log(nom)
    function validar_email(email){
      var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email) ? true : false;
      
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

      }else if(validar_email(email) == false){
          
        Toastify({
            text:"Error al ingresar el correo electronico",
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