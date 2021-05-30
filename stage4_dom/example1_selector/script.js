// ! GETELEMENTBYID
const  paragraph = document.getElementById("par");
paragraph.style.backgroundColor = "black";
paragraph.style.color = "white";
paragraph.style.fontSize = "20px";

const button = document.getElementById("btn");
button.style.width = "100px";
button.style.height - "30px";
button.style.backgroundColor = "black";
button.style.color = "yellow";
button.style.fontSize = "18px";

// ! GETELEMENTBYTAGNAME 

const image = document.getElementsByTagName("img");
console.log(image[0]);
image[0].style.width = "300px";
image[0].style.height = "300px";

image[1].style.border = "3px solid red";

// ! GETELEMENTBYCLASSNAME

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";

// ! QUERYSELECTOR

const title = document.querySelector(".title");
title.innerHTML = "DOM Selector 0.0";

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(blue, purple)"

//          ?   EVENTS

// ! Mouse Over, Mouse Out

document.querySelector(".h1").onmouseover = function () {
    const h1 = document.querySelector(".h1");
    h1.style.color = "white";
    h1.style.backgroundColor = "black";
};

document.querySelector(".h1").onmouseout = function() {
    const h1 = document.querySelector(".h1");
    h1.style.color = "black";
    h1.style.backgroundColor = "white";
}


// ! addEventListener()


document.querySelector("#btn").addEventListener("mouseover", function () {
    document.querySelector("#btn").style.width = "150px";
  });
  
  document.querySelector("#btn").addEventListener("mouseout", () => {
    document.querySelector("#btn").style.width = "100px";
  });