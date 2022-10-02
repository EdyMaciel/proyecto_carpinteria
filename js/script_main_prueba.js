/* TRABAJAR CON DATOS STRINGS QUE INGRESE */

 let nom = prompt("Ingresar su nombre");
 let ape = prompt("Ingresar su apellido")
 let mayor = confirm("Usted es mayor de edad?")

 if (mayor === true){
     alert(nom+" "+ape+" "+"Puede pasar")
 }else{
     alert(nom+" "+ape+" "+"No puede pasar por ser menor")
 }


// /* CALCULAR UNA TABLA */

//  alert("programa para hacer tablas")
//  let num = prompt("ingresar un numero")
 
//  for(let i=0; i <= 10; i++){
//      alert(i * num)
//  }
//  alert("Esa fue toda la tabla")