// Tarea 1

/**
 * Ejercicio 1.
 * Dado el siguiente Array ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
 * Formar el siguiente markup en el DOM
 * <ul class="menu__booking" data-menu="booking">
        <li class="menu__booking__item">Hoteles</li>
        <li class="menu__booking__item">Ofertas</li>
        <li class="menu__booking__item">Viajes</li>
        <li class="menu__booking__item">Ayuda</li>
        <li class="menu__booking__item">Cancelaciones</li>
    </ul>
 * 
 */

let ulMenu = document.createElement('ul')
ulMenu.classList.add('menu__booking')
ulMenu.setAttribute('data-menu','booking')

let liMenuBooking1 = document.createElement('li')
liMenuBooking1.classList.add('menu__booking__item')
liMenuBooking1.textContent = 'Hoteles'
ulMenu.appendChild(liMenuBooking1)

let liMenuBooking2 = document.createElement('li')
liMenuBooking2.classList.add('menu__booking__item')
liMenuBooking2.textContent = 'Ofertas'
ulMenu.appendChild(liMenuBooking2)

let liMenuBooking3 = document.createElement('li')
liMenuBooking3.classList.add('menu__booking__item')
liMenuBooking3.textContent = 'Viajes'
ulMenu.appendChild(liMenuBooking3)

let liMenuBooking4 = document.createElement('li')
liMenuBooking4.classList.add('menu__booking__item')
liMenuBooking4.textContent = 'Ayuda'
ulMenu.appendChild(liMenuBooking4)

let liMenuBooking5 = document.createElement('li')
liMenuBooking5.classList.add('menu__booking__item')
liMenuBooking5.textContent = 'Cancelaciones'
ulMenu.appendChild(liMenuBooking5)

document.getElementsByTagName('body')[0].appendChild(ulMenu)

/**
 * Ejercicio 2.
 * Dado el siguiente Array de objetos "objPromesas"
 * Crear una funcion para Formar el markup necesario para que se vea asi
 * https://ibb.co/hWSvpx5
 * 
 * NOTA: recuerda agregas el CSS necesario para lograr este objetivo
 * 
 */

//  let objPromesas = [
//     {
//         imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/hotel1.png',
//         titulo: 'LA MAYOR COBERTURA',
//     },
//     {
//         imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_desayuno_cortesia_2_0.png',
//         titulo: 'DESAYUNO EN CORTESÍA*',
//     },
//     {
//         imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_cancelacion_flexible_0.png',
//         titulo: 'CANCELACIÓN SIN COSTO**',
//     },
//     {
//         imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_wifi_cortesia_2_0.png',
//         titulo: 'WIFI EN CORTESÍA',
//     }
// ]

