/**
 * AJAX
 * Asynchronous JavaScript And XML
 * Metodología
 * 
 * xmlhttprequest
 * .fetch()
 * 
 * https://www.javascript-coder.com/tutorials/images/ajax-block-diagram1.jpg
 * https://jsonplaceholder.typicode.com/posts
 * 
 */

// cliente
// armar el request
// enviar la peticion http
// verbos http
// POST, GET, PUT, PATCH, DELETE
// 
// server
// status code
// entender la peticion
// armar la respuesta
// enviar la respuesta

// XMLHttpRequest()
/**
 * Declarar un objeto XMLHttpRequest
 * Abrir la conexion (empezar a creat el request)
 * Escuchar cuando el response este listo
 * Enviar la peticion
 * 
 */

//  Declarar un objeto XMLHttpRequest
const xhttp = new XMLHttpRequest()
const xhttp2 = new XMLHttpRequest()
// Abrir la conexion (empezar a creat el request)
// xhttp.open(metodo, url)
xhttp.open( "GET" , "https://jsonplaceholder.typicode.com/posts/1", true)
xhttp2.open( "GET" , "https://jsonplaceholder.typicode.com/posts/1/comments", true)



// Escuchar cuando el response este listo
xhttp.onload = function(data) {
    if(data.target.status === 200){
        let res = data.target.response
        let objResp = JSON.parse(res)
        // console.log(res)
        // console.log(objResp)
        // imprimir en DOM
        let templateUser = ''
        
            templateUser += `            
            <div class="col-12 col-md-4 ">
                <div class="card align-items-center mb-4 p-3 bg-light" >
                    <div class="card-body">
                        <h5 class="card-title">${objResp.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${objResp.id}</h6>
                        <p class="card-text">${objResp.body}</p>
                        <div class="coment">

                        </div>
                        

                    </div>
                </div>
            </div>            
            `
        
       
        document.querySelector('.row').innerHTML = templateUser
    }
    
}

// Enviar la peticion
xhttp.send()

xhttp2.onload = function(data) {
    if(data.target.status === 200){
        let res = data.target.response
        let objResp = JSON.parse(res)
        console.log(res)
        console.log(objResp)
        // imprimir en DOM
        let templateUser = ''        
            templateUser = `           
                        <div >                        
                            <ul class="list-group">
                                <li class="list-group-item">${objResp.name}</li>
                                <li class="list-group-item">${objResp.email}</li>
                                <li class="list-group-item">${objResp.body}</li>
                            </ul>                     
                        </div>

            `
        document.querySelector('.coment').innerHTML = templateUser
    }
    
}

// Enviar la peticion
xhttp2.send()





// // Escuchar cuando el response este listo
// xhttp.onload = function(data) {

//     if(data.target.status === 200){
//         let res = data.target.response
//         let objResp = JSON.parse(res)
//         // console.log(res)
//         // console.log(objResp)
//         // imprimir en DOM
//         let templateUser = ''
        
//             templateUser += `            
//             <div class="col-12 col-md-4 ">
//                 <div class="card align-items-center mb-4 p-3 bg-light" >
//                     <div class="card-body">
//                         <h5 class="card-title">${objResp.title}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted">${objResp.id}</h6>
//                         <p class="card-text">${objResp.body}</p>

//                         <div>
//                             <ul class="list-group">
//                                 <li class="list-group-item">An item</li>
//                                 <li class="list-group-item">A second item</li>
//                                 <li class="list-group-item">A third item</li>
//                                 <li class="list-group-item">A fourth item</li>
//                                 <li class="list-group-item">And a fifth one</li>
//                             </ul>                      
//                         </div>

//                     </div>
//                 </div>
//             </div>            
//             `
        
       
//         document.querySelector('.row').innerHTML = templateUser
//     }
    
// }

// // Enviar la peticion
// xhttp.send()



/**
 * 
 * 
 * 
 */

// objeto a texto JSON.stringify(obj)
// texto a objeto JSON.parse(text)

// APi fetch

// fetch()



