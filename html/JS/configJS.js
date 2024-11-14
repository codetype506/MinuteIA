function showPopup(type) {
    const form = document.getElementById("formConfig");
    const title = document.getElementById("popup-title");

    // Limpia el contenido del formulario
    form.innerHTML = '';

    // Actualiza el título y genera el contenido del formulario basado en el tipo
    if (type === 'API') {
        title.innerText = "API Key";
        
        // Crear un textarea para la API Key
        const textarea = document.createElement("textarea");
        textarea.name = "apiKey";
        textarea.id = "apiKey";
        textarea.rows = 10;
        textarea.cols = 38;
        form.appendChild(textarea);

    } else if (type === 'Engine') {
        title.innerText = "Motor de API";

        // Crear un campo de texto para el motor de API
        // const input = document.createElement("input");
        // input.type = "text";
        // input.name = "engine";
        // input.placeholder = "Ingrese el motor de API";
        // form.appendChild(input);

    } else if (type === 'Profile') {
        title.innerText = "Perfil";

        // Crear campos para el perfil
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.name = "name";
        nameInput.placeholder = "Nombre";
        nameInput.style.width = "70%";
        nameInput.style.height = "15px";
        nameInput.style.padding = "10px";
        nameInput.style.margin = "10px";
        form.appendChild(nameInput);

        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.name = "email";
        emailInput.placeholder = "Correo electrónico";
        emailInput.style.width = "70%";
        emailInput.style.height = "15px";
        emailInput.style.padding = "10px";
        emailInput.style.margin = "10px";
        form.appendChild(emailInput);

        const passwordInput = document.createElement("input");
        passwordInput.type = "password";
        passwordInput.name = "password";
        passwordInput.placeholder = "Contraseña";
        passwordInput.style.width = "70%";
        passwordInput.style.height = "15px";
        passwordInput.style.padding = "10px";
        passwordInput.style.margin = "10px";
        form.appendChild(passwordInput);
    }
    // Añadir botones de acción al formulario
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Guardar";
    form.appendChild(submitButton);

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.innerText = "Cancelar";
    cancelButton.onclick = hidePopup;
    form.appendChild(cancelButton);

    // Muestra el pop-up
    document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    // Oculta el pop-up
    document.getElementById("popup").style.display = "none";
}
