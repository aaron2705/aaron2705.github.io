
// DESPLEGAR DROPDOWN

const dropdowns = document.querySelectorAll(".dropdown__fondo");

dropdowns.forEach(elemento => {
  elemento.addEventListener("click", () => {


    let height = 0;
    let collapse = elemento.parentNode.querySelector(".dropdown__collapse");
    let contenedor = elemento.parentNode.querySelector(".dropdown__desplegable");

    if (!elemento.children[0].classList.contains("dropdown__item--desplegado")) {
      height = contenedor.scrollHeight;

    }

    collapse.style.height = `${height}px`;

    // Animacion del fondo

    if (!elemento.children[0].classList.contains("dropdown__item--desplegado")) {
      elemento.style.background = "#E7E7E7";

      elemento.style.transition = "0s";

    } else {
      setTimeout(() => {
        elemento.style.background = "transparent";
        elemento.style.transition = "0.2s";
      }, 300)

    }

    // Añadimos la clase

    elemento.children[0].classList.toggle("dropdown__item--desplegado");
    elemento.querySelector(".dropdown__circulo").classList.toggle("dropdown__circulo--rotado");

  })
});


const btnFormulario = document.getElementById("button");

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btnFormulario.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_bbtrfld';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btnFormulario.value = 'Comunicarme con un asesor';
        alert('¡Enviado!');
      }, (err) => {
        btnFormulario.value = 'Comunicarme con un asesor';
        alert(JSON.stringify(err));
      });
  });

  function ModoOscuro() {
    var body = document.body;
    var darkModeIcon = document.getElementById("darkModeIcon");
    var darkModeButton = document.getElementById("darkModeButton");

    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
    } else {
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
    }
}
