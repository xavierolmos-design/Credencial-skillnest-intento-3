// Esperar a que todo el contenido HTML cargue antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {

    // 1. FUNCIONALIDAD DEL BOTÓN "¿CÓMO FUNCIONA?"
    const botonComoFunciona = document.querySelector('.boton-como-funciona');

    botonComoFunciona.addEventListener('click', () => {
        alert('Busca a tus Amigos y reparte a través de nuestra página abrazos a todos.');
    });


    // 2. FUNCIONALIDAD DE LOS BOTONES "ENVIAR ABRAZO"
    const botonesEnviarAbrazo = document.querySelectorAll('.boton-enviar-abrazo');

    botonesEnviarAbrazo.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            // Localizamos el contenedor de la tarjeta donde está el botón
            const contenedorAbrazos = e.target.parentElement;
            const textoContador = contenedorAbrazos.querySelector('span');

            // Extraemos solo el número del texto actual (ejemplo: "3 abrazo(s)" -> 3)
            let cantidadAbrazos = parseInt(textoContador.textContent);

            // Incrementamos la cantidad en 1
            cantidadAbrazos++;

            // Actualizamos el texto en la página
            textoContador.textContent = `${cantidadAbrazos} abrazo(s)`;
        });
    });


    // 3. FUNCIONALIDAD DEL BOTÓN "ACEPTAR" EN COOKIES
    const botonAceptarCookies = document.querySelector('.boton-aceptar-cookies');
    const avisoCookies = document.querySelector('.aviso-cookies');

    botonAceptarCookies.addEventListener('click', () => {
        // Ocultar la barra de aviso de cookies
        avisoCookies.style.display = 'none';
    });

});