document.getElementById("buscador").addEventListener("input", function() {
    const texto = this.value.toLowerCase();
    const contenedor = document.getElementById("señas");
    contenedor.innerHTML = ""; // Limpiar resultados anteriores

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        
        // Comprobar si la letra es una letra válida
        if (letra.match(/[a-záéíóúñ]/)) {
            let imagen = document.createElement("img");
            imagen.src = `imagenes/${letra}.jpg`; // Asumiendo que las imágenes están en la carpeta 'imagenes'
            imagen.alt = `Letra ${letra.toUpperCase()}`;
            
            // Establecer tamaño de la imagen
            imagen.style.width = "100px";  // Cambia el valor según lo que necesites
            imagen.style.height = "auto";  // Mantiene la proporción de la imagen

            contenedor.appendChild(imagen);
        }
    }
});
