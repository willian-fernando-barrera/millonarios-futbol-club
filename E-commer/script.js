



const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    };
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 >
        </td>
        <td>${elemento.titulo}</td>
        <td>${elemento.precio}</td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento, 
    elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}


// Confirmación de carga de script.js
alert("Archivo script.js cargado correctamente.");

// Mostrar el formulario de pago al hacer clic en "Finalizar Compra"
document.getElementById('checkout-btn').addEventListener('click', function() {
    console.log('Botón "Finalizar Compra" clickeado');
    document.getElementById('formulario-pago').style.display = 'flex';
    alert("Formulario de pago mostrado");
});

// Evento para cerrar el formulario al hacer clic en "Cancelar"
document.getElementById('cerrar-formulario').addEventListener('click', function() {
    console.log('Botón "Cancelar" clickeado');
    document.getElementById('formulario-pago').style.display = 'none';
    alert("Formulario de pago ocultado (Cancelar)");
});

// Evento para el botón "Pagar Ahora" que muestra la alerta de éxito y cierra el formulario
document.getElementById('pago-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío real del formulario
    console.log('Formulario enviado');
    alert('Pago procesado con éxito.');
    document.getElementById('formulario-pago').style.display = 'none';
});


pagoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Simula el procesamiento del pago
    setTimeout(() => {
        alert('Pago realizado con éxito. ¡Gracias por tu compra!');
        formularioPago.style.display = 'none'; // Oculta el formulario

        // Limpia el carrito
        vaciarCarrito();
    }, 1000); // Simula un retraso de 1 segundo
});


function vaciarCarrito() {
    const listaCarrito = document.querySelector('#lista-carrito tbody');
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}

