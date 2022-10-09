// ARREGLO DE PROPIEDADES
const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviértete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

function crearHtmlPropiedad(prop) {
  return `
  <div class="propiedad">
    <div class="img" style="background-image: url('${prop.src}')"></div>
    <section>
      <h5>${prop.name}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${prop.rooms}</p>
        <p>Metros: ${prop.m}</p>
      </div>
      <p class="my-3">${prop.description}</p>
      <button class="btn btn-info ">Ver más</button>
    </section>
  </div>
  `
}

let propertySection = document.querySelector(".propiedades")
let totalSection = document.querySelector("#total")
let roomsInput = document.querySelector("#rooms")
let minSizeInput = document.querySelector("#min-size")
let maxSizeInput = document.querySelector("#max-size")

let totalPropiedadesHtml = ""
let totalPropiedades = 0

for (let propiedad of propiedadesJSON) {
  totalPropiedadesHtml += crearHtmlPropiedad(propiedad)
  totalPropiedades += 1
}
propertySection.innerHTML = totalPropiedadesHtml
totalSection.innerHTML = totalPropiedades
roomsInput.value = 0
minSizeInput.value = 0
maxSizeInput.value = 0

const searchButton = document.querySelector(".btn-warning")
searchButton.addEventListener("click", function () {
  let roomsQuantity = Number(roomsInput.value)
  let minSizeQuantity = Number(minSizeInput.value)
  let maxSizeQuantity = Number(maxSizeInput.value)

  let filteredPropertiesHtml = ""
  let filteredPropertiesQuantity = 0

  if (roomsQuantity === 0 || minSizeQuantity === 0 || maxSizeQuantity === 0) {
    alert("Faltan campos por llenar")
  }
  else {
    for (let propiedad of propiedadesJSON) {
      if (propiedad.rooms === roomsQuantity && propiedad.m >= minSizeQuantity && propiedad.m <= maxSizeQuantity) {
        filteredPropertiesHtml += crearHtmlPropiedad(propiedad)
        filteredPropertiesQuantity += 1
      }
    }
    propertySection.innerHTML = filteredPropertiesHtml
    totalSection.innerHTML = filteredPropertiesQuantity
  }
})