'use strict';

// Array con i numeri da 1 a 100
const numeri = [];

for (let i = 1; i <= 100; i++) {
  numeri.push(i);
}

// Funzione che genera un indice casuale
function generaIndiceRandom(max) {
  return Math.floor(Math.random() * max);
}

// Funzione che estrae numeri unici casuali
function estraiNumeriUnici(array, quantita) {
  const copiaArray = [...array];
  const numeriEstratti = [];

  for (let i = 0; i < quantita; i++) {
    const indiceRandom = generaIndiceRandom(copiaArray.length);
    const numeroRandom = copiaArray[indiceRandom];

    numeriEstratti.push(numeroRandom);
    copiaArray.splice(indiceRandom, 1);
  }

  return numeriEstratti;
}

// Funzione che controlla FizzBuzz
function controllaFizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return 'FizzBuzz';
  }

  if (numero % 3 === 0) {
    return 'Fizz';
  }

  if (numero % 5 === 0) {
    return 'Buzz';
  }

  return numero;
}

// Recupero elementi DOM
const container = document.getElementById('container');
const risultatoElement = document.getElementById('risultato');
const buttonControllo = document.getElementById('btControllo');
const boxes = container.children;

// Estraggo 10 numeri casuali unici
const numeriEstratti = estraiNumeriUnici(numeri, boxes.length);

// Stampo i numeri iniziali nei box
for (let i = 0; i < boxes.length; i++) {
  boxes[i].textContent = numeriEstratti[i];
}

// Evento click
buttonControllo.addEventListener('click', function () {
  const risultati = [];

  for (let i = 0; i < boxes.length; i++) {
    const numero = numeriEstratti[i];
    const valoreFizzBuzz = controllaFizzBuzz(numero);

    boxes[i].classList.remove('fizz', 'buzz', 'fizzbuzz', 'normale');
    boxes[i].textContent = valoreFizzBuzz;

    if (valoreFizzBuzz === 'FizzBuzz') {
      boxes[i].classList.add('fizzbuzz');
      risultati.push(`${numero} = FizzBuzz`);
    } else if (valoreFizzBuzz === 'Fizz') {
      boxes[i].classList.add('fizz');
      risultati.push(`${numero} = Fizz`);
    } else if (valoreFizzBuzz === 'Buzz') {
      boxes[i].classList.add('buzz');
      risultati.push(`${numero} = Buzz`);
    } else {
      boxes[i].classList.add('normale');
      risultati.push(`${numero} = numero normale`);
    }
  }

  risultatoElement.textContent = risultati.join(' | ');
});