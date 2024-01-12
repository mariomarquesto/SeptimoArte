/*---------------- Animacion al Boton toggler-------------------*/
let burger = document.querySelector(".botonBurger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});
let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-nav", "shadow");
  } else {
    nav.classList.remove("bg-nav", "shadow");
  }
});

const recipientePelicula = document.getElementById("recipient-pelicula");
const descripcionPelicula = document.getElementById("descripcion");
const recipienteGenero = document.getElementById("recipient-genero");
const recipienteImagen = document.getElementById("recipient-imagen");
const agregarPelicula = document.getElementById("agregarPelicula");
const recipientCodigo = document.getElementById("recipient-codigo");

const deleteItem = (id) => {
  fetch(` http://localhost:3000/destacados/${id}`, {
    method: "DELETE",
  });
};

const editItem = (id) => {
  fetch(`http://localhost:3000/destacados/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title: `${editNamePeli.value}`,
      gen: `${editGen.value}`,
      desc: `${editDesc.value}`,
      img: `${editImg.value}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
const setEditModal = (id) => {
  editButton.setAttribute("onclick", `editItem(${id})`);
};

const listaPeliculas = document.getElementById("listaPeliculas");
fetch("http://localhost:3000/destacados")
  .then((response) => response.json())
  .then((response) => {
    response.map((peli) => {
      const trPelicula = document.createElement("tr");
      const peliculaCont = `<td>${peli.title}</td>
      <td>${peli.desc}</td>
      <td>${peli.gen}</td>
      <td>
      <button
            type="button"
            class="btn btn-success m-1"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
            data-bs-whatever="@mdo"
            onclick="editButton.setAttribute('onclick', 'editItem(${peli.id})');"
          >
          <i class="bi bi-pencil"></i>
          </button>
      <button
          class="btn btn-danger m-1" onclick="deleteItem(${peli.id})"
        ><i class="bi bi-archive"></i></button>
      </td>
      `;
      trPelicula.innerHTML = peliculaCont;
      listaPeliculas.appendChild(trPelicula);
    });
  });

// agregarPelicula.addEventListener("submit", function (e) {
//   e.preventDefault();
// });
const botonModal = () => {
  fetch("http://localhost:3000/destacados")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.length !== 3) {
        fetch("http://localhost:3000/destacados", {
          method: "POST",
          body: JSON.stringify({
            title: `${recipientePelicula.value}`,
            gen: `${recipienteGenero.value}`,
            desc: `${descripcionPelicula.value}`,
            img: `${recipienteImagen.value}`,
            peliKey: `${recipientCodigo.value}`,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      } else {
        alert("LLegaste a la maxima capacidad");
      }
    });
};
