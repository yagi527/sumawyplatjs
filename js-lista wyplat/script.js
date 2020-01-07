document.getElementById("oblicz").addEventListener('click', liczWyplate);

let docg = document.getElementsByClassName('czas');

for(let i = 0; i < docg.length; i++)
{
    docg[i].addEventListener('change', zmianaGodzCzas);
      

}

let docs = document.getElementsByClassName('stawka');

for(let i = 0; i < docs.length; i++)
{
    docs[i].addEventListener('change', zmianaGodzCzas);
       
}

function zmianaGodzCzas(e) {
    let elem1 = e.target;
    if (elem1.classList.contains('czas')){
        e.target.nextElementSibling.nextElementSibling.innerText = '';
        czyscListeNajlepszych();
    }
    else {
        e.target.nextElementSibling.innerText = '';
    }
    
}

function liczWyplate() {

let lista1 = [];
lista1 = document.getElementsByClassName("pracownik");

// lista1.forEach(function(elem)  {
//     let czas = elem.nextElementSibling;
//     let godziny = czas.nextElementSibling;
//     let wyplata = czas * godziny;
//     console.log(czas + " " + godziny + " " + wyplata);
// });

let najlepsi = [];


for(let i = 0; i<lista1.length; i++){
    let czas = lista1[i].nextElementSibling.value;
    let stawka = lista1[i].nextElementSibling.nextElementSibling.value;
    let wyplata = czas * stawka;

    let obj = {};
    obj.nazwisko = lista1[i].innerText;
    obj.czas = czas;
    najlepsi.push(obj);
    

    lista1[i].style.backgroundColor = "white";
    
    if(czas > 160)
    {
        let nadgodziny = czas - 160;
        wyplata = wyplata + nadgodziny * stawka;
    }
    else if(czas < 100)
    {
        lista1[i].style.backgroundColor = "red";
    }

    lista1[i].nextElementSibling.nextElementSibling.nextElementSibling.innerText = wyplata;
  
    //console.log(czas + " " + stawka + " "+ wyplata);
   // console.log(lista1[i]);
}

najlepsi.sort(compare);

let doc1 = document.getElementById("najlepsi-pracownicy").parentNode;
//doc1.empty();

czyscListeNajlepszych();
for (let i =0; i < Math.min(najlepsi.length,3); i++){
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");

    span1.classList.add('nazwiskoMax');
    span2.classList.add('godzinyMax');
    

    span1.innerText = najlepsi[i].nazwisko;
    span2.innerText = najlepsi[i].czas;
    //doc1.innerHTML += (najlepsi[i].nazwisko + " " + najlepsi[i].czas) + "<br>";

    doc1.appendChild(div1);
    div1.appendChild(span1);
    div1.appendChild(span2);
    

}

}

function compare (a,b) {
  if (Number(a.czas) < Number(b.czas)) return 1;
  if (Number(b.czas) < Number(a.czas)) return -1;
  return 0;
}

function czyscListeNajlepszych() {

    let elem1 = document.getElementById("najlepsi-pracownicy");
        while(elem1.nextSibling) {
    
        elem1.nextSibling.remove();
}
}