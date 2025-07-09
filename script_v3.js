// Configuración de la contraseña
const PASSWORD = "montse"; // Cambia esto por la contraseña que quieras
const passwordScreen = document.getElementById("password-screen");
const passwordInput = document.getElementById("password-input");
const passwordSubmit = document.getElementById("password-submit");
const passwordError = document.getElementById("password-error");
const mainContent = document.querySelector(".contenedor");
const h1Element = document.querySelector("h1");

// Ocultar el contenido principal al cargar
mainContent.style.display = "none";
h1Element.style.display = "none";

// Manejar el envío de la contraseña
passwordSubmit.addEventListener("click", () => {
    if (passwordInput.value.toLowerCase() === PASSWORD) {
        // Contraseña correcta
        passwordScreen.style.display = "none";
        // Mostrar el contenido principal
        mainContent.style.display = "";
        h1Element.style.display = "";
    } else {
        // Contraseña incorrecta
        passwordError.textContent = "Contraseña incorrecta. Intenta de nuevo.";
        passwordError.style.display = "block";
        passwordInput.value = "";
    }
});

// También permitir enviar con Enter
passwordInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        passwordSubmit.click();
    }
});

// Resto del código original para manejar la carta
const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }
    } 
});