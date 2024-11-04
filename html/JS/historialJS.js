// Ejemplo de arreglo j
const j = ["historial 0", "historial 1", "historial 2", "historial 3" , "historial 4", "historial 5", "historial 6"];

// Contenedor donde se añadirán las tarjetas
const container = document.getElementById("main_overview");

// Crear tarjetas para cada elemento en el arreglo j
j.forEach((item, index) => {
    // Crear el contenedor de la tarjeta
    const card = document.createElement("div");
    card.classList.add("overview_card");

    // Crear el contenido de la tarjeta
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("overview_card-info");
    cardInfo.textContent = item; // Asigna el texto del elemento de j

    // Añadir el contenido a la tarjeta
    card.appendChild(cardInfo);

    // Añadir la tarjeta al contenedor principal
    container.appendChild(card);
});
