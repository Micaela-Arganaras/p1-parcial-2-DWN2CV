
// estructura card-bootstrap

/*<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>*/

let carrito = [];
let contenedor = document.createElement("div");
contenedor.classList.add("contenedor1");


productos.forEach(producto => {

  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("data-id", producto.id);


  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardImage = document.createElement("img");
  cardImage.classList.add('d-block');
  cardImage.classList.add('mx-auto');
  cardImage.src = producto.imagen;
  cardImage.style.maxWidth = '100%';
  cardImage.style.height = 'auto';


  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  const titleText = document.createTextNode(producto.nombre);
  cardTitle.appendChild(titleText);

  const cardSubtitle = document.createElement("h4");
  cardSubtitle.classList.add("card-subtitle");
  const subtitleText = document.createTextNode('$' + producto.precio);
  cardSubtitle.appendChild(subtitleText);


  const cardCategory = document.createElement("h5");
  cardCategory.classList.add("card-category");
  const categoryText = document.createTextNode(producto.categoria);
  cardCategory.appendChild(categoryText);


  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  const descriptionText = document.createTextNode(producto.descripcion);
  cardText.appendChild(descriptionText);

  const cardButton = document.createElement("button");
  cardButton.classList.add("btn");
  cardButton.classList.add("btn-primary");
  const buttonText = document.createTextNode("Agregar al carrito");
  cardButton.appendChild(buttonText);
  cardButton.addEventListener("click", (e) => {

    const button = e.target;

    const cardBody = button.parentNode;

    const card = cardBody.parentNode;

    const productoId = card.dataset.id;

    for (let producto of productos) {

      if (producto.id == productoId) {

        carrito.push(producto);

        break;
      }
    }
    ProductosCarrito()
  });

  cardBody.appendChild(cardImage);
  cardBody.append(cardTitle, cardSubtitle, cardCategory, cardText, cardButton);
  card.appendChild(cardBody);
  contenedor.append(card);

  document.querySelector("main").append(contenedor);
});

const contenedorPadre = document.createElement('div');
contenedorPadre.id = 'contenedor-padre';
document.body.appendChild(contenedorPadre);


const carritoDiv = document.createElement('div');

carritoDiv.id = 'carrito-div';

contenedorPadre.appendChild(carritoDiv);


function ProductosCarrito() {
  let cantidadCarritoSpan = document.getElementById('items');
  while (cantidadCarritoSpan.firstChild) {
    cantidadCarritoSpan.removeChild(cantidadCarritoSpan.firstChild);
  }
  const cantidadCarritoText = document.createTextNode(carrito.length);
  cantidadCarritoSpan.appendChild(cantidadCarritoText);

  let totalCarritoSpan = document.getElementById("total");
  while (modalBody.firstChild) {
    modalBody.removeChild(modalBody.firstChild);
  }

  let totalCarrito = 0;
  if (carrito.length === 0) {
    const mensajeCarritoVacio = document.createElement('p');
    const mensajeCarritoVacioText = document.createTextNode('El carrito está vacío.');
    mensajeCarritoVacio.appendChild(mensajeCarritoVacioText);
    modalBody.appendChild(mensajeCarritoVacio);
  } else {
    carrito.forEach((producto) => {
      const productoDiv = document.createElement('div');
      const nombreProducto = document.createElement('h5');
      const nombreProductoText = document.createTextNode(producto.nombre);
      nombreProducto.appendChild(nombreProductoText);
      productoDiv.appendChild(nombreProducto);
      modalBody.appendChild(productoDiv);
      totalCarrito += parseFloat(producto.precio); 
    });

    const totalCarritoSpan = document.getElementById("total");
    totalCarritoSpan.textContent = totalCarrito
  }
}



const verCarritoButton = document.getElementById('ver-carrito');

verCarritoButton.addEventListener('click', () => {

  for (let producto of productos) {

    ProductosCarrito();
  }

  modal.classList.remove('d-none');
  ProductosCarrito();
});

//ventana modal carrito

/* <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>*/

//Creo los elementos de la ventana modal de Bootstrap.

const modal = document.createElement('div');
modal.classList.add('modal', 'd-none');
modal.setAttribute('tabindex', '-1');

const modalDialog = document.createElement('div');
modalDialog.classList.add('modal-dialog');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const modalHeader = document.createElement('div');
modalHeader.classList.add('modal-header');

const modalTitle = document.createElement('h3');
modalTitle.classList.add('modal-title');
modalTitle.classList.add('text-dark', 'fs-3')
const tituloModal = document.createTextNode("Mi carrito de compras");
modalTitle.appendChild(tituloModal);

const closeButton = document.createElement('button');
closeButton.setAttribute('type', 'button');
closeButton.classList.add('btn-close');
closeButton.setAttribute('data-bs-dismiss', 'modal');
closeButton.setAttribute('aria-label', 'Close');

//evento para cerra la ventana 

closeButton.addEventListener('click', () => {

  modal.classList.add('d-none');
});


const modalBody = document.createElement('div');
modalBody.classList.add('modal-body');

modalBody.classList.add('modalClase');

while (modalBody.firstChild) {
  modalBody.removeChild(modalBody.firstChild);
}

const modalBodyText = document.createElement('p');

const modalBodyTextNode = document.createTextNode('');
modalBodyText.appendChild(modalBodyTextNode);

modalBody.appendChild(modalBodyText);


const modalFooter = document.createElement('div');
modalFooter.classList.add('modal-footer');
modalFooter.classList.add('footerModal')

const closeButtonFooter = document.createElement('button');
closeButtonFooter.type = 'button';
closeButtonFooter.classList.add('btn', 'btn-secondary');
closeButtonFooter.dataset.bsDismiss = 'modal';
closeButtonFooter.appendChild(document.createTextNode('Close'));

const saveChangesButton = document.createElement('button');
saveChangesButton.type = 'button';
saveChangesButton.classList.add('btn', 'btn-primary');
saveChangesButton.appendChild(document.createTextNode('Agregar'));
saveChangesButton.addEventListener('click', () => {
  modal.classList.add('d-none');
});

// Ventana modal Estructura

modalHeader.appendChild(modalTitle);

modalHeader.appendChild(closeButton);

modalBody.appendChild(modalBodyText);

modalFooter.appendChild(closeButtonFooter);

modalFooter.appendChild(saveChangesButton);

modalContent.appendChild(modalHeader);

modalContent.appendChild(modalBody);

modalContent.appendChild(modalFooter);

modalDialog.appendChild(modalContent);

modal.appendChild(modalDialog);

// Agrego  la ventana modal al documento
document.body.appendChild(modal);


