// Ac butonuna her tiklandiginda lamba_on resmini goster
    document.querySelector(".on").onclick = function () {
    document.querySelector(".image").src = "./img/lamba_on.gif";
  };
  // Kapa butonuna her tiklandiginda lamba_off resmini goster.
  document.querySelector(".off").onclick = function () {
    document.querySelector(".image").src = "./img/lamba_off.gif";
  };
// resmin uzerine mouse her geldiginde lamba_on resmini goster.
  document.querySelector(".image").addEventListener("mouseover",() =>{
    document.querySelector(".image").src = "./img/lamba_on.gif";
  });
// resmin uzerinden mouse her ayrıldiginda lamba_off resmini goster.
  document.querySelector(".image").addEventListener("mouseout", function(){
    document.querySelector(".image").src = "./img/lamba_off.gif";    
  });

  // Klavyeden her bir tusa basildiginda bu fonksiyon tetiklenecek.
  document.querySelector(".textbox").onkeyup = function() {
    const checkbox = document.querySelector(".checkbox");
    const textbox = document.querySelector(".textbox");

    if(checkbox.checked == true){
         textbox.value = textbox.value.toUpperCase()
    }else{
        textbox.value = textbox.value.toLowerCase()
    }
        }


    const lastDiv = document.querySelector(".input-div");
    const h1 = document.createElement("h1");
    const text = document.createTextNode("Developer Languages");
    h1.appendChild(text);
    lastDiv.after(h1);   // ! Before Div or After Div
    h1.style.marginTop = "20px";
    h1.style.color = "red";
    h1.style.textAlign = "left";  
    
    // Ekle butonuna  her tıklandiginda
document.querySelector(".add").onclick = function () {
    // ekleme yapılacak listeyi al
    const list = document.querySelector(".list");
    //input elemanina girilen yeni satirin degerini al
    const line = document.querySelector(".lang");
    // yeni girilen satiri saklamak icin bir li olusturduk.
    const newList = document.createElement("li");
    // yeni li icin textnode olusturduk
    const textNode = document.createTextNode(line.value);
    //olusturdugumuz texnode'u yeni li'ye bagladik.
    newList.appendChild(textNode);
    // yeni eklenen satiri var olan listeye (ul) baglayalim.
    list.appendChild(newList);
    //input içinde kalan veriyi sil
    line.value = "";
  };

  // Sil butonuna  her tıklandiginda
    document.querySelector(".del").onclick = function () {
    const list = document.querySelector(".list");
    // liste.removeChild(liste.firstElementChild);  // ilk elemani sil
    list.removeChild(list.lastElementChild); // son elemani sil
  };