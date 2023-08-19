const buttonEL = document.getElementById("button");
const image1El = document.querySelector("image1");
const image2El = document.querySelector("image2");
console.log(image2El)

let isToggled = true;


function toggle(){
//console.log("clicked");
    if(isToggled){
        image1El.style.display = "block";
        image2El.style.display ="none";
        console.log("clicked")
    }
    else{
        image1El.display ="none";
        image2El.display ="block";
    }
    isToggled = !isToggled;
};

buttonEL.addEventListener("click", toggle);
