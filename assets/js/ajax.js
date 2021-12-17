// GET
// VERbost http (POST, PUT, PATCH,  GET,DELETE)

// POST
const xhttp = new XMLHttpRequest()
xhttp.open( "POST" , "https://genjs-292ac-default-rtdb.firebaseio.com/posts/.json", true)
xhttp.onload = function(data) {
    if(data.target.status === 200){
        console.log(data)
    }
}

let objNewPost =  {
    author: 'ivonne',
    title: 'foo',
    body: 'bar lorem',
}

//xhttp.send( JSON.stringify(objNewPost) )

// PATCH actualizar datos
const updateUser =  (objUpdate, idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "PATCH" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send( JSON.stringify(objUpdate) )
}

let objUpdatePost =  {
    author: 'Ivonne Scarlett Chavez Medina',
}

//updateUser(objUpdatePost, '-Mr59ncZddD9O8vP5q-e')

// DELETE Eliminar datos
const deleteUser =  (idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "DELETE" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send()
}
//deleteUser('-Mr5APubLTKAdcgeulQ0')













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



