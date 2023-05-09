// Assegno ad una costante l'elemento padre
const squareElement = document.getElementById("square");
console.log(squareElement);

// Creo un array di numeri in range 1 / 100 ordinati
// const arrayCaselle = creaArrayNumeriOrdinati(1, 100);
// console.log(arrayCaselle);

// Utilizzo il ciclo for per creare tutte le caselle
for (let i = 1; i <= 100; i++){

    
    // Eseguo la funzione creaCaselleSquare tante volte quante caselle voglio creare
    const newCaselle = creaCaselleSquare("div", "casella");
    
    
    newCaselle.append(i);

    // Creo una funzione che aggiunga la classe "clicked" 
    // alla casella quando cliccata
    newCaselle.addEventListener("click", 
        function(){
            this.classList.add("clicked");
        }
    );

    // Appendo all'elemento padre le caselle create dalla funzione
    squareElement.append(newCaselle);
}







// FUNZIONI

// Creo una funzione che crei le caselle
function creaCaselleSquare(tagType, classToAdd){
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
}

// Creo la funzione che riempie l'array vuoto
// function creaArrayNumeriOrdinati(min, max){
    
//     // creare array interno 
//     const arrayInterno = [];

//     // Imposto una variabile di iterazione e la imposto al valore minimo inserito nella funzione
//     let i = min;
//     // Creo un ciclo while che iteri la funzione fino al raggiungimento del numero massimo inserito nella funzione
//     while (i <= max){
        
//         // Aggiungo all'array interno alla funzione ogni elemento iterato dal ciclo while
//         arrayInterno.push(i);
//         i++
    
//     }
    
//     return arrayInterno;
// }

/* // ciclo for per creare elementi e output
for(let i = 1; i <= 100; i++){
    
    
    // creare nuovo elemento
    const numero = document.createElement('span');
    
    
    // aggiungere classe ad ogni span
    // quadrato.classList.add('square')
    
    
    // inserire il valore all'interno dell'elemento creato
    // numero.append(i);
    
    // se l'elemento è divisibile sia per 3 che per 5
    if(i % 15 == 0){
        quadrato.append("fizzbuzz")
        quadrato.classList.add("fizzbuzz") */

