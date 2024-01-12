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

const fila1 = document.querySelector(".contenedorJs1");
const fila2 = document.querySelector(".contenedorJs2");
const fila3 = document.querySelector(".contenedorJs3");
const fila4 = document.querySelector(".contenedorJs4");
const peliculasFila1 = document.querySelectorAll(".peliculaFila1");
const peliculasFila2 = document.querySelectorAll(".peliculaFila2");
const peliculasFila3 = document.querySelectorAll(".peliculaFila3");
const peliculasFila4 = document.querySelectorAll(".peliculaFila4");

// ----------EVENTO PARA LA FLECHA DERECHA-------------//
const botonDerecha1 = (id) => {
  const flechaDerecha1 = document.getElementById(id);
  fila1.scrollLeft += fila1.offsetWidth;
  console.log(id);
};
const botonDerecha2 = (id) => {
  const flechaDerecha2 = document.getElementById(id);
  fila2.scrollLeft += fila2.offsetWidth;
  console.log(id);
};
const botonDerecha3 = (id) => {
  const flechaDerecha3 = document.getElementById(id);
  fila3.scrollLeft += fila3.offsetWidth;
  console.log(id);
};
const botonDerecha4 = (id) => {
  const flechaDerecha4 = document.getElementById(id);
  fila4.scrollLeft += fila4.offsetWidth;
  console.log(id);
};

// ----------EVENTO PARA LA FLECHA IZQUIERDA-------------//
const botonIzquierda1 = (id) => {
  const flechaIzquierda1 = document.getElementById(id);
  fila1.scrollLeft -= fila1.offsetWidth;
  console.log(id);
};
const botonIzquierda2 = (id) => {
  const flechaIzquierda2 = document.getElementById(id);
  fila2.scrollLeft -= fila2.offsetWidth;
  console.log(id);
};
const botonIzquierda3 = (id) => {
  const flechaIzquierda3 = document.getElementById(id);
  fila3.scrollLeft -= fila3.offsetWidth;
  console.log(id);
};
const botonIzquierda4 = (id) => {
  const flechaIzquierda4 = document.getElementById(id);
  fila4.scrollLeft -= fila4.offsetWidth;
  console.log(id);
};
const carouselInner = document.getElementById("carousel-inner");
fetch("http://localhost:3000/destacados")
  .then((response) => response.json())
  .then((response) => {
    response.map((peli) => {
      const carouselItem = document.createElement("div");
      const peliCarousel = `
              <img
                src="${peli.img}"
                class="imgCarousel"
                alt="pelicula"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="titulo">
                  ${peli.title}
                  <span class="iconoDestacado"
                    ><img
                      src="../RollingProyecto2/img/img-Destacados/iconoDestacado.png"
                      alt="icono destacado"
                  /></span>
                </h5>
                <p>
                  ${peli.desc}
                </p>
                <a
                  class="text-decoration-none btn boton mb-5"
                  href="../RollingProyecto2/html/404.html"
                  type="button"
                  ><i class="fa-solid fa-play"></i>Reproducir</a
                >
              </div>
                `;

      carouselItem.className = "carousel-item pelicula-destacada";
      carouselItem.innerHTML = peliCarousel;
      carouselInner.appendChild(carouselItem);
    });
  });

const containerPopulares = document.getElementById("containerPopulares");
fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=08f4ac90b9e9e07dad9b84738e14c7f2&language=es-MX"
)
  .then((response) => response.json())
  .then((response) => {
    response.results.map((pelicula) => {
      const divPelicula = document.createElement("div");
      const peliculaCont = `<a href="#"><img
      src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"
      alt=""/>
      </a>
      `;
      divPelicula.className = "pelicula peliculaFila1";
      divPelicula.innerHTML = peliculaCont;
      containerPopulares.appendChild(divPelicula);
    });
  });

const containerProximos = document.getElementById("containerProximos");
fetch(
  "https://api.themoviedb.org/3/movie/upcoming?api_key=08f4ac90b9e9e07dad9b84738e14c7f2&language=es-MX"
)
  .then((response) => response.json())
  .then((response) => {
    response.results.map((pelicula) => {
      const divPelicula = document.createElement("div");
      const peliculaCont = `<a href="#"><img
      src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"
      alt=""/>
      </a>
      `;
      divPelicula.className = "pelicula peliculaFila1";
      divPelicula.innerHTML = peliculaCont;
      containerProximos.appendChild(divPelicula);
    });
  });

const containerPuntuacion = document.getElementById("containerPuntuacion");
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=08f4ac90b9e9e07dad9b84738e14c7f2&language=es-MX"
)
  .then((response) => response.json())
  .then((response) => {
    response.results.map((pelicula) => {
      const divPelicula = document.createElement("div");
      const peliculaCont = `<a href="#"><img
      src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"
      alt=""/>
      </a>
      `;
      divPelicula.className = "pelicula peliculaFila1";
      divPelicula.innerHTML = peliculaCont;
      containerPuntuacion.appendChild(divPelicula);
    });
  });

const containerTV = document.getElementById("containerTV");
fetch(
  "https://api.themoviedb.org/3/tv/popular?api_key=08f4ac90b9e9e07dad9b84738e14c7f2&language=es-MX"
)
  .then((response) => response.json())
  .then((response) => {
    response.results.map((pelicula) => {
      const divPelicula = document.createElement("div");
      const peliculaCont = `<a href="#"><img
      src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"
      alt=""/>
      </a>
      `;
      divPelicula.className = "pelicula peliculaFila1";
      divPelicula.innerHTML = peliculaCont;
      containerTV.appendChild(divPelicula);
    });
  });
