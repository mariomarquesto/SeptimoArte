mostrarBotonLogout();
mostrarBotonAdmin();

function mostrarBotonLogout() {
  const logUser = JSON.parse(localStorage.getItem("user"));
  if (logUser) {
    document
      .getElementById("buttonLogout")
      .classList.remove("button-logout-escondido");
    document
      .getElementById("buttonLogout")
      .classList.add("button-logout-activo");
  } else {
  }
}

function mostrarBotonAdmin() {
  const logUser = JSON.parse(localStorage.getItem("user"));
  if (logUser && logUser.role === "admin") {
    alert("Bienvenido Administrador");
    document
      .getElementById("logoAdmin")
      .classList.remove("logo-admin-escondido");
    document.getElementById("logoAdmin").classList.add("logo-admin-activo");
  } else {
  }
}

function cerrarSesion() {
  localStorage.removeItem("user");
  window.location.href = "./index.html";
}

function obtener(userAccount, pass) {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((response) => {
      const usuario = response.find((user) => user.email == userAccount.value);
      if (usuario) {
        if (usuario.password == pass.value) {
          alert("Bienvenido");
          const userLog = {
            email: usuario.email,
            userName: usuario.userName,
            id: usuario.id,
            keyAdmin: usuario.keyAdmin,
            role: usuario.role,
          };
          localStorage.setItem("user", JSON.stringify(userLog));
          window.location.href = "../index.html";
        } else {
          alert("El email o la contraseña son incorrectas");
        }
      } else {
        alert(`el correo ${userAccount.value} no existe`);
      }
    });
}
