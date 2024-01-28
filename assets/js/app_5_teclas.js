
let colorTecla = ""
let newColor = ""
const cuad = document.getElementById("key")

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorTecla = "pink"
        console.log(colorTecla)
        cuad.style.backgroundColor=colorTecla
    } else if (event.key === 's') {
        colorTecla = "orange"
        console.log(colorTecla)
        cuad.style.backgroundColor=colorTecla
    } else if (event.key === 'd'){
        colorTecla = "deepskyblue"
        console.log(colorTecla)
        cuad.style.backgroundColor=colorTecla
    } else if (event.key === 'q') {
        let caja = document.querySelector("body")
        let newDiv = document.createElement("div")
        newDiv.classList.add('tamano', 'borde')
        caja.appendChild(newDiv)
        newDiv.style.backgroundColor = 'blueviolet'
    } else if (event.key === 'w'){
        let caja = document.querySelector("body")
        let newDiv = document.createElement("div")
        newDiv.classList.add('tamano', 'borde')
        caja.appendChild(newDiv)
        newDiv.style.backgroundColor = 'darkgrey'
    } else if (event.key === 'e') {
        let caja = document.querySelector("body")
        let newDiv = document.createElement("div")
        newDiv.classList.add('tamano', 'borde')
        caja.appendChild(newDiv)
        newDiv.style.backgroundColor = 'brown'
    }
    })