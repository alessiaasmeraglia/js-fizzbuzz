/* // Stampare i numeri da 1 a 100
for (i = 1; i <=100; i++){
    // Se il numero è divisibile solo per 3
    if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // Se il numero è divisibile solo per 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // Se il numero è divisibile sia per 3 che per 5
    else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    }
    // Altrimenti stampare il numero
    else {
        console.log(i);
    }
} */

const output = document.getElementById("container");

for (i = 1; i <=100; i++){
    let a = "";

    if (i % 3 === 0)
        a += "Fizz";
    if(i % 5 === 0)
        a += "Buzz";

    output.innerHTML += (a || i) + " ";
}
