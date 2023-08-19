const bgColorEl = document.getElementById("bgcolor");
const fontSizeEl = document.getElementById("fontSize");
const fontColorEl = document.getElementById("fontColor");
const fontWeightEl = document.getElementById("fontWeight");
const paddingEl = document.getElementById("padding");
const borderRadiusEL = document.getElementById("borderRadius");
const buttonEl = document.getElementById("button");

//console.log(bgColorEl.value);
console.log(fontColorEl.value);

buttonEl.addEventListener("click", changeButton);

function changeButton(){
    buttonEl.style.backgroundColor = bgColorEl.value;
    buttonEl.style.fontSize = fontSizeEl.value;
    buttonEl.style.color = fontColorEl.value;
    buttonEl.style.fontWeight = fontWeightEl.value;
    buttonEl.style.padding = paddingEl.value;
    buttonEl.style.borderRadius = borderRadiusEL.value;
}
