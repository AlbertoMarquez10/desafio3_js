
const ele = document.querySelector("#ele1")
const pintar = (ele2, color = "green") =>{
    ele2.style.backgroundColor = color
}

ele.addEventListener("click", () =>{pintar(ele, "yellow")})



/*function pintar(){
    ele.style.backgroundColor = "yellow"
    
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar("green"))*/
