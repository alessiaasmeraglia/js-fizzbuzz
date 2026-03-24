// Creo un array vuoto
let numeri = [];

// Inserisco i numeri da 1 a 100 dentro l'array
for (let i = 1; i <= 100; i++) {
    numeri.push(i);
}

// Funzione per prendere un numero random dall'array
function generaNumeroRandom(array) {
  let indiceRandom = Math.floor(Math.random() * array.length);
    return array[indiceRandom];
}

window.addEventListener("load", () => {
    // Selezione elementi DOM
    let container = document.getElementById("container");
    let risultatoElement = document.getElementById("risultato");
    let boxes = container.children;

    // Array che conterrà i 10 numeri random
    let numeriEstratti = [];

    // Scrivo 10 numeri unici random nei div
    for (let i = 0; i < boxes.length; i++) {
    let indiceRandom = Math.floor(Math.random() * numeri.length);
    let numeroRandom = numeri[indiceRandom];

        numeriEstratti.push(numeroRandom);
        boxes[i].textContent = numeroRandom;

        numeri.splice(indiceRandom, 1);
    }

 // Evento click sul bottone
document.getElementById("btControllo").addEventListener("click", () => {
    let risultati = [];

    for (let i = 0; i < boxes.length; i++) {
    let numero = parseInt(boxes[i].textContent);

      // Tolgo eventuali classi vecchie
        boxes[i].classList.remove("fizz", "buzz", "fizzbuzz", "normale");

        if (numero % 3 === 0 && numero % 5 === 0) {
            boxes[i].textContent = "FizzBuzz";
            boxes[i].classList.add("fizzbuzz");
            risultati.push(numero + " = FizzBuzz");
        } else if (numero % 3 === 0) {
            boxes[i].textContent = "Fizz";
            boxes[i].classList.add("fizz");
            risultati.push(numero + " = Fizz");
        } else if (numero % 5 === 0) {
            boxes[i].textContent = "Buzz";
            boxes[i].classList.add("buzz");
            risultati.push(numero + " = Buzz");
        } else {
            boxes[i].classList.add("normale");
            risultati.push(numero + " = numero normale");
        }
    }

    risultatoElement.innerHTML = risultati.join(" | ");
    });
});