/*-------------------------ENVIAR EMAILS ----------------------*/

// Email.send({
//     Host : "smtp.yourisp.com",
//     Username : "Yuliicolque@gmail.com",
//     Password : "ABDA3B0F3BF80C6C11DDAC144E6AA5582008",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );

const enviarEmail = (nom, apellido, correo, comentario) => {
  let nombreCompleto = `${nom.value} ${apellido.value}`;
  let cuerpo = comentario.value;
  let email = correo.value;
  console.log(nombreCompleto);
  console.log(email);
  console.log(cuerpo);

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "Yuliicolque@gmail.com",
    Password: "ABDA3B0F3BF80C6C11DDAC144E6AA5582008",
    To: "yuliicolque@gmail.com",
    From: email,
    Subject: "Comentarios de los clientes",
    Body: cuerpo,
  }).then((message) => alert(message));
};
let burger = document.querySelector(".botonBurger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});
