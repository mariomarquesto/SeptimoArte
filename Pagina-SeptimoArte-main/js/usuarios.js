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

const deleteItem = (id) => {
  fetch(` http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });
};
const editUser = (id) => {
  fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      userName: `${editUsuario.value}`,
      email: `${editEmail.value}`,
      password: `${editPassword.value}`,
      role: `${editRole.value}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
const setEditModal = (id) => {
  editButton.setAttribute("onclick", `editItem(${id})`);
};
const listaUsuarios = document.getElementById("listaUsuarios");
fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((response) => {
    response.map((user) => {
      const trUsuarios = document.createElement("tr");
      const usuariosCont = `<td>${user.userName}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>${user.role}</td>
      <td>
      <button
            type="button"
            class="btn btn-success m-1"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
            data-bs-target="#exampleModalEdit"
            data-bs-whatever="@mdo"
            onclick="editButton.setAttribute('onclick', 'editUser(${user.id})');"
          >
          <i class="bi bi-pencil"></i>
          </button>
      <button
          class="btn btn-danger m-1" onclick="deleteItem(${user.id})"
        ><i class="bi bi-archive"></i></button>
      </td>
      `;
      trUsuarios.innerHTML = usuariosCont;
      listaUsuarios.appendChild(trUsuarios);
    });
  });

// agregarPelicula.addEventListener("submit", function (e) {
//   e.preventDefault();
// });
