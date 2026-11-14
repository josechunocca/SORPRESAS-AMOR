const envelopeBtn = document.getElementById('envelopeBtn');
  const letter = document.getElementById('loveLetter');
  envelopeBtn.addEventListener('click', () => {
    const opened = letter.classList.toggle('open');
    envelopeBtn.setAttribute('aria-expanded', String(opened));
    envelopeBtn.querySelector('strong').textContent = opened ? 'Tu carta está abierta ❤️' : 'Una carta para ti';
    envelopeBtn.querySelector('small').textContent = opened ? 'Toca de nuevo para cerrar' : 'Toca aquí para abrir tu sorpresa';
    if (opened) letter.scrollIntoView({behavior:'smooth', block:'center'});
  });

  function heartsBurst(amount = 22) {
    const symbols = ['❤️','💕','💗','💖','♡','✨'];
    for (let i = 0; i < amount; i++) {
      const heart = document.createElement('span');
      heart.className = 'heart-float';
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      heart.style.left = (4 + Math.random() * 92) + 'vw';
      heart.style.bottom = '-35px';
      heart.style.fontSize = (16 + Math.random() * 25) + 'px';
      heart.style.animationDuration = (2.5 + Math.random() * 2) + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }
  }
const tarjetas = document.querySelectorAll(".polaroid");
const indicadores = document.getElementById("indicadores");
const marco = document.getElementById("marcoCarrusel");

let fotoActual = 0;

// Crear indicadores automáticamente
tarjetas.forEach((tarjeta, index) => {
    const punto = document.createElement("span");

    punto.classList.add("indicador");

    punto.addEventListener("click", () => {
        mostrarFoto(index);
    });

    indicadores.appendChild(punto);
});

const puntos = document.querySelectorAll(".indicador");

// Mostrar fotografía
function mostrarFoto(index) {

    fotoActual = (index + tarjetas.length) % tarjetas.length;

    tarjetas.forEach((tarjeta, i) => {
        tarjeta.classList.toggle("activa", i === fotoActual);
    });

    puntos.forEach((punto, i) => {
        punto.classList.toggle("activo", i === fotoActual);
    });
}

// Flechas
function cambiarFoto(direccion) {
    mostrarFoto(fotoActual + direccion);
}

// Deslizar con el dedo
let inicioX = 0;

marco.addEventListener("touchstart", (e) => {
    inicioX = e.changedTouches[0].screenX;
}, { passive: true });

marco.addEventListener("touchend", (e) => {
    const finalX = e.changedTouches[0].screenX;
    const diferencia = finalX - inicioX;

    if (Math.abs(diferencia) > 45) {
        cambiarFoto(diferencia < 0 ? 1 : -1);
    }
}, { passive: true });

// Iniciar galería
mostrarFoto(0);
  document.getElementById('heartBtn').addEventListener('click', () => heartsBurst(32));