function calculate(){
    const r = document.getElementById("r").value;
    // ! Class'lara erisim icin .class_adi
    // ! id'li bir HTML elemanina erisim icin ise #id_adi
    const h = document.querySelector(".h").value;
    const result = (Math.PI * (r**2) * h).toFixed(2);
    document.querySelector(".volume").innerHTML = result;
}

const button = document.querySelector(".btn");
button.style.color = "red";
button.style.backgroundColor = "lightgreen";
button.style.width = "200px";



