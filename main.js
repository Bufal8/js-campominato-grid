// Assegno ad una costante l'elemento padre
const squareElement = document.getElementById("square");
console.log(squareElement);

// Utilizzo il ciclo for per creare tutte le caselle
for (let i = 0; i < 100; i++){

    // Eseguo la funzione creaCaselleSquare tante volte quante caselle voglio creare
    const newCaselle = creaCaselleSquare("div", "casella");

    newCaselle.addEventListener("click", 
        function(){
            this.classList.add("clicked");
        }
    )

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