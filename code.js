/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};


const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

const developerImg = document.getElementById('developer')
developerImg.style.borderRadius = '50%';

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona[0] = prompt('Ingresa tu nombre')
  datosPersona[1] = prompt('Ingresa el año en que naciste')
  datosPersona[2] = prompt('Ingresa tu cuidad')
  datosPersona[3] = confirm('Te interesa Javascript?') 
}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector('#nombre').innerHTML += datosPersona[0]

  let anioActual = 2023;
  let edad = anioActual - datosPersona[1]
  document.querySelector('#edad').innerHTML += edad 
  
  document.querySelector('#ciudad').innerHTML += datosPersona[2]
  document.querySelector('#javascript').innerHTML += datosPersona[3] ? 'Si' : 'No'
}

let tarjetasMostradas = false;

function recorrerListadoYRenderizarTarjetas() {
/* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.getElementById('fila')

  if(!tarjetasMostradas) {
    listado.forEach((item) =>{
      const tarjeta = document.createElement('div')
      tarjeta.classList.add('caja')
  
      const imagen = document.createElement('img')
      imagen.src = item.imgUrl
  
      const lenguaje = document.createElement('p')
      lenguaje.classList.add('lenguajes')
      lenguaje.textContent = item.lenguajes
  
      const bimestre = document.createElement('p')
      bimestre.classList.add('bimestre')
      bimestre.textContent = item.bimestre
  
      tarjeta.appendChild(imagen)
      tarjeta.appendChild(lenguaje)
      tarjeta.appendChild(bimestre)
  
      fila.appendChild(tarjeta)

      tarjetasMostradas = true
    })
} else {

  while(fila.firstChild) {
    fila.removeChild(fila.firstChild)
  }

  tarjetasMostradas = false
}

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.body.classList.toggle('dark')
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let textoVisible = false; 

document.addEventListener('keydown', function(e) {
  if(e.key === 'f' || e.key === 'F') {
    const textoOculto = document.getElementById('sobre-mi')
    if (textoOculto) {
    if(textoVisible) {
      textoOculto.style.visibility = 'hidden'
    } else {
      textoOculto.style.visibility = 'visible'
    }
    textoVisible = !textoVisible
 }
  }
})


