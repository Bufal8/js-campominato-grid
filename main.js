// Assegno ad una costante l'elemento padre
const squareElement = document.getElementById("square");
console.log(squareElement);

// Utilizzo il ciclo for per creare tutte le caselle
for (let i = 0; i < 100; i++){

    // Eseguo la funzione creaCaselleSquare tante volte quante caselle voglio creare
    const newCaselle = creaCaselleSquare();

    // Appendo all'elemento padre le caselle create dalla funzione
    squareElement.append(newCaselle);
}









// Creo una funzione che crei le caselle
function creaCaselleSquare(){
    const newElement = document.createElement("div");
    newElement.classList.add("casella");
    return newElement;
}