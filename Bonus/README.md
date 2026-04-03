# FizzBuzz

Mini progetto front-end realizzato con **HTML**, **CSS** e **JavaScript**, in cui vengono mostrati 10 numeri casuali estratti da un array da 1 a 100 e, al click di un pulsante, viene applicata la logica **FizzBuzz**.

## Descrizione

Il progetto genera 10 numeri casuali unici da 1 a 100 e li mostra in pagina all’interno di box.

Quando l’utente preme il pulsante **Controlla**, ogni numero viene analizzato secondo le regole del FizzBuzz:

- se il numero è multiplo di **3** → viene mostrato **Fizz**
- se il numero è multiplo di **5** → viene mostrato **Buzz**
- se il numero è multiplo di **3 e 5** → viene mostrato **FizzBuzz**
- altrimenti il numero resta invariato

Ogni box cambia anche colore in base al risultato.

## Funzionalità

- creazione di un array con i numeri da **1 a 100**
- estrazione di **10 numeri casuali unici**
- visualizzazione dei numeri in pagina
- applicazione della logica **FizzBuzz**
- aggiornamento grafico dei box con classi CSS dedicate
- stampa del riepilogo finale nell’area risultato

## Tecnologie utilizzate

- **HTML5**
- **CSS3**
- **JavaScript**

## Struttura del progetto

```bash
fizzbuzz/
│
├── index.html
├── style.css
└── script.js
```

## Logica del progetto

Il progetto si basa su queste fasi:

1. viene creato un array contenente i numeri da 1 a 100
2. vengono estratti 10 numeri casuali unici
3. i numeri vengono mostrati nei box HTML
4. al click del bottone, ogni numero viene controllato:
   - multiplo di 3 → `Fizz`
   - multiplo di 5 → `Buzz`
   - multiplo di 3 e 5 → `FizzBuzz`
   - altrimenti → numero normale
5. i box cambiano testo e colore in base al risultato

## Funzioni principali

Nel file JavaScript sono presenti funzioni come:

- `generaIndiceRandom(max)` → genera un indice casuale
- `estraiNumeriUnici(array, quantita)` → estrae numeri casuali senza ripetizioni
- `controllaFizzBuzz(numero)` → applica la logica FizzBuzz a un numero

## Come usare il progetto

1. Apri `index.html` nel browser
2. Osserva i 10 numeri casuali mostrati nei box
3. Premi il pulsante **Controlla**
4. Guarda i risultati Fizz, Buzz o FizzBuzz nei box
5. Leggi il riepilogo nell’area risultato

## Esempio di logica

Se uno dei numeri estratti è `15`:

```txt
15 → FizzBuzz
```

Se uno dei numeri estratti è `9`:

```txt
9 → Fizz
```

Se uno dei numeri estratti è `10`:

```txt
10 → Buzz
```

Se uno dei numeri estratti è `7`:

```txt
7 → numero normale
```

## Obiettivi didattici

Questo esercizio è utile per allenarsi con:

- cicli `for`
- array
- funzioni
- numeri casuali
- condizioni `if / else`
- manipolazione del DOM
- eventi in JavaScript
- gestione delle classi CSS dinamiche

## Possibili miglioramenti futuri

- aggiungere un pulsante **Genera nuovi numeri**
- creare direttamente 100 box invece di 10
- mostrare un contatore di quanti Fizz, Buzz e FizzBuzz sono presenti
- aggiungere animazioni sui box
- migliorare ulteriormente lo stile responsive

## Autore

Progetto realizzato come esercitazione di front-end.
