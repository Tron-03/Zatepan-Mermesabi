document.getElementById("search-form").addEventListener("submit", function(event) {
event.preventDefault(); // Evita que el formulario se envíe y recargue la página
          
var input = document.getElementById("search-input").value.toLowerCase(); // Obtiene el valor del campo de búsqueda en minúsculas
          
// Redirecciona a la sección correspondiente según el término de búsqueda
if (input === "producto") {
                window.location.href = "producto_es.html";
    } else if (input === "quienes somos") {
                window.location.href = "QS.html";
    } else if (input === "contacto") {
                window.location.href = "contacto.html";
    } else if (input === "politica de privacidad") {
                window.location.href = "privacidad.html";
    } else if (input === "rick") {
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else if (input === "zelda") {
                window.location.href = "https://www.youtube.com/watch?v=VoOVmV6TFtQ";  
    } else if (input === "product") {
                    window.location.href = "producto_en.html";
    } else if (input === "about us") {
                    window.location.href = "AU.html";
    } else if (input === "contact") {
                    window.location.href = "contact.html";
    } else if (input === "privacy") {
                    window.location.href = "privacy.html";
    } else {
                alert("No se encontró ninguna sección que coincida con la búsqueda.");
    }
});