const cuad1 = document.querySelector("#cuadrado1")
const cuad2 = document.querySelector("#cuadrado2")
const cuad3 = document.querySelector("#cuadrado3")
const cuad4 = document.querySelector("#cuadrado4")

const cambiaColor = (elemento, color="black") =>{
    elemento.style.backgroundColor = color
}
cuad1.addEventListener("click", () => {cambiaColor(cuad1)})
cuad2.addEventListener("click", () => {cambiaColor(cuad2)})
cuad3.addEventListener("click", () => {cambiaColor(cuad3)})
cuad4.addEventListener("click", () => {cambiaColor(cuad4)})