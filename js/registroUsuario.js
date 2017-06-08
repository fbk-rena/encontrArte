$("#formValidate").validate({
        rules: {
            uname: {
                required: true,
                minlength: 5
            },
            cemail: {
                required: true,
                email:true
            },
            password: {
				required: true,
				minlength: 5
			},
			cpassword: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			curl: {
                required: true,
                url:true
            },
            crole:"required",
            ccomment: {
				required: true,
				minlength: 15
            },
            cgender:"required",
			cagree:"required",
        },
        //For custom messages
        messages: {
            uname:{
                required: "Enter a username",
                minlength: "Enter at least 5 characters"
            },
            curl: "Enter your website",
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });


     //funcion formulario
     //expresion regular de js
     var expresion = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
     $(document).ready(function(){
       $("#bEnviar").click(function(){
         var nombre= $("#name").val();
         var correoElectronico= $("#correo").val();

         if(nombre == ""){
           alert("ingresa el nombre");

         }else{
             $("#mensaje")//se desvanece
             if(correoElectronico == ""  || !exprion.test(correoElectronico) )//test es propio de js{

               alert("ingresa el correo electronico");
               prevent
             }
         }
       });
     });
     */





     $(document).ready(validar);

     var validar = function{
       $("#bEnviar").click(datosValidados);//al dar click al boton enviar se acciona.

     }

     var datosValidados = function(){
       var nombre = $ ("#nombre").val();
       var correoElectronico = $("#correo").val();

       if(nombre == ""){
         alert("ingresar el nombre")
       }else if()
     }
