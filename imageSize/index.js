const plusEl = document.getElementById("plus");
const minusEl = document.getElementById("minus");
const imgEl = document.getElementById("img");

const element = document.getElementById("img");
const elementcss = window.getComputedStyle(element);
console.log(elementcss);


let elementValue = elementcss.getPropertyValue("width");
// console.log(parseInt(elementValue));
// console.log(typeof(elementValue))
// const element1 = parseInt(elementValue) + 5 + "px";
// console.log(element1)

plusEl.addEventListener("click", pluscond);

function pluscond(){ 
    const elementSize = parseInt(elementValue) + 5 + "px";
    //console.log(elementSize);
    imgEl.style.width = elementSize ;
    elementValue = elementSize;
}

minusEl.addEventListener("click", minuscond);

function minuscond(){ 
    const elementSize = parseInt(elementValue) - 5 + "px";
    //console.log(elementSize);
    imgEl.style.width = elementSize ;
    elementValue = elementSize;
}
