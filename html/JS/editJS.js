// Selecciona el contenedor donde se añadirán las tarjetas de documentos
const documentContainer = document.getElementById('document-container');

// Selecciona el input de archivo
const fileInput = document.getElementById('file-upload');

// Escucha el evento de cambio en el input de archivo
fileInput.addEventListener('change', (event) => {
    // Limpia el contenedor en cada nueva selección si quieres que se actualice o añade nuevos sin borrar los anteriores
    // documentContainer.innerHTML = ''; // Quita este comentario si deseas borrar el contenedor en cada cambio

    // Recorre los archivos seleccionados
    Array.from(event.target.files).forEach((file, index) => {
        // Crea la tarjeta de documento
        const card = document.createElement('div');
        card.classList.add('overview_card');
        
        // Agrega el nombre del archivo a la tarjeta
        const cardInfo = document.createElement('div');
        cardInfo.classList.add('overview_card-info');
        cardInfo.textContent = file.name; // Nombre del archivo cargado
        
        // Añade la información del archivo a la tarjeta
        card.appendChild(cardInfo);
        
        // Añade la tarjeta al contenedor de documentos
        documentContainer.appendChild(card);
    });
});

