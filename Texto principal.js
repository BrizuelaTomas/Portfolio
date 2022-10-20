
const testo = document.querySelector(".segundo-texto");

const textocargando = () =>{
  setTimeout(() =>{
    testo.textContent= "¿Web developer?";
  }, 0);

  setTimeout(() =>{
   testo.textContent= "Licenciado";
  }, 4000);

  setTimeout(() =>{
    testo.textContent= "Junior";
   }, 8000);
}
textocargando();
setInterval(textocargando, 12000);
