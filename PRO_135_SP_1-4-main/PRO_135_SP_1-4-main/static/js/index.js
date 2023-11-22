$(document).ready(function(){

    console.log('El documento está listo')

    //  Obteniendo la fecha usando el objeto Date() y convirtiéndolos a cadena de caracteres
    let date = new Date()
    let current_date = date.toDateString()

    //  Mostrar la fecha en la página HTML usando JQUERY y JS
    $('#date').text('Fecha: ' + current_date)

    
    let review = ""
    let input_data = ""
    let product = ""
    let emotion = ""
    let emoji_url = ""

    //  Haciendo una función para una solicitud AJAX
    function ajax_request(api_url , input_data){

        $.ajax({

            // Tipo de solicitud
            type : 'POST',

            // URL
            url : api_url,

            //  Datos JSON
            data : JSON.stringify(input_data),

            //  Tipo de dato de la respuesta esperada
            dataType : 'json',

            //  Tipo de contenido
            contentType : 'application/json',

            //  Método "success"
            success : function(result)
            {
                //  Extraer la ruta de los sentimientos y emoticonos
                emotion = result.sentiment
                emoji_url = result.path

                //  Actualizar el emoticón y los sentimientos según corresponda
                if (product  ==  'Smartphone'){
                    $('#m_emoji').attr('src' , emoji_url)
                    $('#m_emotion').text(emotion)
                    $('#m_emoji').show()
                    $('#m_emotion').show()
                }

                else if (product  ==  'Digital Camera'){
                    $('#c_emoji').attr('src' , emoji_url)
                    $('#c_emotion').text(emotion)
                    $('#c_emoji').show()
                    $('#c_emotion').show()
                }

                else if (product  ==  'Headphones'){
                    $('#h_emoji').attr('src' , emoji_url)
                    $('#h_emotion').text(emotion)
                    $('#h_emoji').show()
                    $('#h_emotion').show()
                }

                else if (product  ==  'Video Games'){
                    $('#v_emoji').attr('src' , emoji_url)
                    $('#v_emotion').text(emotion)
                    $('#v_emoji').show()
                    $('#v_emotion').show()
                }
            },

            //  Método "error"
            error : function(result)
            {
                console.log(result)
            }

        })

        console.log('Solicitud AJAX enviada')
        
    }


    //  Verificar si se hace clic en el botón para enviar debajo de "smartphone" y obtener la reseña correspondiente
   


})

    
