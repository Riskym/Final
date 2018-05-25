function validarFormulario() { /* Valida el formulario de contacto cuando es llamado */
	/*valida nombre */ 
   	if (document.formulario.nombre.value.length==0){ 
      	 alert("Nombre es obligatorio") 
      	 document.formulario.nombre.focus() 
      	 return false; 
   	} 
	/*valida apellido */ 
   	if (document.formulario.apellido.value==""){ 
      	 alert("Apellido es obligatorio") 
      	 document.formulario.apellido.focus() 
      	 return false; 
   	} 
	/* valida email */
	var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	valor = document.getElementById("email").value;
	if( !(ck_email.test(valor)) ) {
 	 alert("Debes ingresar un Email")
 	 return false;
	}
	/*envia formulario */ 
   	alert("El formulario se ha enviado"); 
   	document.formulario.submit(); 

}