$(document).ready(function () {
    console.log('ready')

    let ultimosHijos = '<li class="item_final">item list ul</li>'
    for (i=1; i<11; i++){
        $('ul').append(ultimosHijos)
    }

    let inicioHijos = '<li class="item_inicio">item list ol</li>'  
    for (j=1; j<11; j++){
        $('ol').prepend(inicioHijos)
    }

    $('.content').html('<p>Hola Kodder</p>')

    $('.content').css('color','#333')
   
    //$('.title').text('Aprendiendo jQuery')
    let titulo = '<h1 class="title">Empty</h1>'
    $('body').prepend(titulo)
    $('.title').text('Aprendiendo jQuery')
})